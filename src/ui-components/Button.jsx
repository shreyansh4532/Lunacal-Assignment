//eslint-disable-next-line
function Button({ children, onClick, isActive }) {
  return (
    <button
      className={`border-none py-2 px-6 transition-all duration-200 rounded-2xl font-medium ${
        isActive
          ? "bg-[#242424] text-white scale-125 shadow-darker-enh"
          : "text-gray-400 hover:text-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
