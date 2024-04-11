"use client";

import { useState } from "react";

function AccordionItem({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ml-auto border-b border-brown pb-5 xl:w-1/2">
      <div
        className="flex items-center justify-between cursor-pointer transition-all mb-4"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <p className="text-base text-brown font-medium">{title}</p>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#4B372B" />
        </svg>
      </div>

      <p
        className={`text-base text-brown font-medium transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export default AccordionItem;
