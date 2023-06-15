import PropTypes from 'prop-types';

function Button({ children, onClick, className = '' , loading=false }) {
  return (
    <button
      disabled={loading}
      className={`px-10 flex justify-center items-center py-2.5 rounded-md hover:shadow-md bg-[#fe5829] text-[#fff] ${className}`}
      onClick={onClick}
    >
      { !loading && children} 
      { loading &&  <div className="flex">
    <div className="relative">
      <div
        className="w-6 h-6 rounded-full animate-spin border-2 border-solid border-primary border-t-transparent"
      ></div>
    </div>
  </div>
}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
