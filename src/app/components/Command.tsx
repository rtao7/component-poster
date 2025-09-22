import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Image from "next/image";
import Placeholder from "../../../public/placeholder.png";

const CommandComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
    >
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search a skill..." />
        <div>
          <ul className="flex text-xs font-medium gap-1 p-2">
            <li>
              <button className="flex place-items-center gap-1 text-black/80 bg-black/5 hover:bg-black/10 rounded-sm px-4 py-3 leading-1">
                Skill
              </button>
            </li>
            <li>
              <button className="flex place-items-center gap-1 text-black/80 hover:bg-black/10 rounded-sm px-4 py-3 leading-1">
                Toolkit
              </button>
            </li>
            <li>
              <button className="flex place-items-center gap-1 text-black/80 hover:bg-black/10 rounded-sm px-4 py-3 leading-1">
                File
              </button>
            </li>
          </ul>
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Agent Skills">
            <div className="grid grid-cols-2 gap-2">
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
              <CommandItem className="flex-col items-start gap-0">
                <div className="relative bg-gray/5 overflow-hidden border rounded-md w-full h-[160px]">
                  <Image
                    src={Placeholder}
                    className="px-4 rounded shadow-xs"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xs py-1">Summarize Asana Projects</h3>
                <p className="text-xs text-muted-foreground">
                  Summarize project status in asana and ...
                </p>
              </CommandItem>
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </motion.div>
  );
};

export default CommandComponent;
