import { Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import styles from './Who.module.scss'
import { ReactComponent as SwitchIcon } from '../../../../assets/icons/switch.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import { type User, type WhoFriends } from 'models'
import PersonCard from 'src/components/PersonCard/PersonCard'
import AddPerson from 'src/components/Modals/AddPerson/AddPerson'

const Friends: React.FunctionComponent = () => {
  const [friends, setFriends] = useState<WhoFriends>({ people: [] })
  const [completed, setCompleted] = useState<number>(1)
  const navigate = useNavigate()
  const { setActive, setPercent } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const [open, setOpen] = useState(false)
  const total: number = 3

  const handleOpen = (): void => { setOpen(true) }
  const handleClose = (): void => { setOpen(false) }
  const addPerson = (person: string | User): void => {
    if (friends.people !== undefined) {
      setFriends({ ...friends, people: [...friends.people, person] })
    } else {
      setFriends({ ...friends, people: [person] })
    }
  }
  const handleDelete = (index: number): void => {
    if (friends.people !== undefined) {
      setFriends({ ...friends, people: friends.people.filter((s, i) => i !== index) })
    }
  }

  useEffect(() => {
    questions.whoContains !== undefined && (
      setFriends(questions.whoContains as WhoFriends)
    )
  }, [])

  useEffect(() => {
    setQuestions({ ...questions, whoContains: friends })
    const isCount: number = friends?.count !== undefined && friends?.count > 0 ? 1 : 0
    const isFriends: number = friends?.people !== undefined && friends?.people.length > 0 ? 1 : 0
    setCompleted(1 + isCount + isFriends)
  }, [friends])

  useEffect(() => {
    setPercent(completed, total, 'who')
  }, [completed])

  return (
    <Box className={styles.who}>
      <Box className={styles.who__head}>
        <Typography variant='h1'>Friends</Typography>
        <IconButton onClick={() => {
          setPercent(0, 1, 'who')
          setQuestions({ ...questions, who: undefined, whoContains: undefined })
        }}><SwitchIcon /></IconButton>
      </Box>
      <Box className={styles.who__input}>
        <Typography variant='h2'>How many</Typography>
        <ToggleButtonGroup
          size='small'
          fullWidth
          color='primary'
          value={friends?.count}
          exclusive
          onChange={(e, value) => {
            setFriends({ ...friends, count: value })
          }}>
          <ToggleButton value='2'>2</ToggleButton>
          <ToggleButton value='3'>3</ToggleButton>
          <ToggleButton value='4'>4</ToggleButton>
          <ToggleButton value='5'>more</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.who__add}>
        <Typography variant="body2">If your friends have an account you can create a group</Typography>
        <Button variant='outlined' onClick={handleOpen}>Add friend</Button>
      </Box>
      <Box className={styles.who__persons}>
        {friends?.people !== undefined && (friends?.people.length > 0 && friends.people.map((friend, index) => <PersonCard key={index} person={friend} waiting index={index} handleDelete={handleDelete} />))}
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
      <AddPerson open={open} handleClose={handleClose} who='friend' addPerson={addPerson} />
    </Box>
  )
}
export default Friends
