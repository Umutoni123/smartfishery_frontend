import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useSelector } from "react-redux";
import { selectUser } from "../store/modules/authSlice";
import { selectProductionStats } from "../store/modules/productionSlice";

function Index() {
  const user = useSelector(selectUser);
  const statistics = useSelector(selectProductionStats);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (chartData.length === 0 && statistics.length > 0) {
      setChartData([
        {
          id: "Production",
          data: statistics.map((stat) => {
            return {
              x: new Date(stat.created_at).toLocaleString(),
              y: stat.production_tons,
            };
          }),
        },
      ]);
    }
  }, [statistics]);

  return (
    <div className="flex flex-col items-start float-right w-10/12 px-10 my-10 space-y-5">
      <h1 className="text-3xl font-bold">Welcome {user?.full_name} !</h1>
      <div className="flex flex-col w-full">
        <div className="chartContainer">
          <ResponsiveLine
            data={chartData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -30,
              legend: "Date Time",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Production (tons)",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
