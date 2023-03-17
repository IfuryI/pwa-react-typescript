import { useState } from 'react'
import { type ProgressSliderProps } from './ProgressSliderItem/ProgressSliderItem'

interface Props {
  items: ProgressSliderProps[]
}

// any type
const useProgressSlider: any = (props: Props) => {
  const [items, setItems] = useState<ProgressSliderProps[]>(props.items)

  const setActive: any = (active: string) => {
    setItems(
      items.map((item) =>
        item.to === active ? { ...item, state: 'Active' } : item.state === 'Active' || item.state === 'Inactive' ? { ...item, state: 'Inactive' } : { ...item, state: 'Disabled' }
      )
    )
  }

  const setPercent: any = (percent: number, to: string) => {
    setItems(
      items.map((item) =>
        item.to === to ? { ...item, progress: percent !== null ? percent : item.progress } : { ...item }
      )
    )
  }
  return [items, setPercent, setActive]
}
export default useProgressSlider
