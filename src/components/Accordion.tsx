import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    onClick: () => void
    items: Array<ItemType>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div style={{width: '200px', margin: '20px auto', boxSizing: 'border-box'}}>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordionTitle ({title, onChange}: AccordionTitlePropsType) {
    return <h3 onChange={onChange}>{title}</h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((el,index) => <li key={index} onClick={() => props.onClick(el.value)}>{el.title}</li>)}
    </ul>
}

export default Accordion;