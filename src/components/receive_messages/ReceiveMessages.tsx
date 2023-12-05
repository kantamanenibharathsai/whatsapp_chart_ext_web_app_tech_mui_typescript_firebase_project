import { Stack, Typography } from "@mui/material";
import React from "react";
import receivedMsgStyles from "./ReceiveMessages.Styles";

interface MyProps {
  each: number;
}

const ReceiveMessage: React.FC<MyProps> = ({ each }) => {
  return (
    <Stack sx={receivedMsgStyles.msgContainer}>
      <Typography variant="body1">Hello, Bharath How are you</Typography>
      <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>
        12:34 PM
      </Typography>
    </Stack>
  );
};

export default ReceiveMessage;
