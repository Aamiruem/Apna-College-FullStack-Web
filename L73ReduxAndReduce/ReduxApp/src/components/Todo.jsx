import {useSelector} from 'react-redux';

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <>
            <h2>Todos</h2>
        </>
    )
}
