import React, {useState} from 'react';
import Select from '../components/Select';

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState(2)
    return <Select
        value={value}
        items={[
            {value: 1, title: 'Minsk'},
            {value: 2, title: 'Moscow'},
            {value: 3, title: 'Kiev'}
        ]}
        onChange={setValue}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select
        value={value}
        items={[
            {value: 1, title: 'Minsk'},
            {value: 2, title: 'Moscow'},
            {value: 3, title: 'Kiev'}
        ]}
        onChange={setValue}
    />
}