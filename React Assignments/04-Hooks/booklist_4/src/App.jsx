import { ThemeProvider } from "./context/theme-context";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
