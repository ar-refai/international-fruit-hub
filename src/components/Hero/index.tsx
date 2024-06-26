import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-24">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-10 prose"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100">
                <h1 className="text-7xl text-gray-600 leading-tight">Bears eat Beets</h1>

                <h1 className="text-3xl text-gray-600">BEARS</h1>

                <h1 className="text-3xl text-gray-600">BEATS</h1>

                <h1 className="text-7xl text-gray-600">Battlestar Gallactica </h1>
                <p className="text-2xl text-gray-600 font-light mt-8 leading-relaxed">
                Welcome to our international fruit hub, where we proudly export the freshest fruits and vegetables. Our carefully selected produce ensures the highest quality, bringing nature's best to your doorstep.
                </p>
                <div className="mt-8 inline-flex gap-x-6 pt-2">
                  <a href="#"><svg className="hover:fill-primary hover:scale-105 transition-all ease-out duration-200 w-12 h-12 fill-gray-600" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>instagram-logo-black-and-white</title><path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z" /></svg></a>

                  <a href="#"><svg className="hover:fill-primary hover:scale-105 transition-all ease-out duration-200 w-12 h-12 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-49919-21537-37762 0-68336 30591-68336 68330 0 5326 591 10537 1748 15562-56820-2880-107194-30081-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 44654 30389 56876-11202-333-21739-3457-30991-8519v854c0 33138 23554 60789 54852 67039-5734 1557-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z" /></svg></a>

                  <a href="#"><svg className="hover:fill-primary hover:scale-105 transition-all ease-out duration-200 w-12 h-12 fill-gray-600" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z" /></svg></a>

                </div>
              </div>
              <div className="w-full lg:w-2/3 py-8 px-10 grid grid-cols-4 gap-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100">
                <div className="h-64 col-span-4 sm:col-span-4 relative">

                  <img 
                  src="https://images.unsplash.com/photo-1573426667638-18ccdd988a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="fresh beets" 
                  className="rounded-md absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />

                </div>

                <div className="h-64 col-span-4 sm:col-span-2 relative">

                  <img 
                  src="https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" 
                  alt="red veggies" 
                  className="rounded-lg absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />

                </div>

                <div className="h-64 col-span-4 sm:col-span-2 relative">

                  <img 
                  src="https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" 
                  alt="asperagas" 
                  className="rounded-sm absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />

                </div>

                <div className="h-64 col-span-4 sm:col-span-3 relative">

                  <img 
                  src="https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="carrots" 
                  className="rounded-md absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />

                </div>

                <div className="h-64 col-span-4 sm:col-span-1 relative">

                  <img
                  src="https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                  alt="tomato tomato" 
                  className="rounded-md absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200"
                  />

                </div>

              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Hero;
