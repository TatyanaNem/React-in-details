import React, {useState} from 'react';

type OnOffPropsType = {
    defaultOnMode?: boolean
    onChange: (onState: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {
    let [onState, setState] = useState(props.defaultOnMode ? props.defaultOnMode : false)

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

    const onClicked = () => {
        setState(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setState(false)
        props.onChange(false)
    }

    return (<div style={{display: 'flex', alignItems: 'center', width: '200px', margin: '20px auto', boxSizing: 'border-box'}}>
            <button style={onStyle} onClick={onClicked}>ON</button>
            <button style={offStyle} onClick={offClicked}>OFF</button>
            <span style={indicatorStyle}></span>
        </div>
    )
}