import Social from "./Social";
import config from "../config/config.json";
import menu from "../config/menu.json";
import socialsData from "@/lib/socialsData";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section relative mt-12 pt-[70px] pb-[50px]">
      <Image
        className="-z-[1] object-cover object-left  md:object-top"
        src="/images/footer-bg-shape.svg"
        alt="footer background"
        fill={true}
      />
      <div className="container text-center">
        <div className="mb-6 inline-flex">
          {/* <Logo /> */}
        </div>
        <p className="p max-w-[638px] mx-auto italic">Disclaimer: Please note that the services offered are based on spiritual practices and beliefs. Results may vary, and individual experiences may differ. It is advised to approach these services with an open mind and a genuine desire for positive change.</p>
        {/* footer menu */}
        <ul className="mb-12 mt-6 flex-wrap space-x-2 lg:space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link
                href={menu.url}
                className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* social icons */}
        <div className="inline-flex">
          <Social source={socialsData} className="socials mb-12 justify-center" />
        </div>
        {/* copyright */}      
        
        <p>&copy; {currentYear} Doctor Kivumbi</p>
      </div>
    </footer>
  );
};

export default Footer;
