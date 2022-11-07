import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div style={{width: '200px', margin: '20px auto', boxSizing: 'border-box'}}>
            <AccordionTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle ({title, onClick}: AccordionTitlePropsType) {
    return <h3 onClick={onClick}>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;