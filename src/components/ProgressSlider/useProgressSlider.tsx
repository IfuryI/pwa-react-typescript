import { useEffect, useState } from 'react'
import { type ProgressSliderProps } from './ProgressSliderItem/ProgressSliderItem'

interface Props {
  items: ProgressSliderProps[]
  active: string
}
// any type
const useProgressSlider: any = (props: Props) => {
  const [items, setItems] = useState<ProgressSliderProps[]>(props.items)
  useEffect(() => {
    setItems(
      items.map((item) =>
        item.to === props.active ? { ...item, state: 'Active' } : item.state === 'Active' || item.state === 'Inactive' ? { ...item, state: 'Inactive' } : { ...item, state: 'Disabled' }
      )
    )
  }, [props.active])

  const setPercent = (percent: number) => {
    setItems(
      items.map((item) =>
        item.to === props.active ? { ...item, progress : percent || item.progress } : { ...item }
      )
    )
  }
  
  return [items, setPercent]
}
export default useProgressSlider
