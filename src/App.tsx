import Scaffolding from "./components/Scaffolding";
import { useEffect, useState } from "react";
import { UserContext } from "./Contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
function App() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch("../public/FakeAPI/UserLogin.json")
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [setUserInfo]);

  return (
    <UserContext.Provider value={userInfo}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Scaffolding />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
