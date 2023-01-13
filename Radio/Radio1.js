import React from 'react';
import { Radio, Center, NativeBaseProvider } from 'native-base';

const Radio = () => {
    const [value, setValue] = React.useState('one');
    return (
        <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number"
            value={value} onChange={nextValue => {
                setValue(nextValue);
            }}>
            <Radio shadow={2} value="one" my="2">
                One
            </Radio>
            <Radio shadow={2} value="two" my="2">
                Two
            </Radio>
        </Radio.Group>
        )
};

export default Radio;   