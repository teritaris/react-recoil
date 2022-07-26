import { useRecoilValue } from 'recoil';
import { todoListState } from './atom';
import { todoListStatsState } from './selector'

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);
    const totalNum = useRecoilValue(todoListStatsState);
    console.log(todoList)
    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>

            <ul>
                <li>Todoの登録数:{totalNum}</li>
            </ul>

            {todoList.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </>
    )
}

export default TodoList;
