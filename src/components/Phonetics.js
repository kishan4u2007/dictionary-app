import React from "react";
import { Text } from "@mantine/core";

const Phonetics = ({ phonetics }) => {
  return (
    <>
      {phonetics?.map((phonetic, index) => (
        <Text key={index} italic className="phonetics-text">
          {phonetic.text}
          {phonetic.audio && <audio controls src={phonetic.audio} className="audio-player" />}
        </Text>
      ))}
    </>
  );
};

export default Phonetics;
