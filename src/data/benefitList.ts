import { type ElementType } from "react";
import {
  IconStretching2,
  IconGlassChampagne,
  IconDirections,
  IconTax,
  IconMoodSmile,
} from "@tabler/icons-react";

export interface Benefit {
  icon: ElementType;
  heading: string;
  description: string;
}

export const benefitList: Benefit[] = [
  {
    icon: IconStretching2,
    heading: "Flexibility",
    description:
      "Stay for a night, a week, or a month – no long-term commitments.",
  },
  {
    icon: IconGlassChampagne,
    heading: "Luxury on Demand",
    description:
      "Experience hotel-level service in a private apartment setting.",
  },
  {
    icon: IconDirections,
    heading: "Prime Locations",
    description:
      "Close to business districts, airports, shopping, and entertainment.",
  },
  {
    icon: IconTax,
    heading: "Investment Opportunity",
    description:
      "Own or invest in our shortlet-ready properties for strong returns.",
  },
  {
    icon: IconMoodSmile,
    heading: "Hassle-Free Booking",
    description: "Secure online reservations with transparent pricing.",
  },
];
