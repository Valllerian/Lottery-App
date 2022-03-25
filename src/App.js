import "./App.css";
import Board from "./board/Board";

function App() {
  return (
    <div className="App flex  flex-col grid place-items-center h-screen bg-slate-300">
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;
