import React, { useState } from "react";
import "./App.css";
import ReactJoyride from "react-joyride";

function App() {
  const [run] = useState(true);

  const steps = [
    {
      target: ".tour1",
      content: "This is a cool feature of my website!",
    },
    {
      target: ".tour2",
      content: "This is a cool feature of my website 2!",
    },
  ];
  return (
    <div className="app">
      <ReactJoyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        locale={{
          last: "End tour",
          skip: "Close tour",
        }}
      />
      <h3 className="tour1">Hey! I am a cool feature!</h3>
      <h3 className="tour2">Hey! I am a cool feature!</h3>
    </div>
  );
}

export default App;
