import "./Summary.css";
import Button from "../Elements/Button";
import ListItem from "../Elements/ListItem";
import reaction from "../../assets/images/icon-reaction.svg";

export default function Summary() {
  return (
    <div className="summary-section">
      <h2>Summary</h2>
      <ListItem
        className="list-item"
        svgUrl={reaction}
        category={data[0].category}
        score={data[0].score}
      />
      <Button className="summary-button" displayText="Continue" />
    </div>
  );
}

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "../../assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "../assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "../assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "../assets/images/icon-visual.svg",
  },
];
