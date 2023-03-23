import { useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import ProgressSlider from 'src/components/ProgressSlider/ProgressSlider'
import useProgressSlider from 'src/components/ProgressSlider/useProgressSlider'
import { type QuestionnaireBasicType } from 'src/models/questionnaireBasic'

const QuestionnaireBasic: React.FunctionComponent = () => {
  const { items, setPercent, setActive, setPercentAndGo } = useProgressSlider({
    items: [
      { text: 'who', progress: 0, to: 'who', state: 'Active' },
      { text: 'pets', progress: 0, to: 'pets' },
      { text: 'smoking', progress: 0, to: 'smoking' },
      { text: 'languages', progress: 0, to: 'languages' },
      { text: 'about', progress: 0, to: 'about' },
      { text: 'contacts', progress: 0, to: 'contacts' },
      { text: 'apartment', progress: 0, to: 'apartment' }
    ]
  })

  const [questions, setQuestions] = useState<QuestionnaireBasicType>({
    who: undefined,
    contacts: [],
    smokingWhat: [],
    languages: [],
    apartment: undefined
  })

  useEffect(() => {
    console.log(questions)
  }, [questions])

  return (
    <>
      <ProgressSlider items={items} setActive={setActive} />
      <Outlet context={{ setActive, setPercent, questions, setQuestions, setPercentAndGo }} />
    </>
  )
}
export default QuestionnaireBasic

interface ContextType {
  questions: QuestionnaireBasicType
  setQuestions: any
}

export const useBasicQuestions = (): ContextType => {
  return useOutletContext<ContextType>()
}
