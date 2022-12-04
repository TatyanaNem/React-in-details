import React, {useState} from 'react';
import {UncontrolledOnOff} from '../components/UncontrolledOnOff';
import {action} from '@storybook/addon-actions';
import {OnOff} from '../components/OnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off button clicked')

export const OnMode = () => <UncontrolledOnOff defaultOnMode={true} onChange={callback} />
export const OffMode = () => <UncontrolledOnOff defaultOnMode={false} onChange={callback} />