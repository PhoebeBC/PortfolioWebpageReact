import StarSvg from "./StarSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <StarSvg
        className={`hidden absolute -top-[0.625rem] left-[1.225rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[1.8875rem]`}
      />

      <StarSvg
        className={`hidden absolute  -top-[0.625rem] right-[1.225rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[1.8875rem]`}
      />
    </>
  );
};

export default SectionSvg;
