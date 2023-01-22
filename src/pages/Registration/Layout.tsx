import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { User } from "../../models/user";
import { FifthStep } from "./Fifth step/FifthStep";
import { FirstStep } from "./First step/FirstStep";
import { ForthStep } from "./Forth step/ForthStep";
import './Layout.css';
import { SecondStep } from "./Second step/SecondStep";
import { ThirdStep } from "./Third step/ThirdStep";

interface StepItem {
  label: string;
  index: number;
}

const steps: StepItem[] = [
  { label: 'Personal', index: 0 },
  { label: 'Phone', index: 1 },
  { label: 'Verification', index: 2 },
  { label: 'Photo', index: 3 },
  { label: 'Summary', index: 4 },
];

export const Layout = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const [firstStepValid, setFirstStepValid] = useState(false);
  const [secondStepValid, setSecondStepValid] = useState(false);

  const user: User = {
    firstName: '',
    lastName: '',
    gender: 'M',
    birthday: new Date(),
    phone: '',
    photo: null
  }
  const [userInfo, setUserInfo] = useState(user);

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
      {activeStep === 0 && <FirstStep user={userInfo}
        stepValid={setFirstStepValid}
        userInfoChange={(updatedUserInfo: Partial<User>) => {          
          setUserInfo({ ...userInfo, ...updatedUserInfo });
        }}/>}
      {activeStep === 1 && <SecondStep user={userInfo}
        stepValid={setSecondStepValid}
        phoneChanged={(phone) => {setUserInfo({ ...userInfo, phone })}}
      />}
      {activeStep === 2 && <ThirdStep/>}
      { activeStep === 3 && <ForthStep user={userInfo}
        photoChange={(photo) => {
          setUserInfo({ ...userInfo, photo })
        }}/>
      }
      {activeStep === 4 && <FifthStep user={userInfo}/>}
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
          <Button fullWidth
            variant="outlined"
            disabled={(activeStep === 0 && !firstStepValid) || (activeStep === 1  && !secondStepValid)}
            onClick={nextStep}>
              Next
            </Button>
        }
        {
          activeStep === steps.length -1 &&
          <Button fullWidth
            variant="outlined"
            onClick={onFinish}>
              Finish
          </Button>
        }
      </div>
    </div>
  </div>
}