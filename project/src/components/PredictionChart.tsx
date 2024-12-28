import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { PredictionResult } from '../types/energy';
import { useChartConfig } from '../hooks/useChartConfig';

interface Props {
  data: PredictionResult[];
}

const PredictionChart: React.FC<Props> = ({ data }) => {
  const { formatTooltip, chartConfig } = useChartConfig();
  const formattedData = data.map(item => ({
    ...item,
    date: format(item.timestamp, 'MMM dd')
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={formattedData} margin={chartConfig.margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date"
          tick={{ fontSize: 12 }}
          interval="preserveStartEnd"
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          width={45}
        />
        <Tooltip formatter={formatTooltip} />
        <Line 
          type="monotone" 
          dataKey="predicted" 
          stroke="#8b5cf6" 
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PredictionChart;