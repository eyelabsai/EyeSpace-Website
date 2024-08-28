import { createContext } from "react";

export const ThemeContext = createContext(false);
export const ThemeDispatchContext = createContext(() => null);

export function themeReducer(value, action){
    switch(action.type){
        case 'toggle': return !value
        default: {
            throw Error("unknown action")
        }
    }
    
}