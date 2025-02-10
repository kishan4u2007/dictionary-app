import React from "react";
import { TextInput, Button, Card, Text, List } from "@mantine/core";

const DictionaryContent = ({ word, setWord, fetchDefinition, data }) => {
  return (
    <>
      {/* Search Box */}
      <TextInput
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        rightSection={<Button onClick={fetchDefinition}>Search</Button>}
      />

      {/* Word Details */}
      {data && (
        <Card shadow="sm" padding="lg" mt={20}>
          <Text size="xl" weight={700}>{data.word}</Text>

          {/* Phonetics */}
          {data.phonetics?.map((phonetic, index) => (
            <div key={index}>
              <Text italic>{phonetic.text}</Text>
              {phonetic.audio && <audio controls src={phonetic.audio} />}
            </div>
          ))}

          {/* Word Origin */}
          {data.origin && <Text mt={10}>Origin: {data.origin}</Text>}

          {/* Meanings & Definitions */}
          <List spacing="sm" mt={10}>
            {data.meanings?.map((meaning, index) => (
              <List.Item key={index}>
                <Text weight={600}>{meaning.partOfSpeech}</Text>
                <List withPadding>
                  {meaning.definitions.map((def, idx) => (
                    <List.Item key={idx}>{def.definition}</List.Item>
                  ))}
                </List>
              </List.Item>
            ))}
          </List>
        </Card>
      )}
    </>
  );
};

export default DictionaryContent;
