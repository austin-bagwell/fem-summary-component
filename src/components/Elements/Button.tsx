interface ButtonProps {
  displayText: string;
  className: string;
}

export default function Button(props: ButtonProps) {
  const { displayText, className } = props;
  return <button className={className}>{displayText}</button>;
}
