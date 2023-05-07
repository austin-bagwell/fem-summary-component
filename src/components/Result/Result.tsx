import "./Result.css";

export default function Result() {
  return (
    <div className="result-section">
      <p className="font-lavender result-header">Your Result</p>
      <div className="circle">
        <p className="results-text result-score">76</p>
        <p className="results-text result-of-100">of 100</p>
      </div>
      <h3 className="results-text result-descriptor">Great</h3>
      <p className="font-lavender font-xbold result-comparison">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
