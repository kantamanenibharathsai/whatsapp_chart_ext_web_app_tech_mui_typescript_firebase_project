import { Box, Divider, Stack, Typography } from "@mui/material";
import ProfilePic from "../../assets/profile1.jpg";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import eachContactStyles from "./EachContactDesktop.Styles";
import { useNavigate } from "react-router-dom";

const EachContact = ({ index }: { index: number }) => {
  const navigate = useNavigate();

  return (
    <Box component="li" sx={eachContactStyles.listItemContact}>
      <Divider />
      <Stack
        sx={eachContactStyles.listItemContactStack}
        p={1.2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Box
            component={"img"}
            src={
              "https://media-hyd1-1.cdn.whatsapp.net/v/t61.24694-24/73426840_3040689442618295_6043763113642583268_n.jpg?ccb=11-4&oh=01_AdQ2BdkJH3yj1JW0lfN1fmtgYfgPFUVqM-W0H7RNL2b1PQ&oe=657BD6DE&_nc_sid=e6ed6c&_nc_cat=111"
            }
            sx={eachContactStyles.contactProfileImg}
            alt="contact-profile"
          />
          <Stack mx={2}>
            <Typography variant="h2" sx={eachContactStyles.contactName}>
              Contact Name
            </Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <DoneAllIcon fontSize="small" />
              <Typography variant="h2" sx={eachContactStyles.recentMsg}>
                Recent Message
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Typography sx={eachContactStyles.time} variant="h2">
          12:34 PM
        </Typography>
      </Stack>
    </Box>
  );
};

export default EachContact;
