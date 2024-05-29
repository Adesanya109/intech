'use client';

import React, { useEffect, useRef } from 'react';
import { registerECharts } from './EchartsRegister';

interface LineChartProps {
  policiesData: Array<{ month: string; value: number }>;
  claimsData: Array<{ month: string; value: number }>;
}

const LineChart: React.FC<LineChartProps> = ({ policiesData, claimsData }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const echarts = registerECharts();
    const chartInstance = echarts.init(chartRef.current);

    const option = {
    //   title: {
    //     text: 'Policies vs Claims (First Half of 2024)',
    //     textStyle: {
    //       color: '#FF6a00',
    //     },
    //   },
      tooltip: {
        trigger: 'axis',
        textStyle: {
          color: '#000000',
        },
        
        
      },
      legend: {
        data: ['Policies', 'Claims'],
        textStyle: {
          color: '#ffffff',
        },

      },
      xAxis: {
        type: 'category',
        data: policiesData.map(item => item.month),
        axisLine: {
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisLabel: {
          color: '#ffffff',
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisLabel: {
          color: '#ffffff',
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
      series: [
        {
          name: 'Policies',
          type: 'line',
          data: policiesData.map(item => item.value),
          lineStyle: {
            color: '#ff7f50', 
          },
        },
        {
          name: 'Claims',
          type: 'line',
          data: claimsData.map(item => item.value),
          lineStyle: {
            color: '#87cefa',
          },
        },
      ],
      backgroundColor: '#000000', // Black background
    };

    chartInstance.setOption(option);

    // Dispose the chart instance on unmount to clean up resources
    return () => {
      chartInstance.dispose();
    };
  }, [policiesData, claimsData]);

  // Ensure the container div has width and height
  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default LineChart;
