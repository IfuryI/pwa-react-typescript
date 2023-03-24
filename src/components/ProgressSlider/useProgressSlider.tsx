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
  completeStep: (step: string) => void
}

const useProgressSlider = (props: Props): ReturnType => {
  const [items, setItems] = useState<ProgressSliderProps[]>(props.items)

  const scrollToStep = (step: string): void => {
    const element = document.getElementById(step)
    if (element !== null) { element.scrollIntoView({ inline: 'center', behavior: 'smooth' }) }
  }

  const setActive = (step: string): void => {
    setItems(
      items.map((item) =>
        item.text === step
          ? { ...item, state: 'Active' }
          : item.state === 'Active' || item.state === 'Inactive'
            ? { ...item, state: 'Inactive' }
            : { ...item, state: 'Disabled' }
      )
    )
    scrollToStep(step)
  }

  const completeStep = (step: string): void => {
    const nextItem = items.find(i => i.text === step)?.to
    if (nextItem) {
      const newItems: ProgressSliderProps[] = items.map(i => {
        if (i.text === step) {
          return {
            ...i,
            progress: 100,
            state: 'Inactive'
          }
        }
        if (i.text === nextItem) {
          return {
            ...i,
            state: 'Active'
          }
        }
        return i
      })
      setItems(newItems)
      scrollToStep(nextItem)
    }
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
    if (element !== null) { element.scrollIntoView({ inline: 'center', behavior: 'smooth' }) }
  }
  return { items, setPercent, setActive, setPercentAndGo, completeStep } as const
}
export default useProgressSlider
