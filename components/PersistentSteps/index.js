import { Steps } from "intro.js-react";
import { useEffect, useState } from "react";

export default function PersistentSteps({ title, steps }) {
    [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
      setStepIndex(localStorage.getItem(`tutorial-${title}-step`) || 0);
    }, []);

    return (
    <Steps
      steps={steps}
      initialStep={stepIndex}
      onChange={(nextStepIndex) => {
        localStorage.setItem(`tutorial-${title}-step`, nextStepIndex);
      }}
    ></Steps>
  );
}
