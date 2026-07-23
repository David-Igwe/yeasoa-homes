import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

import {Link} from "react-router-dom"

import { IconPhone, IconMail, IconBrandInstagram } from '@tabler/icons-react';

export default function TopNav() {
  return (
    <NavigationMenu className="bg-background h-12">
      <NavigationMenuList className="justify-start sm:ms-10">
        <NavigationMenuItem>
          <NavigationMenuLink render={<a href="https://wa.me/2348036227439" />} ><IconPhone /> 08036227439</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={<a href="mailto:info@yeasoahomes.com" />}><IconMail /> info@yeasoahomes.com</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="justify-end sm:me-10 hidden sm:flex">
        <NavigationMenuItem>
          <NavigationMenuLink render={<a href="https://www.instagram.com/yeasoaluxuryhomes/" />} ><IconBrandInstagram className="size-6" /></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-r-2 border-primary">
          <NavigationMenuLink render={<Link to="#" />}>Login</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={<Link to="#" />}>Sign Up</NavigationMenuLink> 
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}


