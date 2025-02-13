import React, { useState } from "react";
import { Container, Title, Loader, Text } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import WordDetails from "../components/WordDetails";
import "../styles/DictionaryApp.css";

const DictionaryApp = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWordDefinition = async () => {
    if (!word.trim()) return;
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const result = await response.json();
      if (response.ok) {
        setData(result[0]);
      } else {
        setError("Word not found");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Container size="sm" my={50} className="dictionary-container">
      <Title order={2} align="center" mb="lg">
        Dictionary Lookup
      </Title>

      <SearchBox word={word} setWord={setWord} fetchWordDefinition={fetchWordDefinition} loading={loading} />

      {loading && <Loader className="loader" size="lg" color="blue" />}
      {error && <Text color="red" align="center" mt="md">{error}</Text>}
      {data && <WordDetails data={data} />}
    </Container>
  );
};

export default DictionaryApp;
