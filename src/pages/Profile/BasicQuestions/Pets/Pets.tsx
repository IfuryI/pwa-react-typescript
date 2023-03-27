import { Box, Button, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PetButton from 'src/components/Buttons/PetButton/PetButton'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import styles from '../BasicQuestions.module.scss'
import stylesPets from './Pets.module.scss'
import { ReactComponent as CatSvg } from '../../../../assets/icons/pets/Cat.svg'
import { ReactComponent as DogSvg } from '../../../../assets/icons/pets/Dog.svg'
import { ReactComponent as FishSvg } from '../../../../assets/icons/pets/Fish.svg'
import { ReactComponent as BirdSvg } from '../../../../assets/icons/pets/Bird.svg'
import { ReactComponent as OtherSvg } from '../../../../assets/icons/pets/Other.svg'
import { type Pet } from 'models'
import PetList from 'src/components/PetList/PetList'

const Pets: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const { setActive, setPercent, setPercentAndGo } = useActive()
  const { questions, setQuestions } = useBasicQuestions()
  const petTypes = [
    { type: 'cat', icon: CatSvg },
    { type: 'dog', icon: DogSvg },
    { type: 'fish', icon: FishSvg },
    { type: 'bird', icon: BirdSvg },
    { type: 'other', icon: OtherSvg }
  ]

  useEffect(() => {
    const isHavePets: number = questions.havePets === undefined || questions.havePets === null ? 0 : 1
    const total: number = (questions.havePets === true) ? 2 : 1
    const isPets: number = questions.pets?.some((pet: Pet) => (pet.count > 0)) === true && questions.havePets === true ? 1 : 0
    setPercent(isHavePets + isPets, total, 'pets')
  }, [questions])

  const addPet = (type: string): void => {
    if (questions.pets?.some((pet: Pet) => (pet.type === type)) === true) {
      setQuestions({
        ...questions,
        pets: questions.pets.map((pet) => ((pet.type === type && pet.count !== undefined)
          ? { ...pet, count: Number(pet.count) + 1 }
          : { ...pet }))
      })
    } else if (questions.pets !== undefined) {
      setQuestions({ ...questions, pets: [...questions.pets, { type, count: 1 }] })
    } else {
      setQuestions({ ...questions, pets: [{ type, count: 1 }] })
    }
  }

  const deletePet = (type: string): void => {
    if (questions.pets?.some((pet: Pet) => (pet.type === type)) === true) {
      setQuestions({ ...questions, pets: questions.pets.map((pet) => ((pet.type === type && pet.count !== undefined) ? { ...pet, count: pet.count - 1 } : { ...pet })) })
    }
  }

  return (
    <Box className={styles.question}>
      <Box className={styles.question__head}>
        <Typography className={styles.question__head_text} variant='h1'>Do you have pets?</Typography>
        <ToggleButtonGroup
          size='small'
          color='primary'
          value={questions.havePets}
          exclusive
          onChange={(e, value) => {
            setQuestions({ ...questions, havePets: value })
          }}>
          <ToggleButton value={false}>no</ToggleButton>
          <ToggleButton value={true}>yes</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.question__content}>
        {questions.havePets === true && (
          <><Box className={styles.question__input}>
            <Typography variant='h2'>What pets?</Typography>
            <Box className={stylesPets.petsButtons}>{petTypes.map((pet, i) => (
              <PetButton key={i} onClick={() => { addPet(pet.type) }} icon={pet.icon} />
            ))}
            </Box>
          </Box>
            <Box className={styles.question__input}>
              {(questions.pets !== undefined && questions.pets.length > 0) && questions.pets.map((pet, i) => (
                pet.count > 0 && <PetList key={i} pet={pet} deletePet={() => { deletePet(pet.type) }} />
              ))}
            </Box>
          </>
        )}

      </Box>
      <Box className={styles.question__nav}>
        <Button variant='text'
          fullWidth
          onClick={() => {
            setQuestions({ ...questions, havePets: undefined, pets: undefined })
            setPercentAndGo(0, 1, 'pets', 'smoking')
            navigate('/profile/questionnaire-basic-info/smoking')
          }}>
          Skip
        </Button>
        <Button variant='contained'
          fullWidth
          onClick={() => {
            navigate('/profile/questionnaire-basic-info/smoking')
            setActive('smoking')
          }}>
          Next
        </Button>
      </Box>
    </Box>
  )
}
export default Pets
