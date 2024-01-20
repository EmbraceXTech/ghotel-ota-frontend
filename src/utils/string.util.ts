const toDashCase = (word: string) => {
  return word.split(" ").join("-").toLowerCase();
};

export { toDashCase };