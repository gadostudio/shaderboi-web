import React from "react";
import Link from "next/link";
// @ts-ignore
import { Link as ScrollLink } from "react-scroll";
import { FaAddressCard, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a>
                <img
                  className="h-12 inline-block object-scale-down"
                  src="/img/logo.png"
                ></img>
                <h2 className="ml-3 inline-block text-blueGray-700 text-l font-bold leading-relaxed mr-4 py-2 whitespace-nowrap">
                  Shaderboi
                </h2>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {/*<li className="flex items-center">*/}
              {/*  <a*/}
              {/*    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"*/}
              {/*    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"*/}
              {/*  >*/}
              {/*    <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"/>{" "}*/}
              {/*    Docs*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/*<li className="flex items-center">*/}
              {/*  <IndexDropdown/>*/}
              {/*</li>*/}
              {/*<li className="flex items-center">*/}
              {/*  <a*/}
              {/*    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"*/}
              {/*    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg "/>*/}
              {/*    <span className="lg:hidden inline-block ml-2">Share</span>*/}
              {/*  </a>*/}
              {/*</li>*/}

              {/*<li className="flex items-center">*/}
              {/*  <a*/}
              {/*    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"*/}
              {/*    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg "/>*/}
              {/*    <span className="lg:hidden inline-block ml-2">Tweet</span>*/}
              {/*  </a>*/}
              {/*</li>*/}

              {/*<li className="flex items-center">*/}
              {/*  <a*/}
              {/*    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"*/}
              {/*    href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar"*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    <i className="text-blueGray-400 fab fa-github text-lg leading-lg "/>*/}
              {/*    <span className="lg:hidden inline-block ml-2">Star</span>*/}
              {/*  </a>*/}
              {/*</li>*/}

              <li className="flex items-center mt-4 lg:mt-0">
                <ScrollLink
                  className="flex flex-row items-center bg-blueGray-600 hover:bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-semibold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer w-full lg:w-fit"
                  type="button"
                  to="footer-content"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                >
                  <FaAddressCard className="mr-2" /> Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
