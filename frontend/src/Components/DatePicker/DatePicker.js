import 'date-fns';
import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
const DatePicker = (props) => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            
            value={props.value}
            onChange={props.onChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
