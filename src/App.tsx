import Scaffolding from "./components/Scaffolding";
import { useEffect, useState } from "react";
import { UserContext } from "./Contexts/UserContext";

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
      <Scaffolding />
    </UserContext.Provider>
  );
}

export default App;
