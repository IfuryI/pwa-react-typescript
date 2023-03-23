import { useState } from 'react'
import { type SliderState, type ProgressSliderProps } from './ProgressSliderItem/ProgressSliderItem'

interface Props {
  items: ProgressSliderProps[]
}

interface ReturnType {
  items: ProgressSliderProps[]
  setActive: (active: string) => void
  setPercent: (percent: number, total: number, to: string) => void
  setPercentAndGo: (progress: number, total: number, to: string, active: string) => void
}

const useProgressSlider = (props: Props): ReturnType => {
  const [items, setItems] = useState<ProgressSliderProps[]>(props.items)

  const setActive = (active: string): void => {
    setItems(
      items.map((item) =>
        item.to === active ? { ...item, state: 'Active' } : item.state === 'Active' || item.state === 'Inactive' ? { ...item, state: 'Inactive' } : { ...item, state: 'Disabled' }
      )
    )
    const element = document.getElementById(active)
    element && element.scrollIntoView({ inline: 'center', behavior: 'smooth' })
  }

  const setPercent = (progress: number, total: number, to: string): void => {
    setItems(
      items.map((item) =>
        item.to === to ? { ...item, progress: progress !== null ? 100 / total * progress : item.progress } : { ...item }
      )
    )
  }

  const setPercentAndGo = (progress: number, total: number, to: string, active: string): void => {
    setItems(
      items.map((item) => {
        let state: SliderState, percent
        item.to === to && progress !== null ? percent = 100 / total * progress : percent = item.progress
        item.to === active ? state = 'Active' : item.state === 'Active' || item.state === 'Inactive' ? state = 'Inactive' : state = 'Disabled'
        return { ...item, state, progress: percent }
      }
      )
    )
    const element = document.getElementById(active)
    element && element.scrollIntoView({ inline: 'center', behavior: 'smooth' })
  }
  return { items, setPercent, setActive, setPercentAndGo } as const
}
export default useProgressSlider
