"use client";

import { useState } from "react";
import { Collapse } from "react-collapse";

function AccordionItem({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto w-full border-b border-brown pb-5">
      <div
        className="mb-4 flex cursor-pointer items-center justify-between transition-all"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <p className="text-base font-bold text-brown">{title}</p>
        <svg
          className={`transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#4B372B" />
        </svg>
      </div>

      <Collapse isOpened={isOpen}>
        <p
          className={`text-base font-medium text-brown transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {body}
        </p>
      </Collapse>
    </div>
  );
}

export default AccordionItem;
