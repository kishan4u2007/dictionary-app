import React, { useState } from "react";
import { Container, MantineProvider } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import WordDetails from "../components/WordDetails";
import ErrorMessage from "../components/ErrorMessage";
import LoaderComponent from "../components/LoaderComponent";
import { fetchWordDefinition } from "../api/dictionaryApi";
import "../styles/DictionaryApp.css";
import DictionaryContent from "../components/DictionaryContent";

const DictionaryApp = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDefinition = async () => {
    if (!word.trim()) return;
    setLoading(true);
    setError(null);
    setData(null);
    const result = await fetchWordDefinition(word);
    if (result.error) setError(result.error);
    else setData(result[0]);
    setLoading(false);
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="md" my={50}>
      {/* <DictionaryContent word={word} setWord={setWord} fetchDefinition={fetchDefinition} data={data} /> */}

        <SearchBox word={word} setWord={setWord} fetchDefinition={fetchDefinition} />
        {loading && <LoaderComponent />}
        {error && <ErrorMessage message={error} />}
        {data && <WordDetails data={data} />}
      </Container>
    </MantineProvider>
  );
};

export default DictionaryApp;
