import React from 'react';

type OnOffPropsType = {
    onState: boolean
    setState: (onState: boolean) => void
}

function OnOff({onState, setState}: OnOffPropsType) {

    const onStyle = {
        display: 'inline-block',
        width: '40px',
        height: '20px',
        marginRight: '10px',
        border: '1px solid black',
        borderRadius: '4px',
        backgroundColor: onState === true ? 'green' : 'white'
    }

    const offStyle = {
        display: 'inline-block',
        width: '40px',
        height: '20px',
        marginRight: '10px',
        border: '1px solid black',
        borderRadius: '4px',
        backgroundColor: onState === false ? 'red' : 'white'
    }

    const indicatorStyle = {
        display: 'inline-block',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: onState === true ? 'green' : 'red'
    }

    return (<div style={{display: 'flex', alignItems: 'center', width: '200px', margin: '20px auto', boxSizing: 'border-box'}}>
            <button style={onStyle} onClick={() => setState(true)}>ON</button>
            <button style={offStyle} onClick={() => setState(false)}>OFF</button>
            <span style={indicatorStyle}></span>
        </div>
    )
}

export default OnOff;