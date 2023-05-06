interface CategoryProps {
  icon: string;
  category: string;
  score: number;
  className: string;
}

export default function Category(props: CategoryProps) {
  const { className, icon, category, score } = props;
  return (
    <div className={className}>
      <div className="flex space-between">
        <img src={icon}></img>
        <p className="font-bold">{category}</p>
      </div>
      <div className="flex space-between">
        <p className="summary-category-user-score">{score.toString()}</p>
        <p className="summary-category-possible-score"> / 100</p>
      </div>
    </div>
  );
}
