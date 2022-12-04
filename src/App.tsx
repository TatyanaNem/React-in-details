import React, {useState} from 'react';
import {UncontrolledOnOff} from './components/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating';
import {Rating, RatingValueType} from './components/Rating';
import Accordion from './components/Accordion';
import {OnOff} from './components/OnOff';
import Select from './components/Select';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [onState, setState] = useState<boolean>(false)
    const items = [
        {title:'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title:'Artem', value: 3},
        {title:'Viktor', value: 4},
        {title:'Ignat', value: 5}
    ]

    function changeTitle (value: any) {
        console.log(value)
    }

    return (
        <div className="App">
                <UncontrolledOnOff onChange={() => setState(onState)}/>
            <div style={{display: 'flex', width: '200px', alignItems: 'center', margin: '0 auto'}}>
                <OnOff onState={onState} setState={setState}/>
                <span>{onState.toString()}</span>
            </div>
            <UncontrolledAccordion title={'--- my friends ---'}/>
            <UncontrolledRating />
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
            {/*<Accordion
                title={'--- my children ---'}
                collapsed={collapsed}
                onClick={() => setCollapsed(!collapsed)}/>*/}
        </div>
    );
}

export default App;