import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import Pills from './Pills';

function TabCard({ item }) {
  return (
    <div className="overflow-hidden border cursor-pointer border-gray-200 px-2.5 my-2.5 md:px-10 py-4 flex-col md:flex-row flex justify-between items-center">
      <div className="content">
        <h1 className="text-md px-2 font-semibold text-gray-700">{item.topic}</h1>
        <div className="flex flex-wrap justify-start items-start my-5">
          {item.keywords.map((ele, idx) => {
            return <Pills key={`pill-${idx}`}>{ele}</Pills>;
          })}
        </div>
      </div>

      <div className="action md:w-max w-full">
       <Link to={`/editor/${item.id}`}>
       <Button className="md:w-max w-full">
          <i className="mr-2 bx bxs-magic-wand"></i> Write
        </Button></Link>
      </div>
    </div>
  );
}

TabCard.propTypes = {
  item: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TabCard;
