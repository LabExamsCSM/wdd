import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, Button } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const cardTheme = createTheme({
  palette: {
    background: { paper: "#fafafa" },
    primary: { main: "#212121" },
    secondary: { main: "#212121" },
  },
});

function Code({title, code}) {

    const handleCopyClick = () => {
        // const textToCopy = code; // Replace with the text you want to copy
        navigator.clipboard.writeText(code)
        alert("Copied to clipboard")
      };

  return (
    <>
      <ThemeProvider theme={cardTheme}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              color="primary"
              variant="h6"
              component="div"
              sx={{ display: "inline" }}
            >
              {title}
            </Typography>
            <Typography color="primary" variant="body2">
              <SyntaxHighlighter language="html" style={vscDarkPlus}>
                {code}
              </SyntaxHighlighter>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={handleCopyClick}>
              copy
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
}


export default Code;
