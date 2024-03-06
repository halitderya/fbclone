import { useEffect, useState } from "react";
import IPeople from "../../../types/People";
import styled from "styled-components";
import ShortCut from "../Shortcuts";

const ContactsContainer = styled.div`
  font-weight: 400;
  width: inherit;
  position: absolute;
  height: 70%;
  overflow-y: auto;
`;
const Contact = styled(ShortCut)`
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
`;
const ContactsHeader = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
`;
const ContactsLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  padding: 5px;
`;

export default function RandomUserComponent() {
  const [userData, setUserData] = useState<IPeople | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=50");
        const data: IPeople = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContactsContainer className="ContactsContainer">
      <ContactsHeader className="ContactsHeader">
        <ContactsLabel>Contacts</ContactsLabel>
      </ContactsHeader>
      {userData && userData.results.map((user) => <Contact key={user.login.username} text={user.name.first + " " + user.name.last} image={user.picture.thumbnail} />)}
    </ContactsContainer>
  );
}
