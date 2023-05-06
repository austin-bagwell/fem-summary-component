interface ListItemProps {
  svgUrl: string;
  category: string;
  score: number;
  className: string;
}

export default function ListItem(props: ListItemProps) {
  const { svgUrl, category, score, className } = props;
  return (
    <div className={className}>
      <div className="flex space-between">
        <img src={svgUrl}></img>
        <p>{category}</p>
      </div>
      <div className="flex space-between">
        <p>{score.toString()}</p>
        <p> / 100</p>
      </div>
    </div>
  );
}
