import './ShinyHr.css';

const ShinyHr = ({ speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <hr
      className={`shiny-hr ${className}`}
      style={{ animationDuration }}
    />
  );
};

export default ShinyHr;
