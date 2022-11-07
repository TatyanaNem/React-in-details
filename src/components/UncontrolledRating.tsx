import React, {useState} from 'react';
import StarYellow from '../star-yellow.svg';
import StarWhite from '../star-white.svg';

type RatingPropsType = {
}

type StarType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

function UncontrolledRating(props: RatingPropsType) {
    let [value, setValue] = useState(4)

    return (
        <ul style={{width: '200px', margin: '20px auto', padding: '0', boxSizing: 'border-box'}}>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </ul>
    )
}

function Star(props: StarType) {
    return <span onClick={() => props.setValue(props.value)}>{props.selected ? <img style={{width: '25px', height: '25px'}} src={StarYellow} alt='yellow star'/> : <img style={{width: '25px', height: '25px'}} src={StarWhite} alt='white star'/>}</span>
}

export default UncontrolledRating;