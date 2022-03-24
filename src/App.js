import "./App.css";
import Board from "./board/Board";

function App() {
  return (
    <div className="App flex  flex-col h-screen place-items-center">
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;
