import Image from "next/image";
import radiantSmileLogo from "@/asset/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={radiantSmileLogo.src}
        width={100}
        height={100}
        alt="Radiant Smile Logo"
        placeholder={"empty"}
      />
    </Link>
  );
};

export default Logo;
