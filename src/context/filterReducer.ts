import { DataState, Pay } from "../interfaces/filterContextvalue";

type appAction =
    | {type: 'completePay', payload: Pay}
    | {type: 'filteredPay', payload: { id: string }}
    | {type: 'filteredPayDay', payload: { date: string }}
    | {type: 'filteredPayWeek', payload: { date: Date[] }}
    | {type: 'filteredPayMonth', payload: { month: number }}
    | {type: 'completePayItems', payload: Pay[]}
    | {type: 'filteredByDatafono', payload:  { data: boolean }}
    | {type: 'filteredByLink', payload:  { data: boolean }}
    
export const filterReducer = ( state:DataState, action:appAction ):DataState => {
    switch (action.type) {
        case 'completePay':
          return {
            ...state,
            dataPay: [ ...state.dataPay, action.payload ]
          }
        case 'filteredPay':
          return {
              ...state,
              dataPay: state.dataPay.filter(item => item.transactionId === action.payload.id ),
              filtered: state.filtered = true
          }
        case 'filteredPayDay':
          return {
              ...state,
              dataPay: state.dataPay.filter(item => item.date === action.payload.date),
              filtered: state.filtered = true
          }
        case 'filteredPayWeek':
          return {
              ...state,
              dataPay: state.dataPay.filter(item => new Date(item.date) > new Date(action.payload.date[0].toLocaleString()) 
              && new Date(item.date) < new Date(action.payload.date[1].toLocaleString())),
              filtered: state.filtered = true
          }
        case 'filteredPayMonth':
          return {
              ...state,
              dataPay: state.dataPay.filter(item => Number(new Date(item.date).getMonth()) === Number(action.payload.month) ),
              filtered: state.filtered = true
          }
        case 'filteredByDatafono':
          return {
              ...state,
              dataPay: state.dataPay.filter(item => item.isCobroDatafono != action.payload.data ),
              filtered: state.filtered = true
          }
        case 'filteredByLink':
          return {
              ...state,
              dataPay: state.dataPay.filter(item => item.isCobroLink != action.payload.data ),
              filtered: state.filtered = true
          }
        case 'completePayItems':
          return {
              ...state,
              dataPay: action.payload,
              filtered: state.filtered = false
          }
        default:
          return state
      }
} 