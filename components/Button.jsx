function Button({ children, color = "transparent" }) {
  if (color === "dark")
    return (
      <button className="bg-brown text-white font-light rounded-[40px] px-6 py-2 text-base transition-all hover:bg-brownLight">
        {children}
      </button>
    );

  return (
    <button className="bg-transparent border text-white font-light rounded-[40px] px-6 py-2 text-base transition-all hover:bg-brownLight hover:border-brownLight">
      {children}
    </button>
  );
}

export default Button;
