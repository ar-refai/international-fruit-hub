import React from "react";
import Image from "next/image";

const InternationalFruitHubSection = () => {
  return (
    <section id="international-fruit-hub" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                International Fruit Hub: Exporting Fresh Fruits and Vegetables
              </h2>
              <p className="text-base font-medium leading-relaxed text-body-color mb-9">
                At International Fruit Hub, we are committed to providing a
                day-fresh range of fruits and vegetables to our clients
                worldwide. As pioneers in the field, we export premium quality
                produce to Europe, Africa, Asia, and Arab countries.
              </p>
              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
                      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-green-500 bg-opacity-10 text-green-500">
                        {/* Check icon */}
                      </span>
                      Premium quality fruits and vegetables
                    </p>
                    {/* Add more list items here */}
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {/* Add more list items here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/vegs2.png"
                  alt="about-image"
                  width={800}
                  height={800}
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/vegs2.png"
                  alt="about-image"
                  width={800}
                  height={800}
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalFruitHubSection;
