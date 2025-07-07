'use client'

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export interface ICursorState {
    variant: string;
    dimensions: Partial<DOMRect>
}

export interface ICursorContext {
    cursorState: ICursorState;
    setCursorState: Dispatch<SetStateAction<ICursorState>>
}

const initialState : ICursorState = {
    variant: 'default',
    dimensions: {},
}

export const CursorContext = createContext<ICursorContext>({
    cursorState: initialState,
    setCursorState: () => {},
})

interface CursorProviderProps {
    children: ReactNode; // Tentukan tipe 'children' di sini
}

export const CursorProvider = ({ children }: CursorProviderProps) => {
    const [cursorState, setCursorState] = useState<ICursorState>(initialState)

    const value = { cursorState, setCursorState }

    return (
        <CursorContext.Provider value={value}>
            {children}
        </CursorContext.Provider>
    );
}