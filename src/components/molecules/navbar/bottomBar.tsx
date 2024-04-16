import Image from "@/components/atoms/image/image";
import { ArrowCircleRight, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { start } from "repl";

const NAVIGATIONS = [
  {
    title: "Services",
    children: [{ title: "Products" }],
  },
  {
    title: "Products",
    children: [{ title: "Products" }],
  },
  {
    title: "Resources",
    children: [{ title: "Pricing" }, { title: "FAQs" }, { title: "Support" }],
  },
  {
    title: "Locations",
    children: [{ title: "Sydney" }],
  },
  {
    title: "Downloads",
    children: [
      { title: "iOS app" },
      { title: "Desktop app" },
      { title: "Android app" },
    ],
  },
];

const BottomBar = () => {
  return (
    <Box p={{ xs: 2, md: 8 }} bgcolor={"secondary.main"}>
      <Container maxWidth={"md"}>
        <Typography
          textAlign={"center"}
          fontWeight={900}
          fontFamily={"iowan_old"}
          variant='h2'
          color={"primary.dark"}
        >
          Book your painting project today →
        </Typography>
      </Container>
      <Divider sx={{ marginY: "1rem" }} />
      <Box display={"flex"} flexDirection={"column"}>
        <Image
          src='/assets/Logo2.svg'
          alt='Next.js Logo'
          width={"15%"}
          style={{ minWidth: 120 }}
        />
        <Typography
          fontWeight={700}
          fontFamily={"lato"}
          color={"primary.dark"}
          mt={'1.5rem'}
        >
          &copy; 2024 HomeSet Pty Ltd
        </Typography>
      </Box>
    </Box>
  );
};

export default BottomBar;