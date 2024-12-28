import React, { useState } from 'react';
import StatCard from './StatCard';
import ChartContainer from './ChartContainer';
import PredictionPeriodSelector from './PredictionPeriodSelector';
import { Activity, TrendingUp, Calendar } from 'lucide-react';
import EnergyChart from './EnergyChart';
import PredictionChart from './PredictionChart';
import { generateMockData } from '../utils/mockData';
import { predictFutureConsumption } from '../utils/predictions';

const Dashboard: React.FC = () => {
  const [predictionDays, setPredictionDays] = useState(7);
  const historicalData = generateMockData(30);
  const predictions = predictFutureConsumption(historicalData, predictionDays);
  const currentUsage = historicalData[historicalData.length - 1].consumption;
  const avgUsage = historicalData.reduce((sum, data) => sum + data.consumption, 0) / historicalData.length;

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 max-w-7xl">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Energy Consumption Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Monitor and predict your energy usage patterns</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <StatCard
          title="Current Usage"
          value={`${currentUsage.toFixed(1)} kWh`}
          icon={<Activity className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8" />}
        />
        <StatCard
          title="Average Daily Usage"
          value={`${avgUsage.toFixed(1)} kWh`}
          icon={<TrendingUp className="text-green-500 w-6 h-6 sm:w-8 sm:h-8" />}
        />
        <StatCard
          title="Prediction Period"
          value={`${predictionDays} Days`}
          icon={<Calendar className="text-purple-500 w-6 h-6 sm:w-8 sm:h-8" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <ChartContainer title="Historical Consumption">
          <EnergyChart data={historicalData} />
        </ChartContainer>
        <ChartContainer 
          title="Consumption Forecast"
          action={
            <PredictionPeriodSelector
              value={predictionDays}
              onChange={setPredictionDays}
            />
          }
        >
          <PredictionChart data={predictions} />
        </ChartContainer>
      </div>
    </div>
  );
};

export default Dashboard;