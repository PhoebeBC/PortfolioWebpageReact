import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag, cv }) => {
  return (
    <div
      className={`${className} || max-w-[50rem] mx-auto mb-12 lg:mb-20`}
    >
      {tag && <TagLine className="text-lg xl:tracking-normal 2xl:tracking-wider lg:justify-normal justify-center">{tag}</TagLine>}
      {cv && <TagLine><h5 className="h5">{cv}</h5></TagLine>}
      {title && <h2 className="h2 text-center">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;