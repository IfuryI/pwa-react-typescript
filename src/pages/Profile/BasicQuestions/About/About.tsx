import { Box, Button, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import styles from '../BasicQuestions.module.scss'

const About: React.FunctionComponent = () => {
  const { setActive, setPercent, setPercentAndGo } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const navigate = useNavigate()

  useEffect(() => {
    questions.about !== '' ? setPercent(1, 1, 'about') : setPercent(0, 1, 'about')
  }, [questions])

  return (
    <Box className={styles.question}>
      <Box className={styles.question__head}>
        <Typography className={styles.question__head_text} variant='h1'>Something else you think will be helpfull?</Typography>
      </Box>
      <Box className={styles.question__content}>
        <TextField
          value={questions.about}
          onChange={(e) => { setQuestions({ ...questions, about: e.target.value }) }}
          hiddenLabel
          fullWidth
          multiline
          size='small'
          rows={21}
        />
      </Box>
      <Box className={styles.question__nav}>
        <Button variant='text'
          fullWidth
          onClick={() => {
            setQuestions({ ...questions, about: '' })
            setPercentAndGo(0, 1, 'about', 'contacts')
            navigate('/profile/questionnaire-basic-info/contacts')
          }}>
          Skip
        </Button>
        <Button variant='contained'
          fullWidth
          onClick={() => {
            navigate('/profile/questionnaire-basic-info/contacts')
            setActive('contacts')
          }}>
          Next
        </Button>
      </Box>
    </Box>
  )
}
export default About
