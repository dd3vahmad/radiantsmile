"use client";

import * as React from "react";
import Link from "next/link";
import {
  MessageSquareTextIcon,
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Scaling and Polishing",
    href: "/#services/scaling-polishing",
    description:
      "Professional cleaning to remove plaque, tartar, and stains, leaving your teeth smooth and bright.",
  },
  {
    title: "Teeth Whitening",
    href: "/#services/teeth-whitening",
    description:
      "Brighten your smile with safe and effective whitening treatments performed by dental professionals.",
  },
  {
    title: "Teeth Replacement",
    href: "/#services/teeth-replacement",
    description:
      "Restore your confidence with options like implants, bridges, or dentures to replace missing teeth.",
  },
  {
    title: "Fashion Braces",
    href: "/#services/fashion-braces",
    description:
      "Get straighter teeth while looking stylish with our trendy and effective orthodontic solutions.",
  },
  {
    title: "Dental Consultation",
    href: "/#services/dental-consultation",
    description:
      "Get a comprehensive dental check-up and personalized treatment plan from our expert dentists.",
  },
  {
    title: "Other Dental Services",
    href: "/#services/others",
    description:
      "We offer a wide range of services including fillings, extractions, and preventive care.",
  },
];

export function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSections([]);
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/30 bg-opacity-50"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-2">
              {/* Home Section */}
              <div className="mb-4">
                <button
                  onClick={() => toggleSection("home")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900 hover:text-blue-600"
                >
                  Home
                  {expandedSections.includes("home") ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {expandedSections.includes("home") && (
                  <div className="pl-4 pb-4 space-y-3">
                    <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Radiant Smile
                      </h3>
                      <p className="text-sm text-gray-600">
                        Premium dental care services designed to keep your smile
                        healthy and beautiful.
                      </p>
                    </div>

                    <Link href="#" onClick={closeMenu} className="block py-2">
                      <div className="font-medium text-sm text-gray-900">
                        Who we are
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        A compassionate team of dental specialists dedicated to
                        making your smile radiant.
                      </p>
                    </Link>

                    <Link href="#" onClick={closeMenu} className="block py-2">
                      <div className="font-medium text-sm text-gray-900">
                        What we do
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        We deliver top-tier dental services to help you achieve
                        a healthy, confident smile.
                      </p>
                    </Link>

                    <Link href="#" onClick={closeMenu} className="block py-2">
                      <div className="font-medium text-sm text-gray-900">
                        Where we are
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Visit our clinic located at 650W+44, Ikpide oroful,
                        Akure 340283, Ondo, Nigeria.
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* About Link */}
              <Link
                href="/#about"
                onClick={closeMenu}
                className="block py-3 font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100"
              >
                About
              </Link>

              {/* Services Section */}
              <div className="my-4">
                <button
                  onClick={() => toggleSection("services")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900 hover:text-blue-600"
                >
                  Services
                  {expandedSections.includes("services") ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {expandedSections.includes("services") && (
                  <div className="pl-4 pb-4 space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={closeMenu}
                        className="block py-2"
                      >
                        <div className="font-medium text-sm text-gray-900">
                          {service.title}
                        </div>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Testimonials Link */}
              <Link
                href="/#testimonials"
                onClick={closeMenu}
                className="block py-3 font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100"
              >
                Testimonials
              </Link>

              {/* Contact Section */}
              <div className="my-4">
                <button
                  onClick={() => toggleSection("contact")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900 hover:text-blue-600"
                >
                  Contact Us
                  {expandedSections.includes("contact") ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {expandedSections.includes("contact") && (
                  <div className="pl-4 pb-4 space-y-3">
                    <Link
                      href="https://wa.me/2348037510844"
                      onClick={closeMenu}
                      className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600"
                    >
                      <MessageSquareTextIcon className="h-4 w-4" />
                      WhatsApp
                    </Link>

                    <Link
                      href="tel:+2348037510844"
                      onClick={closeMenu}
                      className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600"
                    >
                      <Phone className="h-4 w-4" />
                      (+234) 803 751 0844
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
