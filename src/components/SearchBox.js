import React from "react";
import { TextInput, Button } from "@mantine/core";

const SearchBox = ({ word, setWord, fetchDefinition }) => {
  return (
    <TextInput
      placeholder="Enter a word"
      value={word}
      onChange={(e) => setWord(e.target.value)}
      rightSection={<Button onClick={fetchDefinition}>Search</Button>}
    />
  );
};

export default SearchBox;
