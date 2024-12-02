import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import '../App.css'

 
const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  
  const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <>
        <div
        >
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10 text-2xl hover:cursor-pointer">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink 
                    className="relative inline-block px-4 py-2 text-2xl font-light text-zinc-900 transition-all duration-300 ease-in-out 
                    
                    hover:text-zinc-700 
                    hover:after:w-full 
                    dark:text-zinc-100 
                    dark:hover:text-zinc-400
                    after:absolute 
                    after:left-0 
                    after:bottom-0 
                    after:h-[2px] 
                    after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-width after:duration-300 after:ease-in-out
                  "
                    href={item.href}>{item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </>
    )    
  };

  export default Navbar;
  