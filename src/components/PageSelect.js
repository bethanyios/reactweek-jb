import React from "react";
import Form from "./Form";
import Game from "./Game";
import "./PageSelect.css";

const PageSelect = (props) => {
    const [ userData, setUserData ] = React.useState({ name: "Player", avatarUrl: "https://source.unsplash.com/300x300/?sunflower" });
    const [ username, setUsername ] = React.useState("jc2820")
    const [connectPage, setConnectPage] = React.useState("form");

    if (connectPage === "game") {
        return (
          <Game
            userData={userData}
            setUserData={setUserData}
            username = {username}
            setUsername = {setUsername}
            setConnectPage={setConnectPage}
          />
        );
      } else {
        return (
          <Form     
          userData={userData}
          setUserData={setUserData}
          username = {username}
          setUsername = {setUsername}
          setConnectPage={setConnectPage}
          />
        );
  };
}


  export default PageSelect;
