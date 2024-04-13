function MenuIcon({ onClick }) {
  return (
    <div className="flex cursor-pointer flex-col gap-3" onClick={onClick}>
      <div className=" h-0.5 w-12 bg-white"></div>
      <div className=" h-0.5 w-12 bg-white"></div>
      <div className=" -ml-2 h-0.5 w-12 bg-white"></div>
    </div>
  );
}

export default MenuIcon;
