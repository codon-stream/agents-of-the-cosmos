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

export default readingTime;
