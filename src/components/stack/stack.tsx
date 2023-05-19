import Stack, { StackProps } from "@mui/material/Stack";
import { FunctionComponent } from "react";

const HStack: FunctionComponent<StackProps> = (props) => {
  return <Stack {...props} direction="row" />;
};

const VStack: FunctionComponent<StackProps> = (props) => {
  return <Stack {...props} direction="column" />;
};
export { VStack, HStack };
