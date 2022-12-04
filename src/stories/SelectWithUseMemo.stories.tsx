import React, {ChangeEvent, useMemo, useState} from 'react';
import Select, {ItemType, SelectPropsType} from '../components/Select';

export default {
    title: 'SelectWithMemo',
    component: Select
}

type CityType = ItemType & {
    countryId: number
    population: number
}

type ExamplePropsType = {
    value: number
    items: CityType[]
    onChange: () => void
}

const cities: CityType[] = [
    {title: 'Minsk', value: 1, countryId: 1, population: 1_996_553},
    {title: 'Brest', value: 2, countryId: 1, population: 340_723},
    {title: 'Moscow', value: 3, countryId: 2, population: 12_635_466},
    {title: 'Saint-Petersburg', value: 4, countryId: 2, population: 5_377_503},
    {title: 'Grodno', value: 5, countryId: 1, population: 357_493},
    {title: 'Kiev', value: 6, countryId: 3, population: 2_950_702},
    {title: 'Dnepr', value: 7, countryId: 3, population: 984_473},
    {title: 'Lvov', value: 8, countryId: 3, population: 728_545},
    {title: 'Voronezh', value: 9, countryId: 2, population: 1_050_602},
    {title: 'Krasnodar', value: 10, countryId: 2, population: 1_187_771},
    {title: 'Simferopol', value: 11, countryId: 2, population: 340_540},
    {title: 'Sochi', value: 12, countryId: 2, population: 466_078}
]

const Example1 = () => {
    const [value, setValue] = useState(1)
    console.log('Example1 rendering')
    const citiesByName = useMemo(() => cities.filter(el => el.title.indexOf('M') === 0), [cities])
    return <Select items={citiesByName} value={value} onChange={setValue}/>
}

const Example2 = () => {
    const [value, setValue] = useState(1)
    console.log('Example2 rendering')
    const citiesByCountry = useMemo(() => cities.filter(el => el.countryId === 1), [cities])
    return <Select items={citiesByCountry} value={value} onChange={setValue}/>
}

const Example3 = () => {
    const [value, setValue] = useState(1)
    console.log('Example3 rendering')
    const citiesByPopulation = useMemo(() => cities.filter(el => el.population >= 1_000_000), [cities])
    return <Select items={citiesByPopulation} value={value} onChange={setValue}/>
}

const NewSelect = React.memo(Example1)
const NewSelect2 = React.memo(Example2)
const NewSelect3 = React.memo(Example3)

export const SelectWithMemo = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div style={{display: 'flex'}}>
            <button onClick={() => setCounter(counter+1)}>counter+</button>{counter}
            <NewSelect />
            <NewSelect2 />
            <NewSelect3 />
        </div>
    )
}