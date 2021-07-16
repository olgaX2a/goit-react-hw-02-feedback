import "./Controls.css";
import PropTypes from "prop-types";

const Controls = ({ name, cbOnClick }) => {
  return (
    <button
      name={name}
      type="button"
      className="Controls__btn"
      onClick={cbOnClick}
    >
      {name}
    </button>
  );
};

Controls.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Controls;
