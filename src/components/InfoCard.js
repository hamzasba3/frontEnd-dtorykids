import React from 'react';
import './InfoCard.css'; 

const InfoCard = ({ title, value, percentage, color }) => {
  const isNegative = percentage < 0;
  const percentageAbs = Math.abs(percentage);
  
  return (
    <div className="info-card" style={{ backgroundColor: color }}>
      <div className="info-card-header">{title}</div>
      <div className="info-card-body">
        <h2>{value}</h2>
        <div className="info-card-footer">
          <span className={isNegative ? "percentage-down" : "percentage-up"}>
            {isNegative ? "↓" : "↑"} {percentageAbs}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;