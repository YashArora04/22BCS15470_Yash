import React from 'react';

interface PredictionPeriodSelectorProps {
  value: number;
  onChange: (days: number) => void;
}

const PredictionPeriodSelector: React.FC<PredictionPeriodSelectorProps> = ({ value, onChange }) => {
  const periods = [3, 7, 14, 30];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500 hidden sm:inline">Predict for:</span>
      <div className="flex space-x-1">
        {periods.map((days) => (
          <button
            key={days}
            onClick={() => onChange(days)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors
              ${value === days 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {days}d
          </button>
        ))}
      </div>
    </div>
  );
};

export default PredictionPeriodSelector;