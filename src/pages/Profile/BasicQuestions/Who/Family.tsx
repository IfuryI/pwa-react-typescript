import { Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { type User, type WhoFamily } from 'models'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import styles from './Who.module.scss'
import { ReactComponent as SwitchIcon } from '../../../../assets/icons/switch.svg'
import AddPerson from 'src/components/Modals/AddPerson/AddPerson'
import PersonCard from 'src/components/PersonCard/PersonCard'

const Family: React.FunctionComponent = () => {
  const [family, setFamily] = useState<WhoFamily>({ people: [] })
  const [completed, setCompleted] = useState<number>(1)
  const navigate = useNavigate()
  const { setActive, setPercent } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const [open, setOpen] = useState(false)
  const total: number = 4

  const handleOpen = (): void => { setOpen(true) }
  const handleClose = (): void => { setOpen(false) }
  const addPerson = (person: string | User): void => {
    if (family.people !== undefined) {
      setFamily({ ...family, people: [...family.people, person] })
    } else {
      setFamily({ ...family, people: [person] })
    }
  }
  const handleDelete = (index: number): void => {
    if (family.people !== undefined) {
      setFamily({ ...family, people: family.people.filter((s, i) => i !== index) })
    }
  }

  useEffect(() => {
    questions.whoContains !== undefined && (
      setFamily(questions.whoContains as WhoFamily)
    )
  }, [])

  useEffect(() => {
    setQuestions({ ...questions, whoContains: family })
    const isKids: number = family?.kids !== undefined && family?.kids > 0 ? 1 : 0
    const isAdults: number = family?.adults !== undefined && family?.adults > 0 ? 1 : 0
    const isFamily: number = family?.people !== undefined && family?.people.length > 0 ? 1 : 0
    setCompleted(1 + isKids + isAdults + isFamily)
  }, [family])

  useEffect(() => {
    setPercent(completed, total, 'who')
  }, [completed])

  return (
    <Box className={styles.who}>
       <Box className={styles.who__head}>
        <Typography variant='h1'>Family</Typography>
        <IconButton onClick={() => {
          setPercent(0, 1, 'who')
          setQuestions({ ...questions, who: undefined, whoContains: undefined })
        }}><SwitchIcon /></IconButton>
      </Box>
      <Box className={styles.who__input}>
        <Typography variant='h2'>How many adults</Typography>
        <ToggleButtonGroup
          size='small'
          fullWidth
          color='primary'
          value={family?.adults}
          exclusive
          onChange={(e, value) => {
            setFamily({ ...family, adults: value })
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
          value={family?.kids}
          exclusive
          onChange={(e, value) => {
            setFamily({ ...family, kids: value })
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
        {family?.people !== undefined && (family?.people.length > 0 && family.people.map((friend, index) => <PersonCard key={index} person={friend} waiting index={index} handleDelete={handleDelete} />))}
      </Box>
      <Box className={styles.who__nav}>
        <Button
          className={styles.who__navButton}
          variant='contained'
          onClick={() => {
            navigate('/profile/questionnaire-basic-info/pets')
            setActive('pets')
          }}>Next</Button>
      </Box>
      <AddPerson open={open} handleClose={handleClose} who='family member' addPerson={addPerson} />
    </Box>
  )
}
export default Family
