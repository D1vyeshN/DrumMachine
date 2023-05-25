

const bank1 = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];


const Box = ({clip, setDis}) => {
  const [active,setActive]=React.useState(false);
  React.useEffect(() => {
    document.addEventListener('keydown',handleKeyPress);
    return ()=>{
      document.removeEventListener('keydown',handleKeyPress);
    };
  },[]);
  
const handleKeyPress=(e)=>{
  if(e.keyCode === clip.keyCode){
    playsound();
  }
}
    const playsound = () => {
      document.getElementById(clip.keyTrigger).currentTime =0;
      document.getElementById(clip.keyTrigger).play();
      setActive(true);
      setDis(()=>(clip.id));
      setTimeout(()=> setDis(),200);
      setTimeout(()=> setActive(false) ,200);
    };
  
      return (<div className={`box drum-pad ${active && "active" } `} onClick={playsound} id={clip.id}>
            {clip.keyTrigger}
          <audio src={clip.url} id={clip.keyTrigger} className="clip"/>
            </div>);
  }
                                 

const App =()=>{
  const [dis,setDis]=React.useState("");
      return(<>
          <div><h6 className="h1">Drum <i class="fab fa-napster"></i> Machine</h6>
           </div>
        <div id="drum-machine" className="container">
        <div id="display" className="display" >{dis}</div>
    
        <div className="drum-pad" id={`to ${dis} `}>
          {bank1.map((clip) => (
            <Box key={clip.id} clip={clip} setDis={setDis}/>
          ))}
        </div>
    
      </div>
        <div><p className="tip">*Use <i class="fas fa-headphones"></i> for Best Experience </p></div>
      </>);
};

ReactDOM.render(<App />, document.getElementById("app"));
