import { Box, Button, Checkbox, FormControlLabel, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import styles from '../BasicQuestions.module.scss'

const Smoking: React.FunctionComponent = () => {
  const { setActive, setPercent, setPercentAndGo } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const navigate = useNavigate()
  const options = ['cigarettes', 'vape', 'shisha', 'cigars', 'other']

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, option: string): void => {
    if (e.target.checked) {
      setQuestions({ ...questions, smokingWhat: questions.smokingWhat !== undefined ? [...questions.smokingWhat, option] : [option] })
    } else if (questions.smokingWhat !== undefined) {
      setQuestions({ ...questions, smokingWhat: questions.smokingWhat.filter((item) => (item !== option)) })
    }
  }

  useEffect(() => {
    const isSmoking: number = questions.smoker === undefined || questions.smoker === null ? 0 : 1
    const total: number = (questions.smoker === true) ? 2 : 1
    const isSmokingWhat: number = questions.smokingWhat?.length > 0 && questions.smoker === true ? 1 : 0
    setPercent(isSmoking + isSmokingWhat, total, 'smoking')
  }, [questions])

  return (
    <Box className={styles.question}>
      <Box className={styles.question__head}>
        <Typography className={styles.question__head_text} variant='h1'>Do you smoke?</Typography>
        <ToggleButtonGroup
          size='small'
          color='primary'
          value={questions.smoker}
          exclusive
          onChange={(e, value) => {
            setQuestions({ ...questions, smoker: value })
          }}>
          <ToggleButton value={false}>no</ToggleButton>
          <ToggleButton value={true}>yes</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.question__content}>
        {questions.smoker === true && (
          <>
            <Box className={styles.question__input}>
              <Typography variant='h2'>What do you like to smoke?</Typography>
              <Box className={styles.question__input_zeroGap}>
                {options.map((option, index) => (
                  <FormControlLabel key={index} control={ <Checkbox value='' checked={ questions.smokingWhat?.some(what => what === option) } onChange={(e) => { handleCheck(e, option) }}/> } label={option} />
                ))}
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Box className={styles.question__nav}>
        <Button variant='text'
          fullWidth
          onClick={() => {
            setQuestions({ ...questions, smoker: undefined, smokingWhat: [] })
            setPercentAndGo(0, 1, 'smoking', 'languages')
            navigate('/profile/questionnaire-basic-info/languages')
          }}>
          Skip
        </Button>
        <Button variant='contained'
          fullWidth
          onClick={() => {
            navigate('/profile/questionnaire-basic-info/languages')
            setActive('languages')
          }}>
          Next
        </Button>
      </Box>
    </Box>
  )
}
export default Smoking
