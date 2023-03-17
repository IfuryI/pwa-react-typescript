import { Button, Step, StepLabel, Stepper } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import { NewUser, type User } from '../../models/user'
import { FifthStep } from './Fifth step/FifthStep'
import { FirstStep } from './First step/FirstStep'
import { ForthStep } from './Forth-Step/ForthStep'
import styles from './Layout.module.scss'
import { SecondStep } from './Second step/SecondStep'
import { ThirdStep } from './Third step/ThirdStep'

interface StepItem {
  label: string
  index: number
}

const steps: StepItem[] = [
  { label: 'Personal', index: 0 },
  { label: 'Phone', index: 1 },
  { label: 'Verification', index: 2 },
  { label: 'Photo', index: 3 },
  { label: 'Summary', index: 4 }
]

export const Layout = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0)
  const [firstStepValid, setFirstStepValid] = useState(false)
  const [secondStepValid, setSecondStepValid] = useState(false)

  const user: NewUser = {
    firstName: undefined,
    lastName: undefined,
    gender: 'M',
    birthday: moment(new Date()).subtract({ years: 18}).toDate(),
    phone: undefined,
    photo: undefined,
    avatar: undefined
  }
  const [userInfo, setUserInfo] = useState(user)

  const nextStep = () => { setActiveStep(activeStep + 1) }

  const previousStep = () => { setActiveStep(activeStep - 1) }

  const onFinish = () => {
    alert('horaaay')
    setActiveStep(0)
  }

  const isUser = (user: NewUser): user is User => {
    return user.firstName !== undefined
      && user.lastName !== undefined
      && user.birthday !== undefined
      && user.gender !== undefined
  }

  return <div className={styles.registerationLayout}>
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => {
        const stepProps: { completed?: boolean } = {}
        return (
          <Step key={step.label} {...stepProps}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        )
      })}
    </Stepper>
    <div className={styles.layoutContent}>
      {activeStep === 0 && <FirstStep user={userInfo}
        stepValid={setFirstStepValid}
        userInfoChange={(updatedUserInfo: Partial<NewUser>) => {
          setUserInfo({ ...userInfo, ...updatedUserInfo })
        }}/>}
      {activeStep === 1 && <SecondStep user={userInfo}
        stepValid={setSecondStepValid}
        phoneChanged={(phone) => { setUserInfo({ ...userInfo, phone }) }}
      />}
      {activeStep === 2 && <ThirdStep/>}
      { activeStep === 3 && <ForthStep user={userInfo}
        photoChange={({ profilePhoto, avatarPhoto }: { profilePhoto: File, avatarPhoto: File }) => {
          setUserInfo({ ...userInfo, photo: profilePhoto, avatar: avatarPhoto })
        }}/>
      }
      {(activeStep === 4 && isUser(userInfo)) && <FifthStep
        user={userInfo}
        onEditStep={setActiveStep}/>}
    </div>
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonsСontainerСolumn}>
        {
          (activeStep === 1 || activeStep === 3) &&
          <Button fullWidth variant="outlined" onClick={nextStep}>Skip</Button>
        }
      </div>
      <div className={styles.buttonsСontainerСolumn}>
        {
          activeStep < steps.length - 1 &&
          <Button fullWidth
            variant="contained"
            disabled={(activeStep === 0 && !firstStepValid) || (activeStep === 1 && !secondStepValid)}
            onClick={nextStep}>
              Next
            </Button>
        }
        {
          activeStep === steps.length - 1 &&
          <Button fullWidth
            variant="contained"
            onClick={onFinish}>
              Finish
          </Button>
        }
      </div>
    </div>
  </div>
}
