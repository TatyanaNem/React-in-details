import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css';

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    items: Array<ItemType>
    onChange: (value: any) => void
}

const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredItemValue)
    const itemClicked = (value: any) => props.onChange(value)
    const onclickItemHandler = (value: any) => {
        itemClicked(value)
        setActive(!active)
    }
    // const onKeyUpHandller = () => {
    //     for (let i = 0; i < props.items.length; i++) {
    //
    //     }
    // }

    return (
        <div
            className={s.select}
            onBlur={() => setActive(false)}
            tabIndex={-1}
        >
            <h3
                className={active ? (s.selectTitle + ' ' + s.selectTitleActive) : s.selectTitle}
                onClick={() => setActive(!active)}>
                {selectedItem && selectedItem.title}
            </h3>
            {active && <ul className={s.itemsList}>
                {props.items.map(el =>
                    <div
                        onMouseEnter={() => setHoveredItemValue(el.value)}
                        onClick={() => onclickItemHandler(el.value)}
                        key={el.value}
                        className={s.item + " " + (hoveredItem === el ?  s.selected : '')}>
                        {el.title}
                    </div>)}
            </ul>}

        </div>
    );
};

export default Select;