import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import homeStyles from "./MobileHome.Styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import AdjustIcon from "@mui/icons-material/Adjust";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EachContact from "../../components/each_contact_mobile/EachContactMobile";

const MobileHome = () => {
  let arr = Array.from(Array(10));
  console.log(arr);

  return (
    <Box sx={homeStyles.homeMainContainer}>
      <Box sx={homeStyles.greenContainer}></Box>
      <Box sx={homeStyles.greenBottomContainer}></Box>
      <Box sx={homeStyles.homeChildContainer}>
        <Box sx={homeStyles.chatScreenContainer}>
          <Box sx={homeStyles.leftContactsContainer}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              px={2}
              alignItems={"center"}
              sx={homeStyles.header}
            >
              <Box
                component={"img"}
                src="https://pps.whatsapp.net/v/t61.24694-24/400781430_861256435489902_9196058807747577901_n.jpg?ccb=11-4&oh=01_AdTrD4nz6xgOJbPAP9kUpSyBX7ql39JzRw7D6sPveX1I5Q&oe=657BCA3E&_nc_sid=e6ed6c&_nc_cat=103"
                sx={homeStyles.profileImg}
                alt="profile-img"
              />
              <Stack direction={"row"} spacing={{ xs: 0, md: 1 }}>
                <IconButton>
                  <GroupsIcon sx={homeStyles.headerIcons} />
                </IconButton>
                <IconButton>
                  <AdjustIcon sx={homeStyles.headerIcons} />
                </IconButton>
                <IconButton>
                  <AddCommentIcon sx={homeStyles.headerIcons} />
                </IconButton>
                <IconButton>
                  <MoreVertIcon sx={homeStyles.headerIcons} />
                </IconButton>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <TextField
                variant="outlined"
                placeholder="Search or start new chat"
                sx={homeStyles.searchOrStartInputField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={homeStyles.searchIcon} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "#f0f2f5",
                    height: "36px",
                    outline: "none",
                    borderRadius: "8px",
                    // border: "2px solid green",
                    width: "100%",
                  },
                }}
              />
              <IconButton>
                <FilterListIcon sx={homeStyles.filterIcon} />
              </IconButton>
            </Stack>
            <Box component="ul" sx={homeStyles.unorderedListContainer}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (each, index) => (
                  <EachContact key={index} index={index} />
                )
              )}
            </Box>
          </Box>
          {/* <Box sx={homeStyles.rightContainer}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              px={2}
              alignItems={"center"}
              sx={homeStyles.rightHeader}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Box
                  component={"img"}
                  src={
                    "https://pps.whatsapp.net/v/t61.24694-24/400781430_861256435489902_9196058807747577901_n.jpg?ccb=11-4&oh=01_AdTrD4nz6xgOJbPAP9kUpSyBX7ql39JzRw7D6sPveX1I5Q&oe=657BCA3E&_nc_sid=e6ed6c&_nc_cat=103"
                  }
                  sx={homeStyles.profileImg}
                />
                <Typography>User 2</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <IconButton>
                  <SearchIcon sx={homeStyles.headerIcons} />
                </IconButton>
                <IconButton>
                  <MoreVertIcon sx={homeStyles.headerIcons} />
                </IconButton>
              </Stack>
            </Stack>
            <Box sx={homeStyles.chatHolderContainer}>
              {arr.map((each) => (
                <ReceiveMessage key={arr.indexOf(each)} each={each} />
              ))}
              {arr.map((each) => (
                <SendMessage key={arr.indexOf(each)} each={each} />
              ))}
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              px={2}
              alignItems={"center"}
              sx={homeStyles.rightBottomHeader}
            >
              <Stack direction={"row"}>
                <IconButton>
                  <TagFacesIcon sx={homeStyles.headerIcons} />
                </IconButton>
                <IconButton>
                  <AddIcon sx={homeStyles.headerIcons} />
                </IconButton>
              </Stack>
              <TextField
                variant="outlined"
                placeholder="Type a message"
                sx={homeStyles.bottomHeaderTextField}
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
                  <MicIcon sx={homeStyles.headerIcons} />
                </IconButton>
              </Stack>
            </Stack>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default MobileHome;
