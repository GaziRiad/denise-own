import Link from "next/link";

function Button({ children, color = "transparent" }) {
  if (color === "dark")
    return (
      <Link
        href="/register"
        target="_blank"
        className="z-50 rounded-[40px] bg-brown px-6 py-2 text-base font-light text-white transition-all hover:bg-brownLight"
      >
        {children}
      </Link>
    );

  return (
    <Link
      href="/register"
      target="_blank"
      className="z-50 rounded-[40px] border bg-transparent px-6 py-2 text-base font-light text-white transition-all hover:border-brownLight hover:bg-brownLight"
    >
      {children}
    </Link>
  );
}

export default Button;
