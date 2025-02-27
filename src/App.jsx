import { DarkLight, ThemeProvider } from "./DarkLight";
import { Pokemon } from "./Pokemon";

export const App = () => {
  return (
    <ThemeProvider>
     <Pokemon/>
    </ThemeProvider>
  );
};