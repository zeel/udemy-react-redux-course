import React from "react";
import PropTypes from "prop-types";
import "./seasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
    iconColor: "yellow"
  },
  winter: {
    text: "Burr, It's Chilly!",
    iconName: "snowflake",
    iconColor: "blue"
  }
};

const getSeason = lat => {
  const currentMonth = new Date().getMonth();
  const isOtoM = currentMonth > 2 && currentMonth < 9;

  return lat > 0 && isOtoM ? "summer" : "winter";
};

const SeasonDisplay = ({ lat }) => {
  const seasonName = getSeason(lat);

  const text = seasonConfig[seasonName].text;
  const iconName = seasonConfig[seasonName].iconName;
  const iconColor = seasonConfig[seasonName].iconColor;

  return (
    <div className={`season-display ${seasonName}`}>
      <i className={`${iconName} ${iconColor} icon massive season-icon-left`} />
      <div className="season-text">
        <h1>{text}</h1>
      </div>
      <i
        className={`${iconName} ${iconColor} icon massive season-icon-right`}
      />
    </div>
  );
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number.isRequired
};

export default SeasonDisplay;
