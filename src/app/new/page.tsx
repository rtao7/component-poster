"use client";
import { useState } from "react";
import Command from "../components/Command";
import { BookOpenIcon, File, ToolCaseIcon } from "lucide-react";

const Nav = () => {
  const [showCommand, setShowCommand] = useState(false);

  function isShowCommand() {
    setShowCommand((prev) => !prev);
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      {showCommand ? <Command /> : null}
      <div className="font-sans font-medium px-2 py-1.5 flex gap-1 bg-white rounded-md border shadow-lg border-gray-300">
        <button
          onClick={isShowCommand}
          className="flex place-items-center gap-1 text-black/80 hover:bg-black/10 rounded-sm px-4 py-2 leading-1"
        >
          <BookOpenIcon size={16} />
          Skill
        </button>
        <button
          onClick={isShowCommand}
          className="flex place-items-center gap-1 text-black/80 hover:bg-black/10 rounded-sm px-4 py-2 leading-1"
        >
          <ToolCaseIcon size={16} />
          Toolkit
        </button>{" "}
        <button
          onClick={isShowCommand}
          className="flex place-items-center gap-1 text-black/80 hover:bg-black/10 rounded-sm px-4 py-2 leading-1"
        >
          <File size={16} />
          File
        </button>
      </div>
    </div>
  );
};

export default Nav;
