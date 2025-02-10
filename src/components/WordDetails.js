import React from "react";
import { Card, Text } from "@mantine/core";
import Phonetics from "./Phonetics";
import MeaningList from "./MeaningList";

const WordDetails = ({ data }) => {
  return (
    <Card shadow="sm" padding="lg">
      <Text size="xl" weight={700}>{data.word}</Text>
      <Phonetics phonetics={data.phonetics} />
      {data.origin && <Text mt={10}>Origin: {data.origin}</Text>}
      <MeaningList meanings={data.meanings} />
    </Card>
  );
};

export default WordDetails;
