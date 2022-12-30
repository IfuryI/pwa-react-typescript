import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { FirstStep } from "./First step/FirstStep";
import './Layout.css';

interface StepItem {
  label: string;
  index: number;
}

const steps: StepItem[] = [
  { label: 'Personal', index: 0 },
  { label: 'Phone', index: 1 },
  { label: 'Verification', index: 2 },
  { label: 'Summary', index: 3 },
];

export const Layout = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep(activeStep + 1);

  const previousStep = () => setActiveStep(activeStep - 1);

  const onFinish = () => {
    alert('horaaay');
    setActiveStep(0);
  }

  return <div className="registeration-layout">
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => {
        const stepProps: { completed?: boolean } = {};
        return (
          <Step key={step.label} {...stepProps}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
    <div className="form-container">
      {activeStep === 0 && <FirstStep />}
    </div>
    <div className="buttons-container">
      <div className="buttons-container-column">
        {
          activeStep !== 0 &&
          <Button fullWidth variant="outlined" onClick={previousStep}>Back</Button>
        }
      </div>
      <div className="buttons-container-column">
        {
          activeStep < steps.length - 1 &&
          <Button fullWidth variant="outlined" onClick={nextStep}>Next</Button>
        }
        {
          activeStep === steps.length -1 &&
          <Button fullWidth variant="outlined" onClick={onFinish}>Finish</Button>
        }
      </div>
    </div>
  </div>
}