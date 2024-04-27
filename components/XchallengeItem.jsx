import { useState } from "react";
import { Collapse } from "react-collapse";

function XchallengeItem({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="mb-1 flex cursor-pointer items-center justify-between gap-4 transition-all"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <svg
          className={`-rotate-90 transform transition-transform duration-500`}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#4B372B" />
        </svg>
        <p className="text-base font-light">{title}</p>
      </div>
      <Collapse isOpened={isOpen}>
        <p
          className={`ml-7 text-base font-light transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {body}
        </p>
      </Collapse>
    </div>
  );
}

export default XchallengeItem;
