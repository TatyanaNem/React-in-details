import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledRating from '../components/UncontrolledRating';
import {RatingValueType} from '../components/Rating';

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const callback = action('rating star clicked')

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onClick={callback} />
export const Rating1 = () => <UncontrolledRating defaultValue={1} onClick={callback} />
export const Rating2 = () => <UncontrolledRating defaultValue={2} onClick={callback} />
export const Rating3 = () => <UncontrolledRating defaultValue={3} onClick={callback} />
export const Rating4 = () => <UncontrolledRating defaultValue={4} onClick={callback} />
export const Rating5 = () => <UncontrolledRating defaultValue={5} onClick={callback} />
export const ChangingRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <UncontrolledRating onClick={callback} />
}