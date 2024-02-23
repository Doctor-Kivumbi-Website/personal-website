import Image from "next/image";
import React from "react";

export default function Conduct() {
  return (
    <section className="section" id="conduct">
      <div className="container">
        <div className="row items-center justify-between">
          <div className={`mb:md-0 mb-6 md:col-5`}>
            <Image
              src="/images/candle.svg"
              height={480}
              width={520}
              alt="candle"
            />
          </div>
          <div className={`md:col-7 lg:col-6 `}>
            <h2 className="mb-4">Conduct</h2>
            <p className="mb-8 text-lg">
              Each session with me is personalized and conducted with the utmost
              care, respect, and confidentiality. I combine ancient wisdom,
              natural herbs, and the art of spellcasting to create a unique and
              transformative experience tailored to your specific needs.
            </p>
            <p className="text-lg">
              It is my belief that everyone deserves happiness, love, and
              success. Let me guide you on a journey of self-discovery,
              empowerment, and fulfillment. Together, we can manifest the life
              you've always dreamed of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
