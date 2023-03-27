import { Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { type User, type WhoFamily } from 'models'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import styles from './Who.module.scss'
import { ReactComponent as SwitchIcon } from '../../../../assets/icons/switch.svg'
import AddPerson from 'src/components/Modals/AddPerson/AddPerson'
import PersonCard from 'src/components/PersonCard/PersonCard'

const Family: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const { setActive } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const [open, setOpen] = useState(false)

  const handleOpen = (): void => { setOpen(true) }
  const handleClose = (): void => { setOpen(false) }
  const addPerson = (person: string | User): void => {
    if ((questions.whoContains as WhoFamily).people !== undefined) {
      setQuestions({
        ...questions,
        whoContains: {
          ...questions.whoContains,
          people: [
            ...(questions.whoContains as WhoFamily).people,
            person
          ]
        }
      })
    } else {
      setQuestions({
        ...questions,
        whoContains: {
          ...questions.whoContains,
          people: [
            person
          ]
        }
      })
    }
  }
  const handleDelete = (index: number): void => {
    if ((questions.whoContains as WhoFamily).people !== undefined) {
      setQuestions({
        ...questions,
        whoContains: {
          ...questions.whoContains,
          people: (questions.whoContains as WhoFamily).people.filter((s, i) => i !== index)
        }
      })
    }
  }

  return (
    <Box className={styles.who}>
      <Box className={styles.who__head}>
        <Typography variant='h1'>Family</Typography>
        <IconButton onClick={() => {
          setQuestions({ ...questions, who: undefined, whoContains: undefined })
        }}><SwitchIcon /></IconButton>
      </Box>
      <Box className={styles.who__input}>
        <Typography variant='h2'>How many adults</Typography>
        <ToggleButtonGroup
          size='small'
          fullWidth
          color='primary'
          value={(questions.whoContains as WhoFamily)?.adults}
          exclusive
          onChange={(e, value) => {
            setQuestions({
              ...questions,
              whoContains: {
                ...questions.whoContains,
                adults: value
              }
            })
          }}>
          <ToggleButton value='1'>1</ToggleButton>
          <ToggleButton value='2'>2</ToggleButton>
          <ToggleButton value='3'>3</ToggleButton>
          <ToggleButton value='4'>more</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.who__input}>
        <Typography variant='h2'>How many kids</Typography>
        <ToggleButtonGroup
          size='small'
          fullWidth
          color='primary'
          value={(questions.whoContains as WhoFamily)?.kids}
          exclusive
          onChange={(e, value) => {
            setQuestions({
              ...questions,
              whoContains: {
                ...questions.whoContains,
                kids: value
              }
            })
          }}>
          <ToggleButton value='0'>0</ToggleButton>
          <ToggleButton value='1'>1</ToggleButton>
          <ToggleButton value='2'>2</ToggleButton>
          <ToggleButton value='3'>3</ToggleButton>
          <ToggleButton value='4'>more</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.who__add}>
        <Typography variant='body2'>If your family members have an account you can create a group</Typography>
        <Button variant='outlined' onClick={handleOpen}>Add a family member</Button>
      </Box>
      <Box className={styles.who__persons}>
        {(questions.whoContains as WhoFamily)?.people !== undefined &&
          ((questions.whoContains as WhoFamily)?.people.length > 0 &&
            (questions.whoContains as WhoFamily).people.map((friend, index) =>
              <PersonCard key={index} person={friend} waiting index={index} handleDelete={handleDelete} />))}
      </Box>
      <Box className={styles.who__nav}>
        <Button
          className={styles.who__navButton}
          variant='contained'
          onClick={() => {
            navigate('/profile/questionnaire-basic-info/pets')
          }}>Next</Button>
      </Box>
      <AddPerson open={open} handleClose={handleClose} who='family member' addPerson={addPerson} />
    </Box>
  )
}
export default Family
