'use client';

import React, { useEffect, useRef } from 'react';
import { registerECharts } from './EchartsRegister';

interface BarChartProps {
  data: Array<{ name: string; value: number;  color?: string }>;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const echarts = registerECharts();
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: 'category',
        data: data.map(item => item.name),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: data.map(item => ({
            value: item.value,
            itemStyle: {
              color: item.color,
            },
          })),
        },
      ],
      tooltip: {},
      textStyle: {
        fontSize: 14,
      },
    };

    chartInstance.setOption(option);

    // Dispose the chart instance on unmount to clean up resources
    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  // Ensure the container div has width and height
  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default BarChart;
