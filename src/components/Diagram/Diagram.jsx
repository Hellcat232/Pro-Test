import css from "./Diagram.module.css";
import { useSelector } from "react-redux";
import { selectResults } from "../../redux/test/selectors";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const Diagram = () => {
  const { result } = useSelector(selectResults);

  const data = [
    { name: "Group A", value: result },
    { name: "Group B", value: 100 },
  ];

  return (
    <div style={{ width: "100%", height: 300, marginTop: "200px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#ff6b01" label />
        </PieChart>
      </ResponsiveContainer>
      {/* <p style={{ marginTop: "200px" }}>Diagram</p> */}
    </div>
  );
};

export default Diagram;
