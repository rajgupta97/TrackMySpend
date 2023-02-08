import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totMax = Math.max(...dataPointValues);
  console.log("max: ", totMax);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
