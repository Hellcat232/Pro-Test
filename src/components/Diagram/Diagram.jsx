import css from "./Diagram.module.css";
import { useSelector } from "react-redux";
import { selectResults } from "../../redux/test/selectors";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Diagram = ({ correct, incorrect }) => {
  const COLORS = ["#ff6b09", "#d7d7d7"];

  const data = [
    { name: "Correct", value: correct },
    { name: "Incorrect", value: incorrect },
  ];

  const renderLabel = ({ name, value }) => {
    return `${value.toFixed(0)}%`;
  };

  return (
    <div className={css.diagram}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={renderLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Diagram;
