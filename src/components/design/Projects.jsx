import StarSvg from "../../assets/svg/StarSvg";

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[70.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <StarSvg className="hidden absolute top-[69.6rem] left-[1.8875rem] z-4 pointer-events-none xl:block" />

      <StarSvg className="hidden absolute top-[69.6rem] right-[1.8875rem] z-4 pointer-events-none xl:block" />
    </>
  );
};

