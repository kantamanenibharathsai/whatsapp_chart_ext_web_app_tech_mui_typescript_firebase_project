import React, { useEffect } from "react";
import mobileChatStyles from "./MobileChat.Styles";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ReceiveMessage from "../../components/receive_messages/ReceiveMessages";
import SendMessage from "../../components/send_messages/SendMessages";
import { useNavigate } from "react-router-dom";

const MobileChat = () => {
  const theme = useTheme();
  const isMobileView: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobileView) navigate("/");
  });

  return (
    <Box sx={mobileChatStyles.mobileMainContainer}>
      <Box sx={mobileChatStyles.rightContainer}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          px={2}
          alignItems={"center"}
          sx={mobileChatStyles.rightHeader}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              component={"img"}
              src={
                "https://pps.whatsapp.net/v/t61.24694-24/400781430_861256435489902_9196058807747577901_n.jpg?ccb=11-4&oh=01_AdTrD4nz6xgOJbPAP9kUpSyBX7ql39JzRw7D6sPveX1I5Q&oe=657BCA3E&_nc_sid=e6ed6c&_nc_cat=103"
              }
              sx={mobileChatStyles.profileImg}
            />
            <Typography>User 2</Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <IconButton>
              <SearchIcon sx={mobileChatStyles.headerIcons} />
            </IconButton>
            <IconButton>
              <MoreVertIcon sx={mobileChatStyles.headerIcons} />
            </IconButton>
          </Stack>
        </Stack>
        <Box sx={mobileChatStyles.chatHolderContainer}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((each) => (
            <ReceiveMessage
              key={[0, 1, 2, 3, 4, 5, 6, 7, 8].indexOf(each)}
              each={each}
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((each) => (
            <SendMessage
              key={[0, 1, 2, 3, 4, 5, 6, 7, 8].indexOf(each)}
              each={each}
            />
          ))}
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          px={2}
          alignItems={"center"}
          sx={mobileChatStyles.rightBottomHeader}
        >
          <Stack direction={"row"}>
            <IconButton>
              <TagFacesIcon sx={mobileChatStyles.headerIcons} />
            </IconButton>
            <IconButton>
              <AddIcon sx={mobileChatStyles.headerIcons} />
            </IconButton>
          </Stack>
          <TextField
            variant="outlined"
            placeholder="Type a message"
            sx={mobileChatStyles.bottomHeaderTextField}
            InputProps={{
              sx: {
                backgroundColor: "white",
                height: "30px",
                outline: "none",
                // border: "1px solid red",
                width: "100%",
              },
            }}
          />
          <Stack direction={"row"} spacing={1}>
            <IconButton>
              <MicIcon sx={mobileChatStyles.headerIcons} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default MobileChat;
