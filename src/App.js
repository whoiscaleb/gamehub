import "./Assets/Styles/App.css";
import Header from "./Layouts/Header/Header.js";
import Main from "./Layouts/Main/Main.js";
import { useState, useEffect } from "react";
import { auth } from "./services/firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} />
    </div>
  );
}

export default App;
