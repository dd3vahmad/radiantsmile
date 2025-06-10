"use client";

import Animate from "@/providers/animate";
import {
  Star,
  Stars,
  Clock,
  CheckCircle,
  Smile,
  Shield,
  Sparkles,
  Stethoscope,
  Plus,
} from "lucide-react";
import Link from "next/link";

interface IService {
  id: number;
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  duration: string;
  popular?: boolean;
}

const services: IService[] = [
  {
    id: 1,
    title: "Scaling and Polishing",
    href: "/#services/scaling-polishing",
    description:
      "Professional cleaning to remove plaque, tartar, and stains, leaving your teeth smooth and bright.",
    icon: <Sparkles className="w-8 h-8" />,
    features: [
      "Deep cleaning",
      "Plaque removal",
      "Stain removal",
      "Fresh breath",
    ],
    duration: "45-60 mins",
    popular: true,
  },
  {
    id: 2,
    title: "Teeth Whitening",
    href: "/#services/teeth-whitening",
    description:
      "Brighten your smile with safe and effective whitening treatments performed by dental professionals.",
    icon: <Smile className="w-8 h-8" />,
    features: [
      "Professional grade",
      "Safe treatment",
      "Immediate results",
      "Long-lasting",
    ],
    duration: "60-90 mins",
  },
  {
    id: 3,
    title: "Teeth Replacement",
    href: "/#services/teeth-replacement",
    description:
      "Restore your confidence with options like implants, bridges, or dentures to replace missing teeth.",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "Multiple options",
      "Natural look",
      "Durable materials",
      "Comfort fit",
    ],
    duration: "Multiple visits",
  },
  {
    id: 4,
    title: "Fashion Braces",
    href: "/#services/fashion-braces",
    description:
      "Get straighter teeth while looking stylish with our trendy and effective orthodontic solutions.",
    icon: <Star className="w-8 h-8" />,
    features: [
      "Trendy designs",
      "Effective alignment",
      "Comfortable wear",
      "Color options",
    ],
    duration: "12-24 months",
  },
  {
    id: 5,
    title: "Dental Consultation",
    href: "/#services/dental-consultation",
    description:
      "Get a comprehensive dental check-up and personalized treatment plan from our expert dentists.",
    icon: <Stethoscope className="w-8 h-8" />,
    features: [
      "Full examination",
      "X-rays included",
      "Treatment planning",
      "Oral health tips",
    ],
    duration: "30-45 mins",
  },
  {
    id: 6,
    title: "Other Dental Services",
    href: "/#services/others",
    description:
      "We offer a wide range of services including fillings, extractions, and preventive care.",
    icon: <Plus className="w-8 h-8" />,
    features: ["Fillings", "Extractions", "Root canal", "Preventive care"],
    duration: "Varies",
  },
];

const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <Animate
      animationType="slideUp"
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {service.popular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Popular
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        {/* Icon and Duration */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6 flex-1">
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={"#book-an-appointment"}
          className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Learn More
        </Link>
      </div>
    </Animate>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center text-blue-600 justify-center gap-2 mb-4">
            <Stars className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              OUR SERVICES
            </span>
            <Stars className="w-5 h-5" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dental Care{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Services
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer comprehensive dental care services with modern techniques
            and personalized treatment plans for optimal oral health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards
              healthier, more beautiful teeth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"#book-an-appointment"}>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300">
                  Book Appointment
                </button>
              </Link>

              <Link
                href="tel:+2348037510844"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
