import { useContext, useState } from 'react';
import { FilterContext } from '../../context/filterContext';
import { getTime } from '../../helpers/getDay';
import { getWeekDates } from '../../helpers/getWeek';
import './filtro.scss'
import { BiX } from "react-icons/bi";

const Filtro = () => {
  const [isActive, setIsActive] = useState(false);

  const [isDatafono, setIsDatafono] = useState(false);
  const [ isLink, setIsLink] = useState(false);

  const { appState, 
          handleCompleteData, 
          handleFilterChangeDate, 
          handleFilterChangeDateWeek, 
          handleFilterChangeDateMonth,
          handleFilterChangeDatafono,
          handleFilterChangeLink } = useContext(FilterContext);

  const handleClick = () => { setIsActive(current => !current) };

  const handleClickDatafono = () => { setIsDatafono(current =>  !current) };
  const handleClickLink = () => { setIsLink(current =>  !current) };
  const handleClickAll = () => { 
    setIsDatafono(false)  
    setIsLink(false)
  };

  return (
    <div className='filterDate'>
      <ul>
        <li onClick={() => {
            if(appState.filtered === true) {
              handleCompleteData()
            }
            handleFilterChangeDate(getTime())
            }} >
            Hoy
        </li>
        <li onClick={() => {
            if(appState.filtered === true) {
              handleCompleteData()
            }
            let [start, end] = getWeekDates();
            handleFilterChangeDateWeek([start, end])}} >
          Esta semana
        </li>
        <li onClick={() => {
            if(appState.filtered === true) {
              handleCompleteData()
            }
            const currentMonth = new Date().getMonth();
            handleFilterChangeDateMonth(currentMonth)}} >
              Este mes
        </li>
      </ul>
      <div className="filterDate__btn">
        <button onClick={handleClick}>
            Filtrar
        </button>
        <div className={isActive ? 'modal active' : 'modal'}>
          <div className="modal__content">
            <div className="modal__content__title">
              <p>
                Filtrar
              </p>
              <BiX onClick={handleClick} />
            </div>
            <div className="modal__content__body">
              <ul>
                <li >
                  <input onChange={handleClickDatafono} checked={isDatafono} type="checkbox" value="datafono" name="datafono" id="datafono" />
                  <label htmlFor="datafono">Cobro por datafono</label>
                </li>
                <li>
                  <input onChange={handleClickLink} checked={isLink} type="checkbox" name="link" id="link" />
                  <label htmlFor="link">Cobro con link de pago</label>
                </li>
                <li>
                  <input onChange={handleClickAll} type="checkbox" name="todos" id="todos" />
                  <label htmlFor="todos">Ver todos</label>
                </li>
              </ul>
              <button onClick={(e) => {
                  if(isDatafono)  {
                    handleFilterChangeDatafono(isDatafono )
                  }
                  if(isLink) {
                    handleFilterChangeLink(isLink)
                  }
                  if(isDatafono == false && isLink == false) {
                    handleCompleteData()
                  }
                  }
                } 
                className='btn btn-active'>
                  Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Filtro
