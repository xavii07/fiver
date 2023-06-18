export const getWordOfError = (error: string) => {
  const errorSplit = error.split("=").pop();
  if (errorSplit) {
    const splitWord = errorSplit.split(")");
    if (splitWord.length >= 1) {
      const value = splitWord[0].trim();
      return value.slice(1);
    }
  }
};