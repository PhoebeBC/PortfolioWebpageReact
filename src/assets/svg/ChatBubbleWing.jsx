const ChatBubbleWing = ({ className, colour, pathClassName }) => {
  return (
    <svg
      className={`${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="37"
    >
      <path
        className={`${pathClassName || ""}`}
        fill={`${colour || ""}`} opacity="0.9"
        d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
        transform="translate(0 1)"
      />
    </svg>
  );
};

export default ChatBubbleWing;
