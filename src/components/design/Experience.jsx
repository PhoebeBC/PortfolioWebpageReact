import { lines } from "../../assets/index.jsx";

export const LeftLine = () => {
  return (
    <div className="hidden 2xl:block absolute top-1/2 right-1/2 w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="hidden 2xl:block absolute top-1/2 left-1/2 w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

import StarSvg from "../../assets/svg/StarSvg";

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[85.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <StarSvg className="hidden absolute top-[84.6rem] left-[1.8875rem] z-4 pointer-events-none xl:block" />

      <StarSvg className="hidden absolute top-[84.6rem] right-[1.8875rem] z-4 pointer-events-none xl:block" />
    </>
  );
};