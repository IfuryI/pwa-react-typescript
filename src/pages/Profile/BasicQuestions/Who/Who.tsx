import { useEffect } from 'react'
import { useActive } from 'src/components/ProgressSlider/ProgressSlider'
import { useBasicQuestions } from 'src/layouts/QuestionnaireBasic/QuestionnaireBasic'
import Alone from './Alone'
import Couple from './Couple'
import Family from './Family'
import Friends from './Friends'

const Who = (): JSX.Element => {
  const { questions } = useBasicQuestions()
  const { setActive } = useActive()
  const parts = {
    Alone: <Alone />,
    Couple: <Couple />,
    Family: <Family />,
    Friends: <Friends />
  }
  useEffect(() => { setActive('who') }, [])
  return (
    <>
      { questions.who === undefined ? <Alone /> : parts[questions.who] }
    </>
  )
}
export default Who
