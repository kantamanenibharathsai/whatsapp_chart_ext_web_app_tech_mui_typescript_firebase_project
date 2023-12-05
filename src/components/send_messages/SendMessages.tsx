import { Stack, Typography } from "@mui/material";
import React from "react";
import sendMsgStyles from "./SendMessages.Styles";
import DoneAllIcon from "@mui/icons-material/DoneAll";

interface MyProps {
  each: number;
}

const SendMessage: React.FC<MyProps> = ({ each }) => {
  return (
    <Stack sx={sendMsgStyles.sendMsgStack}>
      <Typography variant="body1">
        Hello, Bharath How are you, Hello, Bharath How are you Hello.
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        alignSelf={"flex-end"}
      >
        <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>
          12:34 PM
        </Typography>
        <DoneAllIcon fontSize="small" />
      </Stack>
    </Stack>
  );
};

export default SendMessage;
