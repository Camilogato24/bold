import { createContext } from 'react'
import { DataState } from '../interfaces/filterContextvalue';

export type FilterContextValue = {
    appState: DataState
    handleFilterChange: ( id: string ) => void;
    handleCompleteData: () => void;
    handleFilterChangeDate: ( date: string ) => void;
    handleFilterChangeDateWeek: ( date: Date[] ) => void;
    handleFilterChangeDateMonth: ( month: number ) => void;
    handleFilterChangeDatafono: (data: string) => void;
    handleFilterChangeLink: ( data: string ) => void;
} 

export const FilterContext = createContext<FilterContextValue>({} as FilterContextValue );
