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

const sizeUnits = (bytes) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + units[i];
};

export { readingTime, sizeUnits };
