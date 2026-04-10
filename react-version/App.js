import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MemoryGame from "./components/MemoryGame";

function App() {
  const [user, setUser] = useState(null);
  const [game, setGame] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  if (game === "memory") {
    return <MemoryGame onBack={() => setGame(null)} />;
  }

  return (
    <Dashboard
      user={user}
      onSelectGame={setGame}
      onLogout={() => setUser(null)}
    />
  );
}

export default App;
