import * as moment from 'moment';
import 'moment/min/moment-with-locales'


export const dateTime = () => {
    const date = moment(Date.now()).format('MMMM Do')
    return date
}