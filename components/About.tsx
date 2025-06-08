import dentist from "@/asset/about-banner.png";
import { Button } from "./ui/button";
import {
  Calendar,
  LocationEdit,
  PhoneCall,
  Waypoints,
  CheckCircle,
  Stars,
  ArrowRight,
} from "lucide-react";
import { ElementType, ReactNode } from "react";

interface IInfo {
  title: string;
  Icon: ElementType;
  content: ReactNode;
}

const infos = [
  {
    title: "Schedule Hours",
    Icon: Calendar,
    content: (
      <div className="flex flex-col gap-y-4 px-4 py-3">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold">Monday - Friday</h3>
          <h4 className="font-bold">08:30AM - 06:30PM</h4>
        </div>
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold">Saturday</h3>
          <h4 className="font-bold">14:30AM - 05:30PM</h4>
        </div>
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold">Sunday</h3>
          <h4 className="font-bold">14:30AM - 05:30PM</h4>
        </div>
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold">24/7 Service Available</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Our Location",
    Icon: LocationEdit,
    content: (
      <div className="flex flex-col px-4 py-3 justify-between h-full">
        <address>
          Just a random address that's very long and would take some space,
          Akure, Ondo State.
        </address>
        <Button className="p-2 rounded-full w-fit bg-white text-blue-400 cursor-pointer hover:bg-white hover:opacity-90">
          <div className="bg-blue-500 p-1 rounded-full">
            <Waypoints size={64} className="text-white rounded-full" />
          </div>
          <h3 className="ps-1 pe-2 text-gray-800">Get Direction</h3>
        </Button>
      </div>
    ),
  },
  {
    title: "Appointment",
    Icon: PhoneCall,
    content: (
      <div className="flex flex-col px-4 py-3 justify-between h-full">
        <address>
          Just a random address that's very long and would take some space,
          Akure, Ondo State.
        </address>
        <div className="text-white flex gap-2 items-center">
          <div className="bg-blue-500 w-10 h-10 flex justify-center items-center border border-white rounded-full">
            <PhoneCall size={30} className="text-white rounded-full" />
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="ps-1 pe-2">Give Us A Call</h3>
            <h3 className="font-semibold">(+234) 8067891723</h3>
          </div>
        </div>
      </div>
    ),
  },
];

const InfoCard = ({ bg, info, i }: { bg: string; info: IInfo; i: number }) => {
  const { Icon, title, content } = info;
  return (
    <div
      className={`flex flex-col ${
        bg || "bg-blue-500"
      } text-white h-[240px] rounded-lg cursor-pointer overflow-hidden`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="bg-white text-blue-500 p-2 rounded-full">
          <Icon size={24} />
        </span>
      </div>
      <span
        className={`h-0.5 ${i % 2 ? "bg-slate-700" : "bg-blue-400"} w-full`}
      />
      {content}
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col px-4 md:px-0 max-w-lg gap-4">
      <div className="flex items-center text-blue-500 gap-2 mb-2">
        <Stars />
        <span className="text-sm font-semibold uppercase tracking-wider">
          ABOUT US
        </span>
        <Stars />
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Committed to Your Health,{" "}
        <span className="text-blue-500">One Smile at a Time</span>
      </h1>

      <p className="text-gray-600 leading-relaxed">
        We are proud architects of beautiful smiles. Our mission has always been
        to provide world-class dental care in a warm, welcoming environment,
        ensuring every patient leaves with confidence and optimal oral health.
      </p>

      {/* Features List */}
      <div className="flex flex-col gap-3 my-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">Qualified and Experienced</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">Modern & Innovative Equipment</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">Flexible Appointment Scheduling</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">Cutting-Edge Dental Technology</span>
        </div>
      </div>

      {/* CTA Button */}
      <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-full font-semibold w-fit transition-all duration-300 transform hover:scale-105">
        READ MORE{" "}
        <ArrowRight className="transform hover:translate-y-5 duration-300" />
      </Button>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 bg-gradient-to-br from-blue-50 to-white px-4 md:px-10 overflow-hidden"
    >
      {/* Info Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {infos.map((info, i) => (
          <InfoCard
            key={i}
            bg={i % 2 ? "bg-slate-800" : "bg-blue-500"}
            info={info}
            i={i}
          />
        ))}
      </div>

      {/* Main About Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <Info />

        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
          <div className="absolute top-12 -right-12 w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-200 rounded-full opacity-40"></div>

          {/* Main Image Container */}
          <div className="relative bg-white p-6 rounded-2xl shadow-xl">
            <img
              src={dentist.src}
              className="w-full h-full object-cover rounded-xl"
              alt="Professional dental team providing quality care"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-xl shadow-lg border border-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">
                  Professional Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
