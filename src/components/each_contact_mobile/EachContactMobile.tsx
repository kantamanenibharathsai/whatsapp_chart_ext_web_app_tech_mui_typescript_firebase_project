import { Box, Divider, Stack, Typography } from "@mui/material";
import ProfilePic from "../../assets/profile1.jpg";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import eachContactStyles from "./EachContactMobile.Styles";
import { useNavigate } from "react-router-dom";

const EachContact = ({ index }: { index: number }) => {
  const navigate = useNavigate();

  const onClickContactPersonEventHandler = () => {
    console.log("chat");
    navigate("/chat");
  };

  return (
    <Box
      component="li"
      sx={eachContactStyles.listItemContact}
      onClick={onClickContactPersonEventHandler}
    >
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
              "https://media-hyd1-1.cdn.whatsapp.net/v/t61.24694-24/395860560_864065748587522_3826287315370545336_n.jpg?ccb=11-4&oh=01_AdTYohL54kDml5jPPB3q-fX7Y7DigeSdoWzIAdxU5XTjsA&oe=657BC97F&_nc_sid=e6ed6c&_nc_cat=105"
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
