const readingTime = (text, wordsPerMinute = 300, locale = "en") => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  const formatter = new Intl.NumberFormat(locale, {
    style: "unit",
    unit: "minute",
  });

  return {
    words: words,
    minutes: minutes,
    formatted: formatter.format(minutes),
  };
};

const numberUnits = (number, decimalPlaces = 1) => {
  if (number < 1000) return number.toString();

  const k = 1000;
  const i = Math.floor(Math.log(number) / Math.log(k));

  const units = ["", "K", "M", "B", "T", "Q"];

  let result = number / Math.pow(k, i);

  result =
    decimalPlaces > 0 ? result.toFixed(decimalPlaces) : Math.round(result);

  return `${result}${units[i]}`;
};

const sizeUnits = (bytes, decimalPlaces = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let result = bytes / Math.pow(k, i);

  result =
    decimalPlaces > 0 ? result.toFixed(decimalPlaces) : Math.round(result);

  return `${result} ${units[i]}`;
};

export { readingTime, numberUnits, sizeUnits };
