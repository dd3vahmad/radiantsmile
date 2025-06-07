import Image from "next/image";
import radiantSmileLogo from "@/asset/logo.png";
import { Navitems } from "./Navitems";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto py-4 px-5 flex items-center justify-between">
        <Image
          src={radiantSmileLogo.src}
          width={100}
          height={100}
          alt="Radiant Smile Logo"
        />

        <Navitems />

        <Button className="bg-blue-500 hover:bg-blue-500 hover:opacity-90 rounded-full cursor-pointer md:block hidden">
          Book An Appointment
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
