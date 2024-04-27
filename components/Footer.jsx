import { pagesLinks, socialMedia } from "@/constants/links";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col items-start bg-brown px-5 py-4 pb-4 pt-12 text-white xl:flex-row xl:items-center xl:justify-between xl:pt-4">
      <div className="flex w-1/2 flex-row-reverse items-start justify-between text-xs font-thin xl:flex-row xl:pl-[12%]">
        <nav className="mb-20 flex flex-col justify-center gap-6 xl:mb-0 xl:flex-row xl:items-center">
          <p>
            <strong>Navigeren</strong>
          </p>
          <ul className="z-50 flex flex-col justify-center gap-6 transition-all xl:flex-row xl:items-center">
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
        </nav>
        <div className="flex flex-col items-start justify-start gap-6 transition-all xl:flex-row xl:items-center">
          <p>
            <strong>Social media</strong>
          </p>
          <ul className="z-50 flex flex-col justify-center gap-6 text-xs font-thin transition-all xl:flex-row xl:items-center">
            {socialMedia.map((link) => (
              <li key={link.name}>
                <Link
                  className="flex items-center gap-3 transition-all hover:text-brownLight"
                  href={link.link}
                  target="_blank"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="z-50 flex items-center justify-end gap-2 text-xs font-thin xl:w-1/2">
        <span>Made with</span>
        <span>
          {/* <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_28_5)">
              <path
                d="M11 3.15136V3.54158C10.9962 3.55932 10.9923 3.57509 10.9903 3.59086C10.9768 3.851 10.9341 4.10721 10.872 4.36145C10.7072 5.0335 10.4105 5.64249 10.0284 6.21206C9.47765 7.02996 8.79112 7.71581 8.03477 8.33268C7.34824 8.88845 6.61711 9.37525 5.85494 9.81474C5.75409 9.8719 5.65131 9.93102 5.55046 9.98817C5.51943 9.99212 5.49034 9.99606 5.46125 10C5.44574 9.9862 5.43216 9.97635 5.41665 9.96847C4.41012 9.40481 3.45208 8.77217 2.58131 8.00552C1.99757 7.4931 1.46619 6.92944 1.02208 6.28301C0.541117 5.58139 0.186216 4.8246 0.0504614 3.97123C-0.0174158 3.53764 -0.0193552 3.10209 0.0601582 2.67048C0.201731 1.90974 0.543057 1.25936 1.11323 0.743004C1.51661 0.3784 1.98206 0.139929 2.51344 0.0433583C2.61428 0.0256208 2.71707 0.0137958 2.81792 0H3.13597C3.15148 0.00197083 3.16894 0.00788333 3.18445 0.00985416C3.47342 0.0295625 3.75074 0.102483 4.0145 0.218762C4.54588 0.453291 4.9609 0.827749 5.30222 1.29484C5.3701 1.38944 5.43216 1.48601 5.50198 1.58455C5.51749 1.5609 5.53107 1.54316 5.5427 1.52345C5.75215 1.19432 5.99845 0.896728 6.29711 0.648404C6.66947 0.338983 7.08643 0.128104 7.56351 0.0433583C7.66048 0.0256208 7.75744 0.0137958 7.85441 0H8.1841C8.19962 0.00197083 8.21513 0.00788333 8.23258 0.00985416C8.37998 0.035475 8.52931 0.0492708 8.67476 0.0867166C9.31862 0.250296 9.84031 0.610958 10.2553 1.13323C10.6548 1.63776 10.8876 2.21719 10.969 2.85771C10.9806 2.95625 10.9903 3.05282 11 3.15136Z"
                fill="#FAFAF7"
              />
            </g>
            <defs>
              <clipPath id="clip0_28_5">
                <rect width="11" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
        </span>
        <span>
          <Link href="https://www.matshofstede.com/" target="_blank">
            by Mats Hofstede
          </Link>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
