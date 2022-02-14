const toTitleCase = (str: string): string =>
  str
    .split(" ")
    .map(word =>
      word[0] ? word.replace(word[0], word[0].toUpperCase()) : word
    )
    .join(" ");

export default toTitleCase;
