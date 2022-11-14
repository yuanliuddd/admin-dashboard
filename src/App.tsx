import { ThemeProvider, CssBaseline } from "@mui/material";

import { ColorModeContext, useMode } from "./config/theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">sedezd</div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;

