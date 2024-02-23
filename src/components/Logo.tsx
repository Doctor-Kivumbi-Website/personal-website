import config from "../config/config.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Logo = () => {
  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link href="/" className="navbar-brand">
      {logo ? (
        <Image
          width={Number(logo_width.replace("px", "")) * 2}
          height={Number(logo_height.replace("px", "")) * 2}
          src={logo}
          alt={title}
          priority
          style={{
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px",
          }}
          className={"m-auto"}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
