import { IconBrandWhatsapp, IconMail, IconBrandInstagram } from '@tabler/icons-react';
import {Link} from "react-router-dom"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"

const footerLinks = [
    {label: "Home", link: "/"},
    {label: "About", link: "#"},
    {label: "Privacy Policy", link: "#"},
    {label: "Terms of Service", link: "#"},
    {label: "Contact", link: "#"}
]

const socialMedia = [
  { label: "WhatsApp", icon: IconBrandWhatsapp, link: "https://wa.me/2348036227439" },
  { label: "Email", icon: IconMail, link: "mailto:info@yeasoahomes.com" },
  { label: "Instagram", icon: IconBrandInstagram, link: "https://www.instagram.com/yeasoaluxuryhomes/" },
]

export default function Footer() {
  return (
      <footer className="w-full px-4 py-10 sm:px-6 bg-foreground text-background">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="max-w-sm">
            <Link to="/">YEASOA HOMES</Link>
            <div className="mt-3 flex items-center">
              {socialMedia.map(({label, link, icon:Icon}) => (
              <Button
                key={label}
                variant="link"
                size="icon"
                aria-label={label}
                render={<a href={link} target="_blank" />}
                nativeButton={false}
                className="rounded-none justify-normal text-background hover:muted-foreground"
              >
                <Icon className="size-5" aria-hidden="true" />
              </Button>
            ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
                <h3 className="text-sm tracking-tight">
                  CONTACT
                </h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                    <li>Tel: 08036227439</li>
                    <li>Email: info@yeasoahomes.com</li>
                </ul>
              </div>
            <div>
                <h3 className="text-sm tracking-tight">
                  ADDRESS
                </h3>
                <ul className="mt-3 flex flex-col text-sm font-light">
                    <li>Abuja, Nigeria</li>
                </ul>
              </div>
          </div>
        </div>
        <Separator className="bg-primary my-8" />
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map(({label, link}) => (
              <Button
                key={label}
                variant="link"
                aria-label={label}
                render={<Link to={link} />}
                nativeButton={false}
                className="rounded-none text-background hover:muted-foreground uppercase px-0"
              >{label}</Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2026 Yeasoa Luxury Homes. All Rights Reserved.</p>
        </div>
      </footer>
  )
}