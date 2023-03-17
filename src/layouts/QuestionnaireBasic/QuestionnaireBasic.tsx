import { Outlet } from 'react-router-dom'
import ProgressSlider from 'src/components/ProgressSlider/ProgressSlider'
import useProgressSlider from 'src/components/ProgressSlider/useProgressSlider'

const QuestionnaireBasic: React.FunctionComponent = () => {
  const [items, setPercent, setActive] = useProgressSlider({
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

  return (
    <>
      <ProgressSlider items={items} setActive={setActive} />
      <Outlet context={{ setActive, setPercent }} />
    </>
  )
}
export default QuestionnaireBasic
