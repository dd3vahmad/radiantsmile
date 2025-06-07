"use client";

import * as React from "react";
import Link from "next/link";
import { MessageSquareTextIcon, Phone } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Scaling and Polishing",
    href: "/services/scaling-polishing",
    description:
      "Professional cleaning to remove plaque, tartar, and stains, leaving your teeth smooth and bright.",
  },
  {
    title: "Teeth Whitening",
    href: "/services/teeth-whitening",
    description:
      "Brighten your smile with safe and effective whitening treatments performed by dental professionals.",
  },
  {
    title: "Teeth Replacement",
    href: "/services/teeth-replacement",
    description:
      "Restore your confidence with options like implants, bridges, or dentures to replace missing teeth.",
  },
  {
    title: "Fashion Braces",
    href: "/services/fashion-braces",
    description:
      "Get straighter teeth while looking stylish with our trendy and effective orthodontic solutions.",
  },
  {
    title: "Dental Consultation",
    href: "/services/dental-consultation",
    description:
      "Get a comprehensive dental check-up and personalized treatment plan from our expert dentists.",
  },
  {
    title: "Other Dental Services",
    href: "/services/others",
    description:
      "We offer a wide range of services including fillings, extractions, and preventive care.",
  },
];

export function Navitems() {
  return (
    <NavigationMenu viewport={false} className="md:block hidden z-10">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Radiant Smile
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Premium dental care services designed to keep your smile
                      healthy and beautiful.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Who we are">
                A compassionate team of dental specialists dedicated to making
                your smile radiant.
              </ListItem>
              <ListItem href="#" title="What we do">
                We deliver top-tier dental services to help you achieve a
                healthy, confident smile.
              </ListItem>
              <ListItem href="#" title="Where we are">
                Visit our clinic located in the heart of the city for all your
                dental needs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/#about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/#testimonials">Testimonials</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <MessageSquareTextIcon />
                    WhatsApp
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <Phone />
                    (+234) 9151604081
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
