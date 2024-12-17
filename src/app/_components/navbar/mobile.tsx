import { useState } from "react";

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 flex flex-row items-center justify-between">
      <div className="w-[30%]">
        <p className="font-bold">Soiree</p>
      </div>
      <div className="w-[40%]">
        <div
          className="open"
          onClick={() => {
            console.log("Opened!");

            setOpen(true);
          }}
        >
          Open
        </div>
        <div
          className={`absolute top-0 bg-slate-400 text-yellow-200 transition-all ${open ? "left-0 w-full" : "left-[100%] w-0"}`}
        >
          <p
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </p>
          <ul className="flex w-full flex-row items-center justify-evenly gap-4">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
