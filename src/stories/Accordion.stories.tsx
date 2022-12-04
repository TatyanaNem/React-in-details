import React, {useState} from 'react';
import Accordion from '../components/Accordion';
import UncontrolledAccordion from '../components/UncontrolledAccordion';
import {Rating} from '../components/Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => <Accordion title={'Users'} collapsed={true} onChange={callback} onClick={onClickCallback} items={[{title:'Dimych', value: 1}, {title: 'Valera', value: 2}, {title:'Artem', value: 3}, {title:'Viktor', value: 4}, {title:'Ignat', value: 5}]}/>
export const UncollapsedAccordion = () => <Accordion title={'Customers'} collapsed={false} onChange={callback} onClick={onClickCallback} items={[{title:'customer1', value: 1}, {title:'customer2', value: 2}, {title:'customer3', value: 3}, {title:'customer4', value: 4}]}/>
export const ChangingAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'My friends'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)} onClick={onClickCallback} items={[{title:'Dimych', value: 1}, {title: 'Valera', value: 2}, {title:'Artem', value: 3}, {title:'Viktor', value: 4}, {title:'Ignat', value: 5}]}/>
}
