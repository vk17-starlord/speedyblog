import PropTypes from 'prop-types';

function Button({ children, onClick, className = '' }) {
  return (
    <button
      className={`px-10 flex justify-center items-center py-2.5 rounded-md hover:shadow-md bg-[#fe5829] text-[#fff] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
