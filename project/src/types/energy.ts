export interface EnergyData {
  timestamp: Date;
  consumption: number;
}

export interface PredictionResult {
  timestamp: Date;
  predicted: number;
  actual?: number;
}