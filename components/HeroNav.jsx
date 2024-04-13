"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import { pagesLinks, socialMedia } from "@/constants/links";

function HeroNav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (navIsOpen) document.body.style.overflow = "hidden";
    if (!navIsOpen) document.body.style.overflowY = "auto";
  }, [navIsOpen]);

  function handleNavOpen() {
    setNavIsOpen(true);
  }

  function handleNavClose() {
    setNavIsOpen(false);
  }

  return (
    <div>
      <header
        className={`${
          navIsOpen ? "absolute" : "fixed"
        } nav-with-gradient left-0 top-0 z-40 flex w-full items-center justify-between border-transparent px-5 py-4 mix-blend-difference shadow-xl xl:h-screen xl:w-auto xl:flex-col xl:border-r xl:px-4`}
      >
        <svg
          width="51"
          height="32"
          viewBox="0 0 51 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_28_13)">
            <path
              d="M47.523 26.7119L36.3151 0L31.8897 1.9887L32.4768 3.25424C32.8832 4.0678 32.9283 4.79096 32.5671 5.69492L31.1311 9.2565C31.2756 9.65424 31.402 10.0701 31.5104 10.4768L33.5154 5.51412L39.3406 19.4802H31.8988C31.8626 19.7243 31.8265 19.9684 31.7723 20.2034H39.6567L42.3751 26.7119C43.6305 29.6949 44.2627 30.8701 42.7725 31.3672V32H51.0001V31.3672C49.9615 30.8701 48.7783 29.6949 47.523 26.7119Z"
              fill="white"
            />
            <path
              d="M11.2892 0.361816H0V0.994585C1.49017 1.49176 1.80627 2.84769 1.80627 6.10193V26.2601C1.80627 29.5144 1.49017 30.8703 0 31.3675V32.0002H12.2826C16.8525 32.0002 20.6818 30.5901 23.4725 28.1132C24.0505 27.607 24.5833 27.0466 25.071 26.45C26.4889 24.7053 27.5095 22.5991 28.0694 20.2036C28.1326 19.9686 28.1778 19.7245 28.2229 19.4805C28.3223 19.0104 28.3945 18.5403 28.4487 18.0522C28.539 17.2567 28.5842 16.4341 28.5842 15.5844V15.5483C28.5481 8.90419 24.2943 0.361816 11.2892 0.361816ZM11.9665 31.2771H9.52807C7.04445 31.2771 6.59288 30.1019 6.59288 27.9776V1.08498H8.39915C18.4691 1.08498 23.2557 8.49741 23.2557 17.7629C23.2557 27.0285 19.2368 31.2771 11.9665 31.2771Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_28_13">
              <rect width="51" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <MenuIcon onClick={handleNavOpen} />
        <p className="hidden translate-x-[40%] -rotate-90 pb-14 text-sm font-normal text-white xl:block">
          © 2024
        </p>
      </header>

      <div
        className={`fixed inset-0 z-[99] transform bg-brown transition-all duration-1000 ${
          navIsOpen
            ? "translate-y-0 xl:translate-x-0 xl:translate-y-0"
            : "-translate-y-[200%] xl:-translate-x-full xl:translate-y-0"
        }`}
      >
        <div className="noise-layer"></div>
        <svg
          width="100%"
          height="100vh"
          viewBox="0 0 1568 1047"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M1461.1 873.979L1116.51 0L980.451 65.0678L998.5 106.475C1010.99 133.093 1012.38 156.754 1001.28 186.331L957.127 302.861C961.57 315.875 965.457 329.48 968.789 342.789L1030.43 180.415L1209.53 637.369H980.729C979.618 645.354 978.507 653.34 976.841 661.03H1219.25L1302.83 873.979C1341.42 971.58 1360.86 1010.03 1315.04 1026.3V1047H1568V1026.3C1536.07 1010.03 1499.69 971.58 1461.1 873.979Z"
            fill="#231F20"
          />
          <path
            opacity="0.2"
            d="M347.087 11.8306H0V32.534C45.8155 48.8009 55.5339 93.1653 55.5339 199.64V859.191C55.5339 965.665 45.8155 1010.03 0 1026.3V1047H377.631C518.131 1047 635.863 1000.86 721.663 919.822C739.434 903.259 755.817 884.922 770.811 865.402C814.405 808.319 845.781 739.407 862.997 661.03C864.941 653.34 866.329 645.354 867.717 637.369C870.772 621.989 872.993 606.609 874.659 590.638C877.436 564.611 878.824 537.697 878.824 509.895V508.712C877.713 291.326 746.931 11.8306 347.087 11.8306ZM367.912 1023.34H292.941C216.582 1023.34 202.699 984.89 202.699 915.385V35.4916H258.233C567.834 35.4916 714.999 278.017 714.999 581.174C714.999 884.33 591.436 1023.34 367.912 1023.34Z"
            fill="#231F20"
          />
        </svg>

        <ul className="absolute left-1/2 top-[45%] z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 font-display text-3xl text-white xl:top-1/2 xl:gap-8 xl:text-4xl">
          {pagesLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="transition-all hover:text-brownLight"
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 font-display text-base text-white lg:flex-row lg:gap-8 lg:pb-11">
          {socialMedia.map((link) => (
            <li key={link.name}>
              <Link
                className="flex items-center justify-center gap-3 transition-all hover:text-brownLight"
                href={link.link}
                target="_blank"
              >
                {link.name}
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 1H16M16 1V13M16 1L1 16"
                      stroke="#FAFAF7"
                      stroke-width="2"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="absolute right-0 top-0 z-50 flex flex-col gap-1.5 pr-8 pt-10 xl:left-0 xl:pl-10"
          onClick={handleNavClose}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L19 19" stroke="white" stroke-width="2" />
            <path d="M19 1L1 19" stroke="white" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HeroNav;
