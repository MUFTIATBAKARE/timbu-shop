import HeaderDrop from "./HeaderDrop";

function TopNav() {
  return (
    <div className="bg-custom-green text-white text-xs px-4 sm:px-8 md:px-10 py-2 flex items-center justify-between gap-4 border-b border-green-800/30">
      <div className="flex items-center gap-3">
        <span className="font-medium truncate">
          🔥 Join our community for special discounts on selected sneakers & drops!
        </span>
      </div>
      <div className="hidden sm:flex items-center shrink-0">
        <HeaderDrop />
      </div>
    </div>
  );
}

export default TopNav;
