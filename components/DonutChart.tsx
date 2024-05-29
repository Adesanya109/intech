"use client";

import React, { useEffect, useRef } from "react";
import { registerECharts } from "./EchartsRegister";

interface DonutChartProps {
  data: Array<{ name: string; value: number }>;
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const echarts = registerECharts();
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      series: [
        {
          type: "pie",
          radius: ["70%", "90%"],
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffset: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
      tooltip: {},
      textStyle: {
        fontSize: 14,
      },
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default DonutChart;
