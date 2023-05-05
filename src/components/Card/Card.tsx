import Result from "../Result";
import Summary from "../Summary";
import "./Card.css";

export default function Card() {
  return (
    <section className="card">
      <Result />
      <Summary />
    </section>
  );
}
