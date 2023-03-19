import { Box, Button, Text } from 'native-base';
import React, { useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';


const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Box
                minHeight={'100%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <DatePicker
                    value={date}
                    mode="date"
                    display="spinner"
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || date;
                        setDate(currentDate);
                    }}
                />

            </Box>
        </>
    );
};

export default DatePicker;
