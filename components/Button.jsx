import Link from "next/link";

function Button({ children, color = "transparent" }) {
  if (color === "dark")
    return (
      <Link
        href="/register"
        target="_blank"
        className="z-50 rounded-[40px] bg-brown px-6 py-2 text-base font-light text-white transition-all hover:opacity-75"
      >
        {children}
      </Link>
    );

  return (
    <Link
      href="/register"
      target="_blank"
      className="z-50 rounded-[40px] border bg-transparent px-6 py-2 text-base font-light text-white transition-all hover:bg-white hover:text-black"
    >
      {children}
    </Link>
  );
}

export default Button;
