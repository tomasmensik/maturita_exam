import { ResponsiveRadar } from "@nivo/radar";
import { mockStatusData as data } from "../data/mockData";

const StatusChart = () => {
  return (
    <ResponsiveRadar
      data={data}
      keys={["Tomáš Menšík", "Jan Slivka"]}
      indexBy="task"
      valueFormat=">-.2f"
      margin={{ top: 140, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={16}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "nivo" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: 0,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [{ on: "hover", style: { itemTextColor: "#000" } }],
        },
      ]}
    />
  );
};

export default StatusChart;
