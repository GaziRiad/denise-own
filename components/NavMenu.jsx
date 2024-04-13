import { pagesLinks, socialMedia } from "@/constants/links";
import Link from "next/link";

function NavMenu({ navIsOpen, onClick }) {
  return (
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
        onClick={onClick}
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
  );
}

export default NavMenu;
