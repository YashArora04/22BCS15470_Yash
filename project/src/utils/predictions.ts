import { addDays } from 'date-fns';
import { EnergyData, PredictionResult } from '../types/energy';

export const predictFutureConsumption = (historicalData: EnergyData[], daysToPredict: number): PredictionResult[] => {
  const predictions: PredictionResult[] = [];
  const lastDate = historicalData[historicalData.length - 1].timestamp;
  
  // Simple moving average calculation
  const movingAverageDays = 7;
  const recentData = historicalData.slice(-movingAverageDays);
  const avgConsumption = recentData.reduce((sum, day) => sum + day.consumption, 0) / movingAverageDays;

  for (let i = 1; i <= daysToPredict; i++) {
    const date = addDays(lastDate, i);
    const weekendAdjustment = date.getDay() === 0 || date.getDay() === 6 ? 0.7 : 1;
    const randomVariation = (Math.random() * 20 - 10);
    
    predictions.push({
      timestamp: date,
      predicted: avgConsumption * weekendAdjustment + randomVariation
    });
  }

  return predictions;
}