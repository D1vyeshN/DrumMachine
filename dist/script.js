const bank1 = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];




const Box = ({ clip, setDis }) => {
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = e => {
    if (e.keyCode === clip.keyCode) {
      playsound();
    }
  };
  const playsound = () => {
    document.getElementById(clip.keyTrigger).currentTime = 0;
    document.getElementById(clip.keyTrigger).play();
    setActive(true);
    setDis(() => clip.id);
    setTimeout(() => setDis(), 200);
    setTimeout(() => setActive(false), 200);
  };

  return /*#__PURE__*/React.createElement("div", { className: `box drum-pad ${active && "active"} `, onClick: playsound, id: clip.id },
  clip.keyTrigger, /*#__PURE__*/
  React.createElement("audio", { src: clip.url, id: clip.keyTrigger, className: "clip" }));

};


const App = () => {
  const [dis, setDis] = React.useState("");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("h6", { className: "h1" }, "Drum ", /*#__PURE__*/React.createElement("i", { class: "fab fa-napster" }), " Machine")), /*#__PURE__*/

  React.createElement("div", { id: "drum-machine", className: "container" }, /*#__PURE__*/
  React.createElement("div", { id: "display", className: "display" }, dis), /*#__PURE__*/

  React.createElement("div", { className: "drum-pad", id: `to ${dis} ` },
  bank1.map((clip) => /*#__PURE__*/
  React.createElement(Box, { key: clip.id, clip: clip, setDis: setDis })))), /*#__PURE__*/




  React.createElement("div", null, /*#__PURE__*/React.createElement("p", { className: "tip" }, "*Use ", /*#__PURE__*/React.createElement("i", { class: "fas fa-headphones" }), " for Best Experience ")));

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));