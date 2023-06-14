import PropTypes from "prop-types";

function Input({ value, onChange , label , icon }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="my-2.5"><label  htmlFor="email-address-icon" className="block mb-2 text-md font-medium text-gray-900 ">{label}</label><div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className={icon} ></i>
          </div>
          <input
              type="text"
              value={value}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
              onChange={handleInputChange}
              placeholder="Enter value" />
      </div></div>
  
  );
}

Input.propTypes = {
 label: PropTypes.string.isRequired,
 icon: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
