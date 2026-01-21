'use client'

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export interface ICursorState {
    variant: string;
    dimensions: Partial<DOMRect>
}

export interface ICursorContext {
    cursorState: ICursorState;
    setCursorState: Dispatch<SetStateAction<ICursorState>>;
    handleMouseEnter: (e: React.MouseEvent) => void;
    handleMouseLeave: () => void;
}

const initialState: ICursorState = {
    variant: 'default',
    dimensions: {},
}

export const CursorContext = createContext<ICursorContext>({
    cursorState: initialState,
    setCursorState: () => { },
    handleMouseEnter: () => { },
    handleMouseLeave: () => { },
})

interface CursorProviderProps {
    children: ReactNode; // Tentukan tipe 'children' di sini
}

export const CursorProvider = ({ children }: CursorProviderProps) => {
    const [cursorState, setCursorState] = useState<ICursorState>(initialState)

    const handleMouseEnter = (e: React.MouseEvent) => {
        const rect = (e.target as Element).getBoundingClientRect();
        setCursorState({
            variant: 'hovering',
            dimensions: rect
        });
    };

    const handleMouseLeave = () => {
        setCursorState({
            variant: 'default',
            dimensions: {} as DOMRect
        });
    };

    const value = { cursorState, setCursorState, handleMouseEnter, handleMouseLeave }

    return (
        <CursorContext.Provider value={value}>
            {children}
        </CursorContext.Provider>
    );
}