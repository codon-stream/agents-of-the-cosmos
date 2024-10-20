import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(nextValue) {
    setValue((currentValue) =>
      typeof nextValue === "boolean" ? nextValue : !currentValue
    );
  }

  return [value, toggleValue];
}
