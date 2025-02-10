import React from "react";
import { Text } from "@mantine/core";

const ErrorMessage = ({ message }) => {
  return <Text color="red">{message}</Text>;
};

export default ErrorMessage;
