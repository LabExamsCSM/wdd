import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import {
  Button,
  Typography,
  ButtonGroup,
  Container,
  Grid,
} from "@mui/material";
import Code from "./components/Code";
import { Data } from "./data";

const darkTheme = createTheme({
  palette: { primary: { main: grey[50] }, secondary: { main: grey[900] } },
  typography: {
    // fontFamily: ["Syne", "sans-serif"].join(","),
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>
          <Typography
            variant="h3"
            color="secondary"
            level="title-sm"
            fontWeight={700}
            fontFamily={"Syne"}
            align="center"
            paddingTop={10}
            marginBottom={5}
          >
            WDD LAB PROGRAMS
          </Typography>
        </main>

        {/* <Container align="center" sx={{ marginBottom: 10 }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>HTML</Button>
            <Button>CSS</Button>
            <Button>JS</Button>
          </ButtonGroup>
        </Container> */}

      </ThemeProvider>

      <Grid container spacing={2} paddingX={20}>
        {Data.map((item) => (
          <Grid item xs={6}>
            <Code title={item.title} code={item.code}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
