import { type FC, createContext, type ReactNode, type ReactElement, useContext } from 'react'
import { type RootStore } from '../stores/RootStore'
import PropTypes from 'prop-types'

export const StoreContext: React.Context<RootStore> = createContext<RootStore>({} as RootStore)

export type StoreComponent = FC<{
  children: ReactNode
  store: RootStore
}>

export const StoreProvider: StoreComponent = ({ children, store }): ReactElement => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.any
}

export const useStore = (): RootStore => useContext(StoreContext)
