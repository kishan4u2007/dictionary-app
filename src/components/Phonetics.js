import React from "react";
import { Text } from "@mantine/core";

const Phonetics = ({ phonetics }) => {
  return (
    <>
      {phonetics?.map((phonetic, index) => (
        <div key={index}>
          <Text italic>{phonetic.text}</Text>
          {phonetic.audio && <audio controls src={phonetic.audio} />}
        </div>
      ))}
    </>
  );
};

export default Phonetics;
