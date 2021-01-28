import React, { useState } from "react";
import "./App.css";
import ReactJoyride from "react-joyride";

function App() {
  const [run] = useState(true);

  const steps = [
    {
      target: ".tour1",
      content: "This is a cool feature of my website!",
      floaterProps: {
        disableAnimation: true,
      },
      spotlightPadding: 20,
    },
    {
      target: ".tour2",
      content: "This is a cool feature of my website 2!",
    },
    {
      content: <h2>Sticky elements</h2>,
      floaterProps: {
        disableAnimation: true,
      },
      spotlightPadding: 20,
      target: ".star-burst",
    },
  ];
  return (
    <div className="app">
      <ReactJoyride
        steps={steps}
        run={run}
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
        locale={{
          last: "End tour",
          skip: "Close tour",
        }}
      />
      <button className="tour1">Hey! I am a cool feature!</button>
      <h3 className="tour2">Hey! I am a cool feature!</h3>
      <p className="star-burst">Hello</p>
    </div>
  );
}

export default App;
