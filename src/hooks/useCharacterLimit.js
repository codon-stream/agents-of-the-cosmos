import { useState } from "react";

const useCharacterLimit = ({ maxLength, initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);
  const [characterCount, setCharacterCount] = useState(initialValue.length);

  const handleChange = (event) => {
    const newValue = event.target.value;
    
    if (newValue.length <= maxLength) {
      setValue(newValue);
      setCharacterCount(newValue.length);
    }
  };

  return {
    value,
    characterCount,
    handleChange,
    maxLength,
  };
};

export default useCharacterLimit;
