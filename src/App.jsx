import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodosList from "./TodosList";

function App() {
  return (
    <>
      <h1>Todos List:</h1>
      <TodosList />
      <CssBaseline />
    </>
  );
}

export default App;
