import React, {useMemo, useState} from 'react';

export default {
    title: 'React.memo'
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS rendering')
    return <div>
        {props.users.map((el, i) => <div key={i}>{el}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('EXAMPLE1 rendering')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUsers = () => setUsers([...users, 'Sveta' + new Date().getTime()])
    const newUsers = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users])

    return <>
        <button onClick={addUsers}>add user</button>
        <button onClick={() => setCounter(counter + 1)} style={{marginRight: '10px'}}>counter</button>
        {counter}
        <Users users={newUsers}/>
    </>
}