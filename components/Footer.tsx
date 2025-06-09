import Link from "next/link";
import Logo from "./ui/logo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-slate-300 mt-4 text-sm leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile
              is our priority, and we're committed to helping you achieve
              optimal oral health.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.facebook.com/radiantsmiledentalservices"
                target="_blank"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.x.com/Radiantsmileakr"
                target="_blank"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/radiantsmiledentalservices"
                target="_blank"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/radiantsmiledentalservices"
                target="_blank"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-blue-500 mt-1 flex-shrink-0"
                  size={16}
                />
                <div className="text-slate-300 text-sm">
                  <p>650W+44, Ikpide oroful,</p>
                  <p>Akure 340283,</p>
                  <p>Ondo, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-500 flex-shrink-0" size={16} />
                <Link
                  href="tel:+2348037510844"
                  className="text-slate-300 text-sm hover:text-blue-500 transition-colors"
                >
                  (+234) 803 751 0844
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-500 flex-shrink-0" size={16} />
                <Link
                  href="mailto:contact@radiantsmile.ng"
                  className="text-slate-300 text-sm hover:text-blue-500 transition-colors"
                >
                  contact@radiantsmile.ng
                </Link>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Office Hours
            </h3>
            <div className="space-y-2">
              <div className="flex space-x-3">
                <Clock
                  className="text-blue-500 flex-shrink-0 mt-0.5"
                  size={16}
                />
                <div className="text-slate-300 text-sm">
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Mon - Sat:</span> 8:00 AM -
                      7:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                    <p className="text-blue-400 mt-2 font-medium">
                      Emergency calls 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Scaling and Polishing
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Teeth Replacement
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Orthodontics (Braces)
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Dental Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  And Many More...
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-blue-500 rounded-lg p-4 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h4 className="font-semibold text-white">Dental Emergency?</h4>
              <p className="text-blue-100 text-sm">We're here to help 24/7</p>
            </div>
            <Link
              href="tel:+2348037510844"
              className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors animate-pulse"
            >
              Call Now: (+234) 803 751 0844
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 sm:mb-0">
              &copy; 2025 Radiant Smile Clinic. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                Accessibility
              </Link>
            </div>

            <p className="text-blue-500 text-sm font-semibold mt-4 sm:mt-0">
              Built with {"</>"} by{" "}
              <Link
                href="https://thehmad.me"
                target="_blank"
                className="text-blue-500 hover:underline cursor-pointer"
              >
                DD3VAHMAD
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
