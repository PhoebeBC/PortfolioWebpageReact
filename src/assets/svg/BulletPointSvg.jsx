const BulletPointSvg = ({ className = "", colour = "" }) => {
  return (
    <svg className={`${className} || ""`} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle r="12" cx="12" cy="12" fill={colour} />
      <circle r="4" cx="12" cy="12" fill="#000" />
      <circle r="2" cx="8" cy="12" fill="#000" />
      <circle r="2" cx="12" cy="8" fill="#000" />
      <circle r="2" cx="12" cy="16" fill="#000" />
      <circle r="2" cx="16" cy="12" fill="#000" />
    </svg>
  );
};

export default BulletPointSvg;