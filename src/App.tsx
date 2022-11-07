import React, {useState} from 'react';
import UncontrolledOnOff from './components/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating';
import {Rating, RatingValueType} from './components/Rating';
import Accordion from './components/Accordion';
import OnOff from './components/OnOff';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [onState, setState] = useState<boolean>(false)

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
            <Accordion
                title={'--- my children ---'}
                collapsed={collapsed}
                onClick={() => setCollapsed(!collapsed)}/>
        </div>
    );
}

export default App;