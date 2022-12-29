import { useContext, useState } from 'react'
import { getTime } from '../../helpers/getDay'
import { getWeekDates } from '../../helpers/getWeek'
import './filtro.scss'
import { BiX } from "react-icons/bi"
import { categoryList } from './../../__mocks/dataCategory'
import { DataContext } from '../../context/dataProvider'
import { CategorysInterfaces, Pay } from '../../interfaces/filterContextvalue'

const Filtro = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => { setIsActive(current => !current) };
  const { data, setData } = useContext(DataContext);
  const [checkAll, setCheckAll] = useState<boolean>(false)
  const [ categories, setCategories ] = useState(categoryList)
  const [dataFilter, setDataFilter] = useState<Pay[]>(data);
  const [dataFilterDate, setDataFilterDate] = useState<Pay[]>(data);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [ifFilter, setIfFilter] = useState<boolean>(false);
  const [isActiveBtn, setIsActiveBtn] = useState<boolean[]>([false, false, false]);

  const handleCategoryAll = () => {
    const allCategory: CategorysInterfaces[] = categories.map((item) => ({
      ...item,
      state: false,
    }));
    setCategories(allCategory)
    setSelectedCategories([])
    setData(dataFilter);
    setCheckAll(true);
  }
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
      categories.map((categorie) => {
        if (categorie.value === category ) {
          categorie.state = false;
        }
       })
    } else {
      setSelectedCategories([...selectedCategories, category]);
      categories.map((categorie) => {
        if (categorie.value === category ) {
          categorie.state = true;
        }
       })
    }
    setCheckAll(false);
  };
  const handleFilterClick = () => {
    if(selectedCategories.length > 0) {
      const filteredData = dataFilter.filter((item) =>
        selectedCategories.includes(item.cobro)
      );
      setData(filteredData);
    } else {
      const filteredData = data.filter((item) =>
        selectedCategories.includes(item.cobro)
      );
      setData(filteredData);
    } 
  };
  const handleCompleteData = () => {
    setData(dataFilterDate)
  }
  const filterByDate = (time: string) => {
    setIsActiveBtn([false, false, false])
    setDataFilterDate(data)
    setIfFilter(true)
    setData(data.filter(item => item.date === time))
    setIsActiveBtn([true, false, false])
  }
  const filterByDateWeek = (date: Date[]) => {
    setIsActiveBtn([false, false, false])
    setDataFilterDate(data)
    setIfFilter(true)
    setData(data.filter(item => new Date(item.date) > new Date(date[0].toLocaleString()) 
    && new Date(item.date) < new Date(date[1].toLocaleString())))
    setIsActiveBtn([false, true, false])

  }
  const filterByDateMonth = (time: number) => {
    setIsActiveBtn([false, false, false])
    setDataFilterDate(data)
    setIfFilter(true)
    setData(data.filter(item => Number(new Date(item.date).getMonth()) === Number(time) ))
    setIsActiveBtn([false, false, true])

  }
   return (
    <div className='filterDate'>
      <ul>
        <li onClick={() => {
            if(ifFilter === true) {
              handleCompleteData()
            }
            filterByDate(getTime())
            }} 
            className={ `${ isActiveBtn[0] == true ? 'active' : '' }` }>
            Hoy
        </li>
        <li onClick={() => {
            if(ifFilter === true) {
              handleCompleteData()
            }
            const [start, end] = getWeekDates();
            filterByDateWeek([start, end])}} 
            className={ `${ isActiveBtn[1] == true ? 'active' : '' }` }>
          Esta semana
        </li>
        <li onClick={() => {
            if(ifFilter === true) {
              handleCompleteData()
            }
            const currentMonth = new Date().getMonth();
            filterByDateMonth(currentMonth)}}
            className={ `${ isActiveBtn[2] == true ? 'active' : '' }` }>
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
              <ul className="toppings-list">
                {categories.map(({ name, value, state }, index) => {
                  return (
                    <li key={index}>
                      <div className="toppings-list-item">
                        <div className="left-section">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={value}
                            checked={state}
                            onChange={() => handleCategoryChange(value)}
                          />
                          <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        </div>
                      </div>
                    </li>
                  );
                })}
                <li>
                  <div className="toppings-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-all`}
                        name={`all`}
                        value={`all`}
                        onChange={() => handleCategoryAll()}
                        checked={checkAll}
                      />
                      <label htmlFor={`custom-checkbox-all`}>{'ver todos'}</label>
                    </div>
                  </div>
                </li>
              </ul>
              <button  onClick={() => { handleFilterClick()}} 
                className={ `${ selectedCategories.length > 0 ? 'btn btn-active' : 'disabled btn btn-active' }` }>
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
