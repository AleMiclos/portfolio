import { useState, useEffect } from "react";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText";


function Typewriter({ text, speed = 100, onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      if (onFinish) onFinish();
    }
  }, [index, text, speed, onFinish]);


  return (
    <h2 className="typewriter">
      <ShinyText
        text={text.slice(0, index)}
        disabled={false}
        speed={3}
        className="custom-class"
      />
    </h2>
  );
}

export default Typewriter;
