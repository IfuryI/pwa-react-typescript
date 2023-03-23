import { Box, IconButton } from '@mui/material'
import styles from './PetList.module.scss'
import { ReactComponent as CatSvg } from '../../assets/icons/pets/Cat.svg'
import { ReactComponent as DogSvg } from '../../assets/icons/pets/Dog.svg'
import { ReactComponent as FishSvg } from '../../assets/icons/pets/Fish.svg'
import { ReactComponent as BirdSvg } from '../../assets/icons/pets/Bird.svg'
import { ReactComponent as OtherSvg } from '../../assets/icons/pets/Other.svg'
import { type Pet } from 'models'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'

interface Props {
  pet: Pet
  deletePet: (type: string) => void
}
const PetList = (props: Props): JSX.Element => {
  const typeIcons = {
    cat: <CatSvg className={styles.petList__petIcon} />,
    dog: <DogSvg className={styles.petList__petIcon} />,
    fish: <FishSvg className={styles.petList__petIcon} />,
    bird: <BirdSvg className={styles.petList__petIcon} />,
    other: <OtherSvg className={styles.petList__petIcon} />
  }

  return (
    <Box className={styles.petList}>
      {[...Array(props.pet.count)].map((x, i) => (
        <Box key={i}>{typeIcons[props.pet.type]}</Box>
      ))}
      <IconButton onClick={() => { props.deletePet(props.pet.type) }}><RemoveCircleOutlineOutlinedIcon /></IconButton>
    </Box>
  )
}
export default PetList
