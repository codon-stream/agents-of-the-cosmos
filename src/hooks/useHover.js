import { useEffect, useState } from "react";

export default function useHover(ref) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref?.current;

    if (!element) return;

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    element.addEventListener("pointerover", handleMouseOver);
    element.addEventListener("pointerout", handleMouseOut);

    return () => {
      element.removeEventListener("pointerover", handleMouseOver);
      element.removeEventListener("pointerout", handleMouseOut);
    };
  }, [ref]);

  return isHovered;
}
