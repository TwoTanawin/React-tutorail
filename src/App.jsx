import "./App.css";
import CheckBox from "./components/CheckBox";
import Header from "./components/Header";
import { IconA, IconB } from "./components/Icon";
import { Image } from "./components/Image";
import { useState } from "react";
import Video from "./components/Video";

function App() {
  const todoList = [
    { text: "coding React", isCheck: false },
    { text: "doing doc React", isCheck: true },
    { text: "doing doc ASP.NET", isCheck: true },
  ];

  const [counter, setCounter] = useState(0);
  const [isPlaying, setPlaying] = useState(false);

  function buttonClick() {
    setCounter(counter + 1);
  }

  function triggerPlaying() {
    setPlaying(!isPlaying);
  }

  return (
    <div>
      <Header />
      <p>Hello Two</p>
      <IconA />
      <IconB />
      <Image
        imageUrl="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
      />
      <div>
        <p>Now is counter {counter}</p>
        <button onClick={buttonClick}>Add Counter</button>
      </div>
      <div>
        {todoList.map((todo, index) => (
          <CheckBox key={index} text={todo.text} isCheck={todo.isCheck} />
        ))}
      </div>
      <div>
        <Video
          isPlaying={isPlaying}
          src="https://videocdn.cdnpk.net/videos/199b1324-bbb8-4832-ab6f-9b5ddda5712a/horizontal/previews/clear/large.mp4?token=exp=1734283718~hmac=f522b28c90fb799a7e890627036b1604082dbd41abe9f7da855cd2b5dd022d9b"
        />
        <button onClick={triggerPlaying}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
}

export default App;
