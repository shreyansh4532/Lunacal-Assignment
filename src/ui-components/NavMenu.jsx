import Button from "@/ui-components/Button";
//eslint-disable-next-line
function NavMenu({ setActive }) {
  return (
    <div className="bg-black flex gap-5 rounded-3xl w-4/5 p-2 items-center justify-around">
      <Button onClick={() => setActive("about")}>About Me</Button>
      <Button onClick={() => setActive("exp")}>Experience</Button>
      <Button onClick={() => setActive("recom")}>Recommend</Button>
    </div>
  );
}

export default NavMenu;
