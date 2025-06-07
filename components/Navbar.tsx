import Image from "next/image";
import radiantSmileLogo from "@/asset/logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-4 px-5 flex items-center justify-between">
      <Image
        src={radiantSmileLogo.src}
        width={100}
        height={100}
        alt="Radiant Smile Logo"
      />

      <div className="items-center gap-2 hidden md:flex">{/* Yooooo */}</div>

      <div></div>
    </div>
  );
};

export default Navbar;
