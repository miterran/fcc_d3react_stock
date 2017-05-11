import React from "react";
import moment from 'moment';

const DateRange = (props) => (
    <div>
        <div className='well well-sm'>Date Range: {moment(props.dateRange.dateFrom).format('MMM DD, YYYY')} - {moment(props.dateRange.dateTo).format('MMM DD, YYYY')}</div>
    </div>
);

export default DateRange;