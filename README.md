# The Game of Life

By [Beth](https://github.com/bethanyios) & [Jamie](https://github.com/jc2820)

[https://the-game-of-life-1860.netlify.com/](https://the-game-of-life-1860.netlify.com/)

'The Game of Life' Is a board game originally designed in the 1860's. Modernised versions of the game have since come out, the winner being the player with the most money. With our React game we wanted to maintain as much of the original as possible - a game about growing older and simply experiencing the events of life.
![The 1860 board](https://i.imgur.com/drqIkUE.jpg)

---

## Process

Brain storming ideas
![](https://i.imgur.com/WMtYXKb.jpg)

---

Amending the original board game: removing less relevant life events and made smaller for timeframe.
![](https://i.imgur.com/uipAbav.jpg)

---

Wireframes and stretch goals
![](https://i.imgur.com/hoDhDwd.jpg)

---

Deciding on the dice rolling component: random generator
![](https://i.imgur.com/4LfK29E.jpg)

---

## Interesting code snippets

---

## The connector page

```=Javascript

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
```

---

## Keyboard kontrol and board square creation

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
  Array.from (squaresInfo, (x,i) => {
    return (
    <div className ={i%2 ? "rest-square" : "square"}>
    {position === i ? <Avatar avatar = {avatar} /> : null}
    {<p className="square-text">{squaresInfo[i]}</p>}
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
