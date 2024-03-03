"use client";

import { Service, ServicesData } from "@/types";
import Image from "next/image";

const Services = ({ data }: { data: ServicesData }) => {
  return (
    <>
      {data.enable && (
        <section className="section" id="services">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2 className="mb-4">{data.title}</h2>
                <p>{data.description}</p>
              </div>
              <div className="col-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.services.map((item: Service, index: number) => (
                  <div key={index} className="mb-6 flex">
                    <div className="flex-grow">
                      <div className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light h-full">
                        <div className="relative h-60">
                          <Image
                            src={item.image}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg pb-4"
                          />
                        </div>

                        <h3 className="h5 font-primary font-semibold mb-4">
                          {item.name}
                        </h3>
                        <blockquote className="mt-2">{item.content}</blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Services;
