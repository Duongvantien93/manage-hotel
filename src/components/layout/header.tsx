import AirplayIcon from "@mui/icons-material/Airplay";
import { HStack } from "../stack/stack";
import TextField from "@mui/material/TextField";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      style={{
        backgroundColor: "antiquewhite",
        width: "100%",
        padding: 2,
        borderRadius: "4px",
        marginTop: 2,
      }}
    >
      <AirplayIcon color="primary" />
      <Box>
        <HStack alignItems="center">
          <KeyboardDoubleArrowLeftIcon />
          <TextField size="small" />
          <FaceIcon color="primary" />
        </HStack>
      </Box>
    </HStack>
  );
};
export default Header;
