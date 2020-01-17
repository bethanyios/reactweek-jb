# The Game of Life

The original game of life board from the 1860s.
Since, modernised versions of the game have come out, the winner being the player with the most money. We wanted to maintain as much of the original as possible - a game about growing older and simply experiencing the events of life.
![](https://i.imgur.com/drqIkUE.jpg =650x)

---

## Process

Brain storming ideas
![](https://i.imgur.com/WMtYXKb.jpg =800x)

---

Amending the original board game: removing less relevant life events and made smaller for timeframe.
![](https://i.imgur.com/uipAbav.jpg)

---

Wireframes and stretch goals
![](https://i.imgur.com/hoDhDwd.jpg)

---

Deciding on the dice rolling function: random generator
![](https://i.imgur.com/4LfK29E.jpg =800x)

---

## The connector page

```=Javascript

const PageSelect = (props) => {
    const [ userData, setUserData ] = React.useState({ name: "Player", avatarUrl: "https://source.unsplash.com/300x300/?sunflower" });
    const [ username, setUsername ] = React.useState("jc2820")
    const [connectPage, setConnectPage] = React.useState("form");

    if (connectPage === "form") {
        return (
          <Form
            userData={userData}
            setUserData={setUserData}
            username = {username}
            setUsername = {setUsername}
            setConnectPage={setConnectPage}
          />
        );
      } else if (connectPage === "game") {
        return (
          <Game
          userData={userData}
          setUserData={setUserData}
          username = {username}
          setUsername = {setUsername}
          setConnectPage={setConnectPage}
          />
        );
  };
}
```

---

## Form entry

```=Javascript
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
```

---

## Keyboard kontrol

```=Javascript

const Board = ({avatar}) => {
    const [ position, setPosition ] = React.useState(0);

    React.useEffect(() => {
       const movePosition = event => {
         if (event.key === "ArrowLeft") {
           setPosition(position - 1)
         } else if (event.key === "ArrowRight") {
           setPosition(position + 1)
         }
       };
       window.addEventListener("keydown", movePosition);
       return () => window.removeEventListener("keydown", movePosition);
     }, [position, setPosition]);

return (
Array.from ({length : 25}, (x,i) => {
    return (
    <div className ={i%2 ? "rest-square" : "square"}>
    {position === i ? <Avatar avatar = {avatar} /> : null}
    </div>
  )})
)
}

```
---

## Dice

```=Javascript
const Dice = () => {
    const [roll, setRoll] = React.useState("0");

    const rollDice = (event, max, min) => {
        min = 1;
        max = 7;
        setRoll(Math.floor(Math.random() * (max - min)) + min)
    }

    return (
        <fieldset className="dice-fieldset">
            <legend>ROLL THE DICE</legend>
            <p className="dice-value">
                {roll > 0 ? roll : "☟"}
            </p>
            🎲 <button className="roll-button" onClick={rollDice}>
                Roll Dice
            </button>
        </fieldset>
    )
}

```
