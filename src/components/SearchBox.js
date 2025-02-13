import React from "react";
import { TextInput, Button, Group } from "@mantine/core";

const SearchBox = ({ word, setWord, fetchWordDefinition, loading }) => {
  return (
    <Group position="center" className="search-container">
      <TextInput
        className="search-box"
        placeholder="Enter a word"
        value={word}
        onChange={(event) => setWord(event.currentTarget.value)}
        size="md"
      />
      <Button onClick={fetchWordDefinition} disabled={loading} size="md">
        Search
      </Button>
    </Group>
  );
};

export default SearchBox;
