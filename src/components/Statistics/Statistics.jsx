import "./Statistics.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="StatisticsList">
      <li className="StatisticsList__item">
        <p className="StatisticsList__text">
          Good:
          <span className="StatisticsList__data">{good}</span>
        </p>
      </li>
      <li className="StatisticsList__item">
        <p className="StatisticsList__text">
          Neutral:
          <span className="StatisticsList__data">{neutral}</span>
        </p>
      </li>
      <li className="StatisticsList__item">
        <p className="StatisticsList__text">
          Bad:
          <span className="StatisticsList__data">{bad}</span>
        </p>
      </li>
      <li className="StatisticsList__item">
        <p className="StatisticsList__text">
          Total:
          <span className="StatisticsList__data">{total}</span>
        </p>
      </li>
      <li className="StatisticsList__item">
        <p className="StatisticsList__text">
          Positive feedback:
          <span className="StatisticsList__data">{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
