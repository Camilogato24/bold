import { useContext } from 'react'
import { FilterContext } from '../context/filterContext'

export const useApp = () => {
  const { appState, 
          handleFilterChange, 
          handleCompleteData, 
          handleFilterChangeDate, 
          handleFilterChangeDateWeek
        } = useContext(FilterContext)
  
  const { dataPay } = appState;
  return {  appState, 
            handleFilterChange, 
            dataPay: dataPay, 
            handleCompleteData, 
            handleFilterChangeDate, 
            handleFilterChangeDateWeek }
}
