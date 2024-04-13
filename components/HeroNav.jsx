"use client";

import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import NavMenu from "./NavMenu";

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

      <NavMenu onClick={handleNavClose} />
    </div>
  );
}

export default HeroNav;
