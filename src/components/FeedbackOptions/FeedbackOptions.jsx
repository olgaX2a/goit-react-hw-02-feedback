import "./FeedbackOptions.css";
import Controls from "../Controls";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="ControlsList">
      {options.map((option) => (
        <li key={option} className="ControlsList__item">
          <Controls name={option} cbOnClick={onLeaveFeedback} />
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
