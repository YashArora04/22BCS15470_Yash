import { useCallback } from 'react';

export const useChartConfig = () => {
  const formatTooltip = useCallback((value: number) => {
    return [`${value.toFixed(1)} kWh`];
  }, []);

  const chartConfig = {
    margin: { top: 10, right: 10, bottom: 20, left: 0 },
  };

  return { formatTooltip, chartConfig };
};