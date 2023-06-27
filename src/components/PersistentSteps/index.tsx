import { Step, Steps } from "intro.js-react";
import React from "react";

interface PersistentStepsProps {
  steps: Step[];
  title: string;
}
const PersistentSteps: React.FC<PersistentStepsProps> = ({ steps, title }) => {

    const savedStepIndex = Number(localStorage.getItem(`tutorial-${title}-step`));

    return (
    <Steps 
      enabled={true}
      steps={steps}
      initialStep={savedStepIndex}
      onChange={(nextStepIndex) => {
        localStorage.setItem(`tutorial-${title}-step`, nextStepIndex.toString());
      }}
      onExit={() => {}}
    ></Steps>
    );
}
export default PersistentSteps;