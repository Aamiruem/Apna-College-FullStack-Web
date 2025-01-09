import {useSelector} from 'react-redux';

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <>
            <h3>Todos</h3>
        </>
    )
}
