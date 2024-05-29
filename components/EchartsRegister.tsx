// // src/components/EChartsRegister.tsx
// import React from 'react';
// import * as echarts from 'echarts/core';
// import { LineChart } from 'echarts/charts';
// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   LegendComponent,
// } from 'echarts/components';
// import {
//   CanvasRenderer,
// } from 'echarts/renderers';

// // Import the required extensions
// echarts.use([
//   LineChart,
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   LegendComponent,
//   CanvasRenderer,
// ]);

// export function registerECharts() {
//   return echarts;
// }


import React from 'react';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts'; // Add PieChart here
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Import the required extensions
echarts.use([
  LineChart,
  PieChart, // Include PieChart
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);

export function registerECharts() {
  return echarts;
}
