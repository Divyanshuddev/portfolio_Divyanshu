import { Divider } from "@mui/material";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <NavBar />
      <Divider />
      <About />
      <Divider />
      <Skills />
    </div>
  );
}

export default App;
