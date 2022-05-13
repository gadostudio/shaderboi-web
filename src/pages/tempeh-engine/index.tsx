/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "../../components/Navbars/IndexNavbar";
import { TempehJumbotron } from "../../components/Headers/TempehJumbotron";
import {FaGamepad, FaGlobe, FaMobile, FaPalette} from "react-icons/fa";
import {AboutTempeh} from "../../components/AboutTempeh";
import {OurTeam} from "../../components/OurTeam";

export default function Index() {
  return (
    <>
      <IndexNavbar />
      <TempehJumbotron />
      <AboutTempeh />

        <section className="pt-5 pb-96 md:pb-44 relative">
          <div className="block md:flex md:flex-row-reverse">
              <div className="md:flex-auto">
                <img src="/img/misc/placeholder.jpg" className="object-fit mx-auto"/>
              </div>
              <div className="pt-20 pb-20 md:pl-20 md:flex-auto ml-7 md:m-auto w-1/2">
                  <h3 className="font-semibold text-2xl md:text-6xl pb-2">Highly Customizable</h3>
                  <p className="md:w-96 md:text-2xl">Customize Tempeh Editor as you like. Increase your productivity by changing the editor layout.</p>
              </div>
          </div>
          <div className="block md:flex">
              <div className="md:flex-auto">
                  <img src="/img/misc/placeholder.jpg" className="object-fill mx-auto"/>
              </div>
              <div className="pt-20 pb-20 md:pr-20 md:flex-auto float-right mr-7 md:m-auto w-1/2 text-right">
                  <h3 className="font-semibold text-2xl md:text-6xl pb-2">Fully documented</h3>
                  <p className="md:w-96 md:text-2xl md:float-right">Never feel lost by reading Tempeh wiki, full of tutorials and a highly documented scripting API!</p>
              </div>
          </div>
            <div className="block md:flex md:flex-row-reverse">
                <div className="md:flex-auto">
                    <img src="/img/misc/placeholder.jpg" className="object-fit mx-auto"/>
                </div>
                <div className="pt-20 pb-20 md:pl-20 md:flex-auto ml-7 md:m-auto w-1/2">
                    <h3 className="font-semibold text-2xl md:text-6xl pb-2">Intuitive UX</h3>
                    <p className="md:w-96 md:text-2xl">You don't need to watch hours of tutorials on YouTube, Tempeh is intuitive. Drag & dropping has never been so easy!</p>
                </div>
            </div>
            <div className="block md:flex">
                <div className="md:flex-auto">
                    <img src="/img/misc/placeholder.jpg" className="object-fill mx-auto"/>
                </div>
                <div className="pt-20 pb-20 md:pr-20 md:flex-auto float-right mr-7 md:m-auto w-1/2 text-right">
                    <h3 className="font-semibold text-2xl md:text-6xl pb-2">Features</h3>
                    <p className="md:w-96 md:text-2xl md:float-right">We made our best to focus on Tempeh essential features. We will add more features in the future.</p>
                </div>
            </div>
      </section>
        <section className="header relative items-center flex h-screen max-h-860-px bg-[url('/img/portfolios/tempe-cropped.webp')] bg-cover">
            <div className="container mx-auto items-center flex flex-col gap-5 md:flex-row">
                <div className="w-full flex flex-col gap-4">
                    <div className="sm:pt-0 text-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-80 md:w-96 md:h-16">
                        Download Tempeh Engine
                        </button>
                    </div>
                    <div className="sm:pt-0 text-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-80 md:w-96 md:h-16">
                            Download Jokowi Adventure (Demo game)
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="sm:pt-0 text-center">
                        <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-80 md:w-96 md:h-16">
                            Join Our Discord
                        </button>
                    </div>
                    <div className="sm:pt-0 text-center">
                        <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-80 md:w-96 md:h-16">
                            GitHub Page
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
