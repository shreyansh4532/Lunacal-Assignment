//eslint-disable-next-line
function Button({ children, onClick }) {
  return (
    <button className="border-none py-2 px-6 focus:bg-[#242424] focus:text-white active:scale-125 focus:scale-125 text-gray-400 font-medium hover:text-white duration-200 transition-all rounded-2xl focus:shadow-black active:shadow-black active:shadow-2xl focus:shadow-2xl"
    onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
