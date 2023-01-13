import React from 'react';
import { Radio, Center, NativeBaseProvider } from 'native-base';

const Radio2 = () => {
    return (
        <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
            <Radio value="1" my={1}>
                First
            </Radio>
            <Radio value="2" my={1}>
                Second
            </Radio>
            <Radio value="3" my={1}>
                Third
            </Radio>
        </Radio.Group>
    )
};

export default Radio2;   