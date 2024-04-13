function Button({ children, color = "transparent" }) {
  if (color === "dark")
    return (
      <button className="z-50 rounded-[40px] bg-brown px-6 py-2 text-base font-light text-white transition-all hover:bg-brownLight">
        {children}
      </button>
    );

  return (
    <button className="z-50 rounded-[40px] border bg-transparent px-6 py-2 text-base font-light text-white transition-all hover:border-brownLight hover:bg-brownLight">
      {children}
    </button>
  );
}

export default Button;
