function MenuIcon({ onClick }) {
  return (
    <div className="flex flex-col gap-3 cursor-pointer" onClick={onClick}>
      <div className=" h-0.5 w-12 bg-white"></div>
      <div className=" h-0.5 w-12 bg-white"></div>
      <div className=" h-0.5 w-12 bg-white -ml-2"></div>
    </div>
  );
}

export default MenuIcon;
