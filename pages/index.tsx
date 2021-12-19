import Head from "next/head";
import Slider from "../components/Slider";
import Image from "next/image";
import SelectLang from "../components/SelectLang";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <main className="p-4 mt-10 w-app-width h-screen   mx-auto bg-app-basebg mb-8">
        <div className="w-full flex justify-between">
          <h2 className="text-lg text-app-basecolor text-block font-bold">
            Sesssion Calender
          </h2>
          <div className="flex items-center">
            <button className="bg-app-pink py-1 px-2 text-white font-bold text-xs rounded-md">
              Buy Sessions
            </button>
            <SelectLang />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-app-basecolor text-lg font-bold">
            View CP Availability:
          </h3>
        </div>

        <Slider />

        <div className="bg-white rounded-lg p-5">
          <h2 className="text-lg text-app-basecolor font-bold mb-2">
            4 hours Remaining
          </h2>
          <p className="text-md text-app-basecolor font-medium">
            Expires March 01,2023
          </p>
        </div>

        <div className="p-5 bg-white flex flex-col mt-5 rounded-lg">
          <h2 className="text-app-basecolor font-bold">
            Status : 4 Hours Remaining
          </h2>
          <div className="flex items-center mt-7">
            <div className="relative w-250 text-center mr-4">
              <Image
                src="/chart.svg"
                width={250}
                height={250}
                alt="chart icon"
              />
              <div className="absolute top-2/4 left-2/4 p-center">
                <p className="text-2xl font-bold text-app-basecolor">34/65</p>
                <span className="text-sm text-grey text-center">
                  Hours
                  <br /> Completed
                </span>
              </div>
            </div>

            <div className="">
              <div className="flex mb-3">
                <Image
                  src="/remain-hours.svg"
                  width={20}
                  height={20}
                  alt="remaining-hours-iocn"
                />
                <p className="text-app-grey text-lg ml-4">Hours Remaining</p>
              </div>

              <div className="flex mb-3">
                <Image
                  src="/hours-completed.svg"
                  width={20}
                  height={20}
                  alt="remaining-hours-iocn"
                />
                <p className="text-app-grey text-lg ml-4">
                  Hours Completed (Spanish)
                </p>
              </div>

              <div className="flex mb-3">
                <Image
                  src="/hours-completete-2.svg"
                  width={20}
                  height={20}
                  alt="remaining-hours-iocn"
                />
                <p className="text-app-grey text-lg ml-4">
                  Hours Completed (Arabic)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
