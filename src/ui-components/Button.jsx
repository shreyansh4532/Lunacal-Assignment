//eslint-disable-next-line
function Button({ children, onClick }) {
  return (
    <button className="border-none py-2 px-6 focus:bg-[#242424] focus:text-white active:scale-125 focus:scale-125 text-gray-400 font-medium hover:text-white duration-200 transition-all rounded-2xl focus:shadow-darker-enh active:shadow-darker-enh active:darker-enh focus:darker-enh"
    onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
