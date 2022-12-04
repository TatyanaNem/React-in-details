import React, {useState} from 'react';
import {OnOff} from '../components/OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'OnOff',
    component: OnOff
};

const callback = action('on or off button clicked')

export const OnMode = () => <OnOff onState={true} setState={callback} />
export const OffMode = () => <OnOff onState={false} setState={callback} />
export const ModeChanging = () => {
    const [onState, setState] = useState(false)
    return <OnOff onState={onState} setState={setState}/>
}