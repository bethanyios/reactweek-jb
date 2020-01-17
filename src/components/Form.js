import React from "react";
import {getUserData} from "../utils/getUserData"
import "./Form.css";

const Form = ({userData, setUserData, username, setUsername, setConnectPage}) => {

  const url = `https://api.github.com/users/${username}?access_token=${process.env.REACT_APP_GITHUB_TOKEN}`;

  const submitUser = event => {
    event.preventDefault();
    getUserData(url)
    .then(response => response.json())
    .then(data => {
      setUserData({ name: data.name, avatarUrl: data.avatar_url })
    })
  }

  const startGame = event => {
    event.preventDefault();
    setConnectPage("game")
  }

return (
  <section className="form-container">
      <form>
      <fieldset>
        <legend>THE GAME OF LIFE</legend>

        <label htmlFor="user-form">Enter your github username:</label>
        <div id="user-entry">
        <input
          id="user-form"
          type="text"
          placeholder="@"
          onChange={event => setUsername(event.target.value)}
        />
        <button onClick={submitUser}>
          Enter
        </button>
        </div>
        <img className="landing-avatar" alt="github avatar" src={userData.avatarUrl} />
            <h2>{userData.name}</h2>

        <button
        onClick={startGame}
        >
          Start Game
        </button>
        </fieldset>
      </form>
  </section>

)
};

export default Form;
