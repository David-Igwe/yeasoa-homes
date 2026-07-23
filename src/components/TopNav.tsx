import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator"

import {Link} from "react-router-dom"

import { IconPhone, IconMail, IconBrandInstagram } from '@tabler/icons-react';

export default function TopNav() {
  return (
    <NavigationMenu className="bg-background h-12 relative z-50">
      <NavigationMenuList className="justify-start sm:ms-10">
        <NavigationMenuItem>
          <NavigationMenuLink render={<a href="https://wa.me/2348036227439" />} className="hover:underline"><IconPhone /> 08036227439</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={<a href="mailto:info@yeasoahomes.com" />} className="hover:underline"><IconMail /> info@yeasoahomes.com</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="justify-end sm:me-10 hidden sm:flex">
        <NavigationMenuItem>
          <NavigationMenuLink render={<a href="https://www.instagram.com/yeasoaluxuryhomes/" />} ><IconBrandInstagram className="size-6" /></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={<Link to="#" />} className="hover:underline">Login</NavigationMenuLink>
        </NavigationMenuItem>
        <Separator orientation="vertical" />
        <NavigationMenuItem>
          <NavigationMenuLink render={<Link to="#" />} className="hover:underline">Sign Up</NavigationMenuLink> 
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}


