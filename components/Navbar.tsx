import { Navitems } from "./Navitems";
import { Button } from "./ui/button";
import Link from "next/link";
import Logo from "./ui/logo";
import { MobileNavMenu } from "./ui/mobile-nav-menu";

const Navbar = () => {
  return (
    <div className="w-full bg-white fixed z-20">
      <div className="w-full max-w-7xl mx-auto py-4 px-5 flex items-center justify-between">
        <Logo />

        <Navitems />

        <Link href={"#book-an-appointment"}>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 rounded-full cursor-pointer md:block hidden">
            Book An Appointment
          </Button>
        </Link>

        <MobileNavMenu />
      </div>
    </div>
  );
};

export default Navbar;
