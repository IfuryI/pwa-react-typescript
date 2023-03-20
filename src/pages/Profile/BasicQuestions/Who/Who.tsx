import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import Alone from './Alone'
import Couple from './Couple'
import Family from './Family'
import Friends from './Friends'

const Who = (): JSX.Element => {
  const { questions } = useBasicQuestions()
  const parts = {
    Alone: <Alone />,
    Couple: <Couple />,
    Family: <Family />,
    Friends: <Friends />
  }
  return (
    <>
      { questions.who === undefined ? <Alone /> : parts[questions.who] }
    </>
  )
}
export default Who
