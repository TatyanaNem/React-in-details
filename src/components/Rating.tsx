import React from 'react';
import StarYellow from '../star-yellow.svg';
import StarWhite from '../star-white.svg';

type RatingPropsType = {
    value: RatingValueType
    onClick: (ratingValue: RatingValueType) => void
}

type StarType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export const Rating = (props: RatingPropsType) => {
    return <div style={{width: '200px', margin: '20px auto'}} >
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>
}

const Star = (props: StarType) => {
    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <img style={{width: '25px', height: '25px'}} src={StarYellow} alt='yellow star'/> : <img style={{width: '25px', height: '25px'}} src={StarWhite} alt='white star'/>}</span>
}