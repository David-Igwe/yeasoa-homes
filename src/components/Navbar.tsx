import {useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom"

import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

import { cn } from "../lib/utils"
import {IconMenu2} from "@tabler/icons-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { label: "HOME", path: "#" },
  { label: "ABOUT", path: "#" },
  { label: "PROPERTIES", path: "#" },
  { label: "BLOG", path: "#" },
  { label: "CONTACT", path: "#" },
]

  return (
    <section className={cn(
        "w-full left-0 right-0 z-40 transition-all duration-100",
        isScrolled
          ? "fixed top-0 bg-background/95 backdrop-blur-md shadow-sm text-foreground"
          : "absolute top-12 bg-transparent text-white"
      )}>
      <header className="relative flex h-16 w-full items-center px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">YEASOA HOMES</Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map(({label, path}) => (
            <Button
              key={label}
              render={<NavLink to={path} />}
              nativeButton={false}
              variant="link"
              size="sm"
              className="text-white"
            >
              {label}
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Button
            render={<a href="#"/>}
            nativeButton={false}
            variant="outline"
            size="sm"
            className="hidden p-4 border border-white text-white bg-transparent  md:inline-flex"
          >
            BOOK NOW
          </Button>
          

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
              aria-label="Open menu"
            >
              <IconMenu2 aria-hidden="true" className="stroke-foreground" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2.5">
                  <Link to="/">YEASOA HOMES</Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-2">
                {navLinks.map(({label, path}) => (
                  <SheetClose
                    key={label}
                    render={<NavLink to={path} />}
                    nativeButton={false}
                    className="px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {label}
                  </SheetClose>
                ))}
              </nav>
              <SheetFooter>
                <Button
                  render={<Link to="#" />}
                  nativeButton={false}
                  variant="default"
                  className="w-full"
                >
                  BOOK NOW
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </section>
  );
}
