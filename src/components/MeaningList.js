import React from "react";
import { List, Text } from "@mantine/core";

const MeaningList = ({ meanings }) => {
  return (
    <List spacing="sm" mt={10} className="meanings-list">
      {meanings?.map((meaning, index) => (
        <List.Item key={index} className="meaning-item">
          <Text weight={600} className="part-of-speech">{meaning.partOfSpeech}</Text>
          <List withPadding>
            {meaning.definitions.map((def, idx) => (
              <List.Item key={idx} className="definition-text">{def.definition}</List.Item>
            ))}
          </List>
        </List.Item>
      ))}
    </List>
  );
};

export default MeaningList;
