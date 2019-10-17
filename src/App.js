import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SwipeableList, SwipeableListItem } from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

function App() {
  return (
    <div className="App">
      <div className="section">
        <SwipeableList>
          <SwipeableListItem
            swipeLeft={{
              content: <div className="list2">Revealed content during swipe</div>,
              action: () => console.info("swipe action triggered")
            }}
            swipeRight={{
              content: <div className="list2">Revealed content during swipe</div>,
              action: () => console.info("swipe action triggered")
            }}
          >
            <div className="list1">Item name</div>
          </SwipeableListItem>
        </SwipeableList>
      </div>
    </div>
  );
}

export default App;
