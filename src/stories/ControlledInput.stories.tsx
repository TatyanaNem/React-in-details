import React, {ChangeEvent, useState} from 'react';
import ControlledInput from '../components/ControlledInput';
import {action} from '@storybook/addon-actions';

export default {
    title: 'ControlledInput',
    //component: ControlledInput
}

const callback = action('value added')

export const InputUnderControl = () => {
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)}/>
}

export const CheckboxUnderControl = () => {
    const [parentValue, setParentValue] = useState(true)
    return <input type='checkbox' onChange={(e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)}/>
}

export const SelectUnderControl = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    return <select value={parentValue} onChange={(e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>
    </select>
}