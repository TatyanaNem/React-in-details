import React, {ChangeEvent, useState} from 'react';

type ControlledInputPropsType = {
    callback: (value: string) => void
}

const ControlledInput = (props: ControlledInputPropsType) => {
    const onClickButtonHandler = () => props.callback(value)
    const onChangeButtonHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    const [value, setValue] = useState('')

    return (
        <div>
            <input value={value} onChange={onChangeButtonHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default ControlledInput;