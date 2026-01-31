"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="fixed top-5 z-50 w-full">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="
            grid h-14 grid-cols-[1fr_auto_1fr] items-center
            rounded-xl border border-black/50
            bg-white backdrop-blur-md
            px-8 text-black shadow-lg
          "
        >
          {/* LOGO */}
          <Link href="/" className="justify-self-start">
            <Image
              src={logo}
              alt="Logo"
              width={55}
              height={55}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-6 text-md text-black/70 font-semibold font-display">
              {NAV_ITEMS.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavigationMenuItem key={item.label}>
                      <Link
                        href={item.href}
                        className="transition duration-500 hover:text-[#075084]"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  );
                }

                if (item.type === "dropdown") {
                  return (
                    <NavigationMenuItem key={item.label}>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 rounded-xl px-4 py-2 font-semibold text-black/80 transition hover:bg-[#075084]/90 hover:text-white focus:outline-none cursor-pointer">
                          {item.label}
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="center" sideOffset={8} className="w-48 rounded-xl border border-black/60 bg-white/90 backdrop-blur-md shadow-xl p-4 font-display">
                          {item.items.map((i) => (
                            <DropdownMenuItem key={i.label} asChild>
                              <Link href={i.href} className="cursor-pointer">
                                {i.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </NavigationMenuItem>
                  )
                }

                return null;
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <div className="flex items-center justify-self-end gap-2">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="bg-[#075084] text-white hover:text-white hover:bg-[#075084]/90 transition duration-300 font-display"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
