import { AppViews } from "./Components/AppView";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./Theme/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppStore } from "./Store/index";

function App() {
  return (
    <div>
      <AppStore>
        <BrowserRouter>
          <ThemeProvider>
            <CssBaseline />
            <AppViews />
          </ThemeProvider>
        </BrowserRouter>
      </AppStore>
    </div>
  );
}

export default App;
