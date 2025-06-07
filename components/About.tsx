import dentist from "@/asset/hero-dentist.png";
import { Button } from "./ui/button";
import {
  Calendar,
  Contact,
  LocationEdit,
  PhoneCall,
  Stars,
  Waypoints,
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
    <div className="flex flex-col px-4 md:px-0 max-w-lg gap-3">
      <span className="text-blue-500 text-sm flex items-center gap-1">
        <Stars />
        <h4>ABOUT US</h4>
        <Stars />
      </span>
      <h1 className="text-4xl font-bold">
        Committed to Your Health, One Smile at a Time
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita
        facilis quod consequuntur illum debitis pariatur ea ducimus. Iusto non
        nemo asperiores doloremque odit totam adipisci recusandae laboriosam
        expedita natus.
      </p>
      <Button className="p-2 rounded-full w-fit bg-slate-800 text-white cursor-pointer hover:bg-slate-800 hover:opacity-90">
        <div className="bg-blue-500 p-1 rounded-full">
          <Contact size={64} className="text-white rounded-full" />
        </div>
        <h3 className="ps-1 pe-2 uppercase">Contact Us</h3>
      </Button>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full py-10 lg:py-0 bg-white px-4 md:px-10 pt-10 lg:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {infos.map((info, i) => (
          <InfoCard
            key={i}
            bg={i % 2 ? "bg-slate-800" : "bg-blue-500"}
            info={info}
            i={i}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <Info />
        <div className="w-full h-full max-h-[56vh] lg:max-h-[60vh] relative">
          <img
            src={dentist.src}
            className="w-full h-full object-contain rounded-lg"
            alt="Dentist"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
