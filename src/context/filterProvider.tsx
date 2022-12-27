import { useReducer } from 'react'
import { DataState } from '../interfaces/filterContextvalue'
import { filterProps } from '../interfaces/props'
import { FilterContext } from './filterContext'
import { filterReducer } from './filterReducer'
import { dataMock } from './../__mocks/dataPay'

const INITIAL_STATE:DataState = {
    filtered: false,
    dataPay: dataMock
}

export const FilterProvider = ({children}: filterProps) => {
    const [ appState, dispatch] = useReducer( filterReducer, INITIAL_STATE );

    const handleFilterChange = (id: string) => {
        dispatch({type: 'filteredPay', payload: { id } })
    }
    const handleCompleteData = () => {
        dispatch({type: 'completePayItems', payload: INITIAL_STATE.dataPay})
    }

    const handleFilterChangeDate = (date: string) => {
        dispatch({type: 'filteredPayDay', payload: { date } })
    }

    const handleFilterChangeDateWeek = (date: Date[]) => {
        dispatch({type: 'filteredPayWeek', payload: { date }})
    }

    const handleFilterChangeDateMonth = (month: number) => {
        dispatch({type: 'filteredPayMonth', payload: { month }})
    }

    const handleFilterChangeDatafono = (data: boolean) => {
        dispatch({type: 'filteredByDatafono', payload: { data} })
    }
    const handleFilterChangeLink = (data: boolean) => {
        dispatch({type: 'filteredByLink', payload: { data } })
    }

    return (
        <FilterContext.Provider value={ {handleCompleteData,  appState, handleFilterChange, handleFilterChangeDate, handleFilterChangeDateWeek, handleFilterChangeDateMonth, handleFilterChangeDatafono, handleFilterChangeLink } }>
            { children }
        </FilterContext.Provider>
    )
}