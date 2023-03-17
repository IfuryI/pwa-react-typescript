import { useState } from 'react'
import { type ProgressSliderProps } from './ProgressSliderItem/ProgressSliderItem'

interface Props {
  items: ProgressSliderProps[]
}

interface ReturnType {
  items: ProgressSliderProps[]
  setActive: (active: string) => void
  setPercent: (percent: number, total: number, to: string) => void
}

const useProgressSlider = (props: Props): ReturnType => {
  const [items, setItems] = useState<ProgressSliderProps[]>(props.items)

  const setActive = (active: string): void => {
    setItems(
      items.map((item) =>
        item.to === active ? { ...item, state: 'Active' } : item.state === 'Active' || item.state === 'Inactive' ? { ...item, state: 'Inactive' } : { ...item, state: 'Disabled' }
      )
    )
  }

  const setPercent = (progress: number, total: number, to: string): void => {
    setItems(
      items.map((item) =>
        item.to === to ? { ...item, progress: progress !== null ? 100 / total * progress : item.progress } : { ...item }
      )
    )
  }
  return { items, setPercent, setActive } as const
}
export default useProgressSlider
