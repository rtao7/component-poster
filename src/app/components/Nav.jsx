import { useState } from "react";
import Command from "./Command";
import { BookOpenIcon } from "lucide-react";

const Nav = () => {
  const [showCommand, setShowCommand] = useState(false);

  function isShowCommand() {
    setShowCommand((prev) => !prev);
  }

  return (
    <>
      {showCommand ? <Command /> : null}
      <div className="px-2 py-1.5 flex gap-2 bg-white rounded-md border shadow-lg border-gray-300">
        <button
          onClick={isShowCommand}
          className="flex place-items-center gap-1 text-black/80 hover:bg-black/10 rounded-sm px-4 py-2 leading-1"
        >
          <BookOpenIcon size={16} />
          Skill
        </button>
        <button className="text-black/80 hover:bg-black/10 rounded-sm px-4 py-4 leading-1">
          Toolkit
        </button>
        <button className="text-black/80 hover:bg-black/10 rounded-sm px-4 py-4 leading-1">
          Files
        </button>
      </div>
    </>
  );
};

export default Nav;
