function Dashboard({ user, onSelectGame, onLogout }) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Welcome, {user}!</h1>
  
        <button onClick={() => onSelectGame("memory")}>
          🎮 Memory Game
        </button>
  
        <br /><br />
  
        <button onClick={onLogout}>
          Logout
        </button>
      </div>
    );
  }
  
  export default Dashboard;