import {
  Box,
  Container,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import "./App.css";
import appLogo from "/logo.png";
import { Info as InfoIcon } from "@mui/icons-material";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <img style={{ objectFit: "contain" }} src={appLogo} alt="Vite logo" />
      </Box>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <ImageListItem>
            <img src="https://placehold.co/600x400" loading="lazy" />
            <ImageListItemBar
              title="Title"
              subtitle="Subtitle"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label="title"
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        </Container>
      </main>
    </Container>
  );
}

export default App;
