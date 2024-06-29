// import React from "react";
import React, { useState } from "react";
import Explorer from "./img/midiExplorer.png";
import Import from "./img/import.png";
import MIDIExplorer from "./component/MIDIExplorer.jsx";

// import "./css/App.css";

// return (
//   <div className="App">
//     <header className="App-header">
//       <h1>Reactで要素を追加</h1>
//       <button onClick={addDiv}>Divを追加</button>
//       <div>
//         {elements.map((element, index) => (
//           <div key={index} className="added-div">
//             {element}
//           </div>
//         ))}
//       </div>
//     </header>
//   </div>
// );
// };

const Desktop = () => {
  const [elements, setElements] = useState([]);

  const openexplorer = () => {
    const newElement = <MIDIExplorer />;
    setElements([...elements, newElement]);
  };

  return (
    <>
      <div className="desktop">
        <div className="icon-container">
          <div className="icon" id="explorer">
            <img
              onDoubleClick={openexplorer}
              className="icon-img"
              src={Explorer}
              alt="アイコン"
            />
            <button onDoubleClick={openexplorer} className="icon-name">
              MIDI Explorer
            </button>
          </div>
          <div className="icon" id="inport">
            <img className="icon-img" src={Import} alt="アイコン" />
            <button className="icon-name">ﾌｧｲﾙのｲﾝﾎﾟｰﾄ</button>
          </div>
        </div>

        <div>
          {elements.map((element, index) => (
            <div key={index} className="explorer">
              {element}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Desktop;
