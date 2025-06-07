import Image from "next/image";
import radiantSmileLogo from "@/asset/logo.jpg";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-4 px-5">
      {/* <Image
        src={radiantSmileLogo.src}
        height={radiantSmileLogo.height * 0.3}
        width={100}
        alt="Radiant Smile Logo"
      /> */}
      <div className="border overflow-hidden rounded border-blue-300 w-fit text-lg">
        RadiantSmile
      </div>

      <div className="items-center gap-2 hidden md:flex">{/* Yooooo */}</div>

      <div></div>
    </div>
  );
};

export default Navbar;
