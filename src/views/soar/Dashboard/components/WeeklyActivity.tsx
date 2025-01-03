import { useState } from 'react';
import Card from '@/components/ui/Card';
import Chart from '@/components/shared/Chart';

// Type definitions
type SeriesData = {
  name: string;
  data: number[];
};

type WeeklyActivityProps = {
  className: string;
};

// Chart data for Deposit and Withdraw
const WeeklyActivityData: SeriesData[] = [
  {
    name: 'Deposit',
    data: [480, 350, 330, 480, 170, 390, 400], // Weekly deposit data
  },
  {
    name: 'Withdraw',
    data: [250, 120, 280, 380, 270, 270, 370], // Weekly withdrawal data
  },
];

const WeeklyActivity = ({ className }: WeeklyActivityProps) => {
  // State to manage visibility of data series
  const [visibleSeries, setVisibleSeries] = useState<Record<string, boolean>>({
    Deposit: true,
    Withdraw: true,
  });

  // Toggle series visibility
  const handleToggleSeries = (seriesName: string) => {
    setVisibleSeries((prev) => ({
      ...prev,
      [seriesName]: !prev[seriesName], // Toggle the boolean value
    }));
  };

  return (
    <div className={className} aria-labelledby="weekly-activity-title">
      {/* Section title */}
      <h4
        id="weekly-activity-title"
        className="text-[16px] lg:text-[22px] font-semibold text-primary mb-0 md:mb-5"
      >
        Weekly Activity
      </h4>

      {/* Card component for the chart */}
      <Card
        className="border-0 bg-transparent md:bg-white"
        role="region"
        aria-labelledby="weekly-activity-title"
      >
        {/* Toggle buttons for Deposit and Withdraw series */}
        <div className="w-full flex items-center justify-end gap-5">
          {/* Deposit toggle */}
          <button
            className={`flex items-center gap-2 font-inter font-normal md:text-base text-sm cursor-pointer ${
              visibleSeries.Deposit ? 'text-[#718EBF]' : 'text-gray-400'
            }`}
            onClick={() => handleToggleSeries('Deposit')}
            aria-pressed={visibleSeries.Deposit}
            aria-label={`Toggle visibility for Deposit data`}
          >
            <span
              className={`md:h-4 md:w-4 h-3 w-3 rounded-full ${
                visibleSeries.Deposit ? 'bg-[#396AFF]' : 'bg-gray-300'
              }`}
            ></span>
            Deposit
          </button>
          {/* Withdraw toggle */}
          <button
            className={`flex items-center gap-2 font-inter font-normal md:text-base text-sm cursor-pointer ${
              visibleSeries.Withdraw ? 'text-[#718EBF]' : 'text-gray-400'
            }`}
            onClick={() => handleToggleSeries('Withdraw')}
            aria-pressed={visibleSeries.Withdraw}
            aria-label={`Toggle visibility for Withdraw data`}
          >
            <span
              className={`md:h-4 md:w-4 h-3 w-3 rounded-full ${
                visibleSeries.Withdraw ? 'bg-[#232323]' : 'bg-gray-300'
              }`}
            ></span>
            Withdraw
          </button>
        </div>

        {/* Chart component */}
        <Chart
          series={WeeklyActivityData?.filter(
            (series) => visibleSeries[series.name]
          )} // Filter visible series
          height="240px"
          type="bar"
          aria-label="Bar chart showing weekly deposit and withdrawal activity"
          customOptions={{
            plotOptions: {
              bar: {
                horizontal: false, // Vertical bars
                columnWidth: '15px', // Bar width
                borderRadius: 6, // Rounded corners
              },
            },
            responsive: [
              {
                breakpoint: 768,
                options: {
                  plotOptions: {
                    bar: {
                      columnWidth: '11px', // Adjust bar width for smaller screens
                    },
                  },
                },
              },
            ],
            dataLabels: {
              enabled: false, // Disable data labels on bars
            },
            stroke: {
              show: true, // Enable border lines on bars
              width: 2,
              colors: ['transparent'], // Transparent border color
            },
            xaxis: {
              categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], // Days of the week
            },
            fill: {
              opacity: 1, // Full opacity
            },
            colors: ['#396AFF', '#232323'], // Colors for Deposit and Withdraw
            tooltip: {
              y: {
                formatter: (val: number) => `$${val} thousands`, // Tooltip formatting
              },
            },
            legend: {
              show: false, // Hide default legend
            },
          }}
        />
      </Card>
    </div>
  );
};

export default WeeklyActivity;
