import Services from "@/components/Services";
import Image from "next/image";
import servicesData from "@/lib/servicesData";
import contactData from "@/lib/contactData";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Conduct from "@/components/Conduct";
import socialsData from "@/lib/socialsData";
import Social from "@/components/Social";
import LazyYoutube from "@/components/LazyYoutube";


export default function Home() {
  const serviceData = servicesData
  const contact = contactData
  return (
    <div>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <Image
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />        

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className={true ? "mt-6 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
              <div className="banner-title">
                <h1>Welcome</h1>
              </div>              
              <p className="mt-4 text-lg">to the World of Ancient Wisdom and Powerful Spells!</p>
              <div className="m-6">
                <Social source={socialsData} className="socials" />
              </div>
            </div>
            {true && (
                <div className="col-9 lg:col-6">
                  <LazyYoutube videoId="3M4j8d0KPh4?si=8XF_z6AWGbmJudHx" />
                </div>
            )}
          </div>
        </div>
      </section>
      <About />
      <Services data={serviceData} />
      <Conduct />
      <Contact data={contact} />
    </div>
  );
}
