import { Contact, Stars } from "lucide-react";
import dentist from "@/asset/hero-dentist.png";
import { Button } from "./ui/button";
import Link from "next/link";
import Animate from "@/providers/animate";

const Info = () => {
  return (
    <Animate
      animationType="slideInLeft"
      className="flex flex-col px-4 lg:px-0 max-w-lg gap-4 mt-10 lg:mt-0"
    >
      <span className="text-blue-500 text-sm flex items-center gap-1">
        <Stars />
        <h4>EXCELLENCE IN DENTAL SERVICES</h4>
        <Stars />
      </span>
      <h1 className="lg:text-5xl text-4xl font-bold">
        A Lifetime of Healthy Smiles & Wellness
      </h1>
      <p className="text-sm lg:text-md">
        Providing exceptional dental care with a gentle touch. Your smile is our
        priority, and we're committed to helping you achieve optimal oral
        health.
      </p>

      <Link href={"#book-an-appointment"}>
        <Button className="p-2 rounded-full w-fit bg-slate-800 text-white cursor-pointer hover:bg-slate-800 hover:opacity-90">
          <div className="bg-blue-500 p-1 rounded-full">
            <Contact size={64} className="text-white rounded-full" />
          </div>
          <h3 className="ps-1 pe-2 uppercase">Contact Us</h3>
        </Button>
      </Link>
    </Animate>
  );
};

export const Shadow = () => {
  return (
    <div className="w-[150px] h-[120px] md:w-[200px] md:h-[180px] bg-blue-400 absolute top-[35%] left-[40%] blur-3xl -z-10"></div>
  );
};

const Hero = () => {
  return (
    <div className="w-full h-fit max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 pt-24">
      <Info />
      <Animate animationType="slideUp" className="w-full h-full relative">
        <Shadow />
        <img
          src={dentist.src}
          className="w-full h-full object-cover"
          alt="Dentist"
        />
      </Animate>
    </div>
  );
};

export default Hero;
