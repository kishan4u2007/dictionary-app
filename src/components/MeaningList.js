import React from "react";
import { List, Text } from "@mantine/core";

const MeaningList = ({ meanings }) => {
  return (
    <List>
      {meanings?.map((meaning, index) => (
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
  );
};

export default MeaningList;
