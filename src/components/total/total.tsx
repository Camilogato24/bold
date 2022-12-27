import { cardname, cardTotal } from '../../constants/total-constants'
import { dateTime } from '../../helpers/date'
import './total.scss'
import { IoInformationCircleOutline } from "react-icons/io5";


const Total = () => {
  return (
    <div className="card">
        <div className="card__header">
            <span>
                { cardname }
            </span>
            <IoInformationCircleOutline>
            </IoInformationCircleOutline>
        </div>
        <div className="card__body">
            <span className='card__body__total'>
                { cardTotal }
            </span>
            <span className='card__body__time'>
                {dateTime()}
            </span>
        </div>
    </div>
  )
}

export default Total