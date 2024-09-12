import Button from "@/ui-components/Button";
//eslint-disable-next-line
function NavMenu({ currActive, setActive }) {
  return (
    <div className="bg-black flex gap-5 rounded-3xl w-[540px] h-[60px] p-2 items-center justify-around">
      <Button isActive={currActive === "about"} onClick={() => setActive("about")}>About Me</Button>
      <Button isActive={currActive === "exp"} onClick={() => setActive("exp")}>Experience</Button>
      <Button isActive={currActive === "recom"} onClick={() => setActive("recom")}>Recommend</Button>
    </div>
  );
}

export default NavMenu;
