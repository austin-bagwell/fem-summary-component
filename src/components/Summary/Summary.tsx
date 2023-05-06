import "./Summary.css";
import Button from "../Elements/Button";
import ListItem from "../Elements/ListItem";
import reaction from "../../assets/images/icon-reaction.svg";
import memory from "../../assets/images/icon-memory.svg";
import visual from "../../assets/images/icon-visual.svg";
import verbal from "../../assets/images/icon-verbal.svg";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: reaction,
  },
  {
    category: "Memory",
    score: 92,
    icon: memory,
  },
  {
    category: "Verbal",
    score: 61,
    icon: verbal,
  },
  {
    category: "Visual",
    score: 72,
    icon: visual,
  },
];

const listItems = data.map((item) => (
  <ListItem
    className="list-item"
    svgUrl={item.icon}
    category={item.category}
    score={item.score}
  />
));

export default function Summary() {
  return (
    <div className="summary-section">
      <h2>Summary</h2>
      {listItems}
      <Button className="summary-button" displayText="Continue" />
    </div>
  );
}
