import React from "react";
import getUserData from "./utils/getUserData"
import "./Form.css";

// const Form = ({ username, setUsername, userData, setUserData, setCurrentPage }) => {

const Form = (props) => {
  const [ userData, setUserData ] = React.useState(null);
  React.useEffect(() => {
    const url = `https://api.github.com/users/${username}?access_token=${process.env.REACT_APP_GITHUB_TOKEN}`;
    getUserData(url).then(data => {console.log(data); setUserData(data)});
  }, []);
    if (!userData) {
      return <h3>...Loading</h3>;
    }


return (
  <section>
    <fieldset>
      <form>
        <legend>GAME OF LIFE</legend>
        <label htmlFor="user-form">Username</label>
        <input 
          id="user-form"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button onClick={submit}>
          Enter
        </button>
      </form>
    </fieldset>
  </section>

)
};

export default Form;
