function Button({ children, onClick ,className="" }) {
    return (
      <button
        className={`px-10 flex justify-center items-center py-2.5 rounded-md hover:shadow-md bg-[#fe5829] text-[#fff] ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  
  export default Button;
  