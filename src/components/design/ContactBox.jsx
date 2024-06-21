export const ContactBox = (className, type, placeholder) => {
    return (
      <div className={className}>
          <input
            type={type}
            placeholder={placeholder}
            name={placeholder}
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
       </div>
    );
  };