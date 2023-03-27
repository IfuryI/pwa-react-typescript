import { Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { type User } from 'models'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddPerson from 'src/components/Modals/AddPerson/AddPerson'
import PersonCard from 'src/components/PersonCard/PersonCard'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import { type WhoCouple } from 'src/models/questionnaireBasic'
import { ReactComponent as SwitchIcon } from '../../../../assets/icons/switch.svg'
import styles from './Who.module.scss'

const Couple: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const { setActive } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const [open, setOpen] = useState(false)

  const handleOpen = (): void => { setOpen(true) }
  const handleClose = (): void => { setOpen(false) }
  const addPerson = (person: string | User): void => {
    setQuestions({
      ...questions,
      whoContains: { ...questions.whoContains, partner: person }
    })
  }
  const handleDelete = (index: number): void => {
    setQuestions({
      ...questions,
      whoContains: { ...questions.whoContains, partner: undefined }
    })
  }

  return (
    <Box className={styles.who}>
      <Box className={styles.who__head}>
        <Typography variant='h1'>Couple</Typography>
        <IconButton onClick={() => {
          setQuestions({ ...questions, who: undefined, whoContains: undefined })
        }}><SwitchIcon /></IconButton>
      </Box>
      <Box className={styles.who__input}>
        <Typography variant='h2'>Type</Typography>
        <ToggleButtonGroup
          size='small'
          fullWidth
          color='primary'
          value={(questions.whoContains as WhoCouple)?.kind}
          exclusive
          onChange={(e, value) => {
            setQuestions({ ...questions, whoContains: { ...questions.whoContains, kind: value } })
          }}>
          <ToggleButton value='MF'>MF</ToggleButton>
          <ToggleButton value='MM'>MM</ToggleButton>
          <ToggleButton value='FF'>FF</ToggleButton>
          <ToggleButton value='other'>other</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.who__add}>
        <Typography variant='body2'>If your partner have an account you can create a group</Typography>
        <Button variant='outlined' onClick={handleOpen}>Add partner</Button>
      </Box>
      <Box className={styles.who__persons}>
        {(questions.whoContains as WhoCouple)?.partner !== undefined &&
          <PersonCard person={(questions.whoContains as WhoCouple).partner} waiting index={0} handleDelete={handleDelete} />}
      </Box>
      <Box className={styles.who__nav}>
        <Button
          className={styles.who__navButton}
          variant='contained'
          onClick={() => {
            navigate('/profile/questionnaire-basic-info/pets')
          }}>Next</Button>
      </Box>
      <AddPerson open={open} handleClose={handleClose} who='partner' addPerson={addPerson} />
    </Box>
  )
}
export default Couple
