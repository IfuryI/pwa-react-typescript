import { FC, createContext, ReactNode, ReactElement, useContext } from 'react';
import { RootStore } from '../stores/RootStore';

export const StoreContext = createContext<RootStore>({} as RootStore);

export type StoreComponent = FC<{
    children: ReactNode;
    store: RootStore;
}>;

export const StoreProvider: StoreComponent = ({ children, store }): ReactElement => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);