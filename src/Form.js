import React from "react";
import getUserData from "./utils/getUserData"
import "./Form.css";

// const Form = ({ username, setUsername, userData, setUserData, setCurrentPage }) => {

const Form = (props) => {
  const [ userData, setUserData ] = React.useState(null);
  React.useEffect(() => {
    const url = `https://api.github.com/users/${username}?access_token=${process.env.ACCESS.GITHUB.REACT_APP_GITHUB_TOKEN}`;
    getUserData(url).then(data => {console.log(data); setUserData(data)});
  }, []);
    if (!userData) {
      return <h3>...Loading</h3>;
    }


return (
  <div>
  <h1>LIFE</h1>
  </div>
)
};

export default Form;
