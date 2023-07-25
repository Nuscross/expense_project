import ChartBar from "./ChartBar";
import "./Chart.js";

function Chart(props) {
  return (
    <div className="chart">
      {props.datePoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
