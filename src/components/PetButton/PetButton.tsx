import { Button, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import styles from './PetButton.module.scss'

interface Props {
  onClick: () => void
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const ButtonPet = styled(Button)({
  minWidth: '0',
  padding: '.25rem .5rem'
})

const PlusIcon = styled(AddIcon)({
  height: '1rem',
  width: '1rem'
})

const PetButton = (props: Props): JSX.Element => {
  return (
    <ButtonPet variant='contained' disableElevation onClick={props.onClick}><PlusIcon /><props.icon className={styles.icon}/></ButtonPet>
  )
}
export default PetButton
