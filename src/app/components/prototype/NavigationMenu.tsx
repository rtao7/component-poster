'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function NavigationMenu() {
  return (
    <div className="flex flex-col items-center gap-12 py-24  text-black/80">
      <div className="flex flex-col gap-4 items-center">
        <div className="shadow-md border-1 border-black/10 w-fit flex gap-2 px-1 py-1 md:gap-4 md:px-6 md:py-3 rounded-[16px] bg-[linear-gradient(180deg,transparent,rgba(219,219,219,0.2)_66%,rgba(219,219,219,0.3)_66%,rgba(219,219,219,0.5)_100%)]">
          <NavButton
            id="1"
            label="Home"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 21V13C15.5 12.7348 15.3946 12.4804 15.2071 12.2929C15.0196 12.1054 14.7652 12 14.5 12H10.5C10.2348 12 9.98043 12.1054 9.79289 12.2929C9.60536 12.4804 9.5 12.7348 9.5 13V21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.99997C3.49993 9.70904 3.56333 9.42159 3.68579 9.15768C3.80824 8.89378 3.9868 8.65976 4.209 8.47197L11.209 2.47297C11.57 2.16788 12.0274 2.00049 12.5 2.00049C12.9726 2.00049 13.43 2.16788 13.791 2.47297L20.791 8.47197C21.0132 8.65976 21.1918 8.89378 21.3142 9.15768C21.4367 9.42159 21.5001 9.70904 21.5 9.99997V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V9.99997Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <div className="w-[1px] bg-black opacity-20 [mask:linear-gradient(0deg,transparent,black_25%,black_75%,transparent)]"></div>
          <NavButton
            id="1"
            label="AIChat"
            icon={
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 15C21.5 15.5304 21.2893 16.0391 20.9142 16.4142C20.5391 16.7893 20.0304 17 19.5 17H7.5L3.5 21V5C3.5 4.46957 3.71071 3.96086 4.08579 3.58579C4.46086 3.21071 4.96957 3 5.5 3H19.5C20.0304 3 20.5391 3.21071 20.9142 3.58579C21.2893 3.96086 21.5 4.46957 21.5 5V15Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 12C9.03043 12 9.53914 11.7893 9.91421 11.4142C10.2893 11.0391 10.5 10.5304 10.5 10V8H8.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 12C15.0304 12 15.5391 11.7893 15.9142 11.4142C16.2893 11.0391 16.5 10.5304 16.5 10V8H14.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <NavButton
            id="1"
            label="Work"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-pickaxe"
              >
                <path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" />
                <path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" />
                <path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" />
                <path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" />
              </svg>
            }
          />
          <NavButton
            id="1"
            label="Recipe"
            icon={
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 2V6"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 2V6"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 2V6"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 4H6.5C5.39543 4 4.5 4.89543 4.5 6V20C4.5 21.1046 5.39543 22 6.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V6C20.5 4.89543 19.6046 4 18.5 4Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 10H14.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 14H16.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 18H13.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <NavButton
            id="1"
            label="Github"
            icon={
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 22V18C15.6391 16.7473 15.2799 15.4901 14.5 14.5C17.5 14.5 20.5 12.5 20.5 9C20.58 7.75 20.23 6.52 19.5 5.5C19.78 4.35 19.78 3.15 19.5 2C19.5 2 18.5 2 16.5 3.5C13.86 3 11.14 3 8.49998 3.5C6.49998 2 5.49998 2 5.49998 2C5.19998 3.15 5.19998 4.35 5.49998 5.5C4.77185 6.51588 4.41845 7.75279 4.49998 9C4.49998 12.5 7.49998 14.5 10.5 14.5C10.11 14.99 9.81998 15.55 9.64998 16.15C9.47998 16.75 9.42998 17.38 9.49998 18V22"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 18C4.99 20 4.5 16 2.5 16"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};


interface Props {
  icon: React.ReactElement;
  label: string;
  id: string;
}

const NavButton = ({ label, icon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, bounds] = useMeasure();
  function displayLabel() {
    setIsHovered((b) => !b);
  }
  return (
    <motion.button
      animate={{ width: bounds.width }}
      exit={{ width: bounds.with }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="overflow-clip inline-flex items-center hover:bg-black/5 rounded-xl active:shadow-[inset_0_-3px_2px_1px_rgba(0,0,0,0.02),_inset_0_6px_6px_-3px_rgba(0,0,0,0.04),_inset_0_12px_12px_-6px_rgba(0,0,0,0.06)]"
      onMouseEnter={displayLabel}
      onMouseLeave={displayLabel}
    >
      <span ref={ref} className="px-3 py-2 flex gap-2 items-center">
        {icon}
        {isHovered ? (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block"
          >
            {label}
          </motion.span>
        ) : null}
      </span>
    </motion.button>
  );
};
