import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div style={{width: '200px', margin: '20px auto', boxSizing: 'border-box'}}>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle ({title, onClick}: AccordionTitlePropsType) {
    return <h3 onClick={() => onClick()}>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;