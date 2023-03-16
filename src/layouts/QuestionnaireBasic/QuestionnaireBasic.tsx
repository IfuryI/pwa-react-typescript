import { Outlet } from 'react-router-dom'
import ProgressSlider from 'src/components/ProgressSlider/ProgressSlider'
import { type ProgressSliderProps } from 'src/components/ProgressSlider/ProgressSliderItem/ProgressSliderItem'

const QuestionnaireBasic: React.FunctionComponent = () => {
  const items: ProgressSliderProps[] = [
    { text: 'who', progress: 100, state: 'Inactive', to: 'who' },
    { text: 'pets', progress: 30, state: 'Active', to: 'pets' },
    { text: 'smoking', progress: 100, state: 'Inactive', to: 'smoking' },
    { text: 'languages', progress: 0, to: 'languages' },
    { text: 'about', progress: 0, to: 'about' },
    { text: 'contacts', progress: 0, to: 'contacts' },
    { text: 'apartment', progress: 0, to: 'apartment' }
  ]
  return (
    <>
      <ProgressSlider items={items} />
      <Outlet />
    </>
  )
}
export default QuestionnaireBasic
