import { addDays, subDays } from 'date-fns';
import { EnergyData } from '../types/energy';

export const generateMockData = (days: number): EnergyData[] => {
  const data: EnergyData[] = [];
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = subDays(today, i);
    const baseConsumption = 100;
    const randomVariation = Math.random() * 50 - 25;
    const weekendMultiplier = date.getDay() === 0 || date.getDay() === 6 ? 0.7 : 1;
    
    data.push({
      timestamp: date,
      consumption: (baseConsumption + randomVariation) * weekendMultiplier
    });
  }

  return data;
}