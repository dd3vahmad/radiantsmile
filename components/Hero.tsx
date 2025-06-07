import { Calendar, LocationEdit, PhoneCall } from "lucide-react";
import { ElementType } from "react";
import dentist from "@/asset/hero-dentist.png";

interface IInfo {
  title: string;
  Icon: ElementType;
}

const infos = [
  { title: "Schedule Hours", Icon: Calendar },
  { title: "Our Location", Icon: LocationEdit },
  { title: "Appointment", Icon: PhoneCall },
];

const Info = () => {
  return (
    <div className="flex flex-col px-4 md:px-0">
      <h4 className="text-blue-500">EXCELLENCE IN DENTAL SERVICES</h4>
    </div>
  );
};

const InfoCard = ({ bg, info, i }: { bg: string; info: IInfo; i: number }) => {
  const { Icon, title } = info;
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
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <Info />
        <div className="w-full h-full max-h-[56vh] lg:max-h-[60vh]">
          <img
            src={dentist.src}
            className="w-full h-full object-contain rounded-lg"
            alt="Dentist"
          />
        </div>
      </div>

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
    </div>
  );
};

export default Hero;
