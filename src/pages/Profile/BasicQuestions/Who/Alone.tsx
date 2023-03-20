import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import styles from './Who.module.scss'

const Alone: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const { setPercent, setPercentAndGo } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const total: number = 1
  return (
    <Box className={styles.AloneBox}>
      <Box className={styles.AloneBox__Content}>
        <Typography variant='h1'>Who’s searching</Typography>
        <Box className={styles.AloneBox__ButtonList}>
          <Button variant='contained'
            onClick={() => {
              setPercentAndGo(1, total, 'who', 'pets')
              setQuestions({ ...questions, who: 'Alone', whoContains: undefined })
              navigate('/profile/questionnaire-basic-info/pets')
            }}>
            Just me
          </Button>
          <Button variant='contained'
            onClick={() => {
              setPercent(1, 3, 'who')
              setQuestions({ ...questions, who: 'Couple' })
            }}>
            Couple
          </Button>
          <Button variant='contained'
            onClick={() => {
              setPercent(1, 3, 'who')
              setQuestions({ ...questions, who: 'Friends' })
            }}>
            Friends
          </Button>
          <Button variant='contained'
            onClick={() => {
              setPercent(1, 4, 'who')
              setQuestions({ ...questions, who: 'Family' })
            }}>
            Family
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default Alone
