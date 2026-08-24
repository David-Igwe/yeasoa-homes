import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Flag } from "@blade-flags/react";
import { defaultFlags } from "@blade-flags/core/flags/default";
import { countries } from "countries-list";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../src/components/ui/combobox";
import { Item, ItemContent, ItemMedia } from "../src/components/ui/item";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldError,
} from "../src/components/ui/field";
import { Textarea } from "../src/components/ui/textarea";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";

import TotalOrderPrices from "../src/components/TotalOrderPrices";

const countriesInfo = Object.entries(countries).map(
  ([countryCode, country]) => ({
    countryCode: countryCode.toLowerCase(),
    countryName: country.name,
  }),
);

const countryByName = new Map(
  countriesInfo.map((country) => [country.countryName, country]),
);

const CountryOption = memo(
  ({ countryCode, countryName }: (typeof countriesInfo)[number]) => (
    <ComboboxItem value={countryName}>
      <Item>
        <ItemMedia variant="icon">
          <Flag code={countryCode} flags={defaultFlags} className="size-6" />
        </ItemMedia>
        <ItemContent>{countryName}</ItemContent>
      </Item>
    </ComboboxItem>
  ),
);

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Please enter your phone number")
    .regex(
      /^(?:\+?234(?:0)?|0)[789][01]\d{8}$|^\+?[1-9]\d{6,14}$/,
      "Please enter a valid phone number",
    ),
  country: z.string().min(1, "Please enter your country"),
  address: z.string(),
  notes: z.string(),
});

type contactFormType = z.infer<typeof contactFormSchema>;

const defaultContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  address: "",
  notes: "",
};

export default function OrderCheckout() {
  const contactForm = useForm<contactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultContactFormValues,
  });

  const navigate = useNavigate()

  const onSubmitContactForm = (data: contactFormType) => {
    //Form submission logic to the backend goes here, also I think it should navigate to the success page but also have an error modal in case the order was not able to go through.
    console.log(data);
    navigate("/order/create/success");
  };

  return (
    <section className="mx-5 sm:mx-20 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <form
            id="contact-form"
            onSubmit={contactForm.handleSubmit(onSubmitContactForm)}
          >
            <FieldGroup>
              <h2 className="font-display text-2xl font-bold mb-6">
                Contact and Billing Details
              </h2>
              <Controller
                name="firstName"
                control={contactForm.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="grid grid-cols-[15%_85%] gap-0"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="firstName">First Name *</FieldLabel>
                    <div className="flex flex-col gap-1">
                      <Input
                        {...field}
                        id="firstName"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  </Field>
                )}
              />

              <Controller
                name="lastName"
                control={contactForm.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="grid grid-cols-[15%_85%] gap-0"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="lastName">Last Name *</FieldLabel>
                    <div className="flex flex-col gap-1">
                      <Input
                        {...field}
                        id="lastName"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={contactForm.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="grid grid-cols-[15%_85%] gap-0"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="email">Email *</FieldLabel>
                    <div className="flex flex-col gap-1">
                      <Input
                        {...field}
                        id="email"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={contactForm.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="grid grid-cols-[15%_85%] gap-0"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="phone">Phone *</FieldLabel>
                    <div className="flex flex-col gap-1">
                      <Input
                        {...field}
                        id="phone"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  </Field>
                )}
              />

              <Controller
                name="country"
                control={contactForm.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="grid grid-cols-[15%_85%] gap-0"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="country">Country *</FieldLabel>
                    <div className="flex flex-col gap-1">
                      <Combobox
                        items={countriesInfo.map(
                          ({ countryName }) => countryName,
                        )}
                        value={field.value}
                        onValueChange={(countryName: string | null) => {
                          field.onChange(countryName);
                        }}
                      >
                        <ComboboxInput
                          name="country"
                          autoComplete="country-name"
                          startAdornment={
                            countryByName.get(field.value) && (
                              <Flag
                                code={
                                  countryByName.get(field.value)!.countryCode
                                }
                                flags={defaultFlags}
                                className="size-6"
                              />
                            )
                          }
                        />
                        <ComboboxContent>
                          <ComboboxEmpty>Country not found.</ComboboxEmpty>
                          <ComboboxList>
                            {(countryName) => {
                              const country = countryByName.get(countryName);
                              return country ? (
                                <CountryOption {...country} />
                              ) : null;
                            }}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  </Field>
                )}
              />

              <Controller
                name="address"
                control={contactForm.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="grid grid-cols-[15%_85%] gap-0"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="address">Address</FieldLabel>
                    <div className="flex flex-col gap-1">
                      <Textarea {...field} id="address" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  </Field>
                )}
              />

              <FieldSeparator />

              <h2 className="font-display text-2xl font-bold">Notes</h2>
              <Controller
                name="notes"
                control={contactForm.control}
                render={({ field, fieldState }) => (
                  <Field
                    className="grid grid-cols-[20%_80%] gap-0"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="notes">Additional Notes</FieldLabel>
                    <div className="flex flex-col gap-1">
                      <Textarea {...field} id="notes" />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </div>
        <div>
          <TotalOrderPrices />
          <Button
            type="submit"
            form="contact-form"
            variant="secondary"
            nativeButton={false}
            className="uppercase p-2 w-full mt-3"
          >
            Pay Now
          </Button>
        </div>
      </div>
    </section>
  );
}
