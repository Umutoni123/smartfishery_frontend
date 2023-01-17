import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

function Index() {
  const [chartData, setChartData] = useState([
    {
      id: "ph",
      color: "hsl(235, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 33,
        },
        {
          x: "helicopter",
          y: 150,
        },
        {
          x: "boat",
          y: 168,
        },
        {
          x: "train",
          y: 19,
        },
        {
          x: "subway",
          y: 69,
        },
        {
          x: "bus",
          y: 217,
        },
        {
          x: "car",
          y: 143,
        },
        {
          x: "moto",
          y: 236,
        },
        {
          x: "bicycle",
          y: 43,
        },
        {
          x: "horse",
          y: 90,
        },
        {
          x: "skateboard",
          y: 82,
        },
        {
          x: "others",
          y: 33,
        },
      ],
    },
  ]);

  const colorDict = {
    Velocity: "#FF0000",
    "Velocity Distribution": "#0000FF",
  };

  // useEffect(() => {
  //   if (chartData.length === 0) {
  //     const data = [
  //       {
  //         id: "Temperature",
  //         data: [],
  //       },
  //       {
  //         id: "PH",
  //         data: [],
  //       },
  //     ];
  //     for (let i = 0; i < 50; i++) {
  //       // add data in the format below
  //       // {
  //       //   x: "12/12/2020",
  //       //   y: Math.random() * 100
  //       // }
  //       data[0].data.push({
  //         x: i,
  //         y: Math.random() * 100,
  //       });
  //       data[1].data.push({
  //         x: i,
  //         y: Math.random() * 100,
  //       });
  //     }
  //     setChartData(data);
  //   }
  // }, []);

  return (
    <div className="flex flex-col items-start float-right w-10/12 px-10 my-10 space-y-5">
      <h1 className="text-3xl font-bold">Welcome !</h1>
      <div className="flex flex-col w-full">
        <div className="headingTitle mb-4 md:mb-0">Velocity</div>
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
              tickRotation: 0,
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
