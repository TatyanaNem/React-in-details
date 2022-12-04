import React, {useState} from 'react';
import {Rating, RatingValueType} from '../components/Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating
}

const callback = action('rating star clicked')

export const EmptyRating = () => <Rating value={0} onClick={callback} />
export const Rating1 = () => <Rating value={1} onClick={callback} />
export const Rating2 = () => <Rating value={2} onClick={callback} />
export const Rating3 = () => <Rating value={3} onClick={callback} />
export const Rating4 = () => <Rating value={4} onClick={callback} />
export const Rating5 = () => <Rating value={5} onClick={callback} />
export const ChangingRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating} />
}