export const fetchWordDefinition = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error("Word not found");
      }
      return await response.json();
    } catch (error) {
      return { error: error.message };
    }
  };
  