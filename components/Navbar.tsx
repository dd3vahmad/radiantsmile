import { Navitems } from "./Navitems";
import { Button } from "./ui/button";
import Link from "next/link";
import Logo from "./ui/logo";

const Navbar = () => {
  return (
    <div className="w-full bg-white fixed z-20">
      <div className="w-full max-w-7xl mx-auto py-4 px-5 flex items-center justify-between">
        <Logo />

        <Navitems />

        <Link href={"#book-an-appointment"}>
          <Button className="bg-blue-500 hover:bg-blue-500 hover:opacity-90 rounded-full cursor-pointer md:block hidden">
            Book An Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
