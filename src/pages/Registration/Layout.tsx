import { Button, Step, StepLabel, Stepper } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { type NewUser, type UserForm } from '../../models/user'
import { FifthStep } from './Fifth step/FifthStep'
import { FirstStep } from './First step/FirstStep'
import { ForthStep } from './Forth-Step/ForthStep'
import styles from './Layout.module.scss'
import { SecondStep } from './Second step/SecondStep'
import { ThirdStep } from './Third step/ThirdStep'
import { UserCreationLoader } from './UserCreationLoader/UserCreationLoader'
import { userApiService } from 'api-services'
import { mapUserFormToDto } from 'mapping-services'
import { useStore } from 'src/utils/StoreProvider'

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
  const { email, password } = useLocation().state
  const [userProgressVisible, setUserProgressVisible] = useState(false)
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    firstName: undefined,
    lastName: undefined,
    gender: 'M',
    birthday: moment(new Date()).subtract({ years: 18}).toDate(),
    phone: undefined,
    photo: undefined,
    avatar: undefined
  } as NewUser)

  const { userStore } = useStore()

  const [loadinMessage, setLoadinMessage] = useState('Creating your account')
  const nextStep = (): void => { setActiveStep(activeStep + 1) }

  const onFinish = (): void => {
    setUserProgressVisible(true)
    setLoadinMessage('Creating your account')
    const {
      firstName,
      lastName,
      gender,
      birthday,
      phone,
      photo,
      avatar
    } = userInfo

    if ((firstName == null) || (lastName == null) || (gender === undefined) || (birthday == null)) {
      throw new Error('User form is not filled!')
    }

    userApiService.createUser(mapUserFormToDto({
      email,
      password,
      firstName,
      lastName,
      gender,
      birthday,
      phone: phone ?? null,
      avatar: avatar ?? null,
      photo: photo ?? null
    })).then(
      (response) => {
        setLoadinMessage('Acquiring your token')
        // new request for activating user
        // we wait until backend guys fix that
        setTimeout(() => {
          userStore.setUser({
            email,
            password,
            firstName,
            lastName,
            gender,
            birthday,
            phone: phone ?? null,
            photo: photo ?? null,
            avatar: avatar ?? null
          })
          setUserProgressVisible(false)
          navigate('/profile')
        }, 2000)
      },
      (error) => {
        console.error(error)
        setUserProgressVisible(false)
      }
    )
  }

  const isUser = (user: NewUser): user is UserForm => {
    return user.firstName !== undefined &&
      user.lastName !== undefined &&
      user.birthday !== undefined &&
      user.gender !== undefined
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
        }} />}
      {activeStep === 1 && <SecondStep user={userInfo}
        stepValid={setSecondStepValid}
        phoneChanged={(phone) => { setUserInfo({ ...userInfo, phone }) }}
      />}
      {activeStep === 2 && <ThirdStep />}
      {activeStep === 3 && <ForthStep user={userInfo}
        photoChange={({ profilePhoto, avatarPhoto }) => {
          setUserInfo({ ...userInfo, photo: profilePhoto, avatar: avatarPhoto })
        }} />
      }
      {(activeStep === 4 && isUser(userInfo)) && <FifthStep
        user={userInfo}
        onEditStep={setActiveStep} />}
    </div>
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonsСontainerСolumn}>
        {
          (activeStep === 1 || activeStep === 3) &&
          <Button fullWidth variant='outlined' onClick={nextStep}>Skip</Button>
        }
      </div>
      <div className={styles.buttonsСontainerСolumn}>
        {
          activeStep < steps.length - 1 &&
          <Button fullWidth
            variant='contained'
            disabled={(activeStep === 0 && !firstStepValid) || (activeStep === 1 && !secondStepValid)}
            onClick={nextStep}>
            Next
          </Button>
        }
        {
          activeStep === steps.length - 1 &&
          <Button fullWidth
            variant='contained'
            onClick={onFinish}>
            Create Account
          </Button>
        }
      </div>
    </div>
    {userProgressVisible &&
      <UserCreationLoader message={loadinMessage}></UserCreationLoader>
    }
  </div>
}
