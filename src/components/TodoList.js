import { useRecoilValue, useRecoilState } from 'recoil';
import { todoListFilterState } from './atom';
import { TodoListStats } from './TodoListStats';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';
import { filteredTodoListState } from './selector';

const TodoList = () => {

    const todoList = useRecoilValue(filteredTodoListState);
    const [filter, setFilter] = useRecoilState(todoListFilterState)

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>

            {/*Todoリストの数を表示するコンポーネントを読み込み*/}
            <TodoListStats />

            <select value={filter} onChange={handleChange}>
                <option value="すべて">すべて</option>
                <option value="完了">完了</option>
                <option value="未完了">未完了</option>
            </select>

            {/*Todo項目を追加するコンポーネントを読み込み*/}
            <TodoItemCreator />

            {/* atomから読み込んだ初期値を展開しながら描画 */}
            {/* divで囲われたtodoListStateの要素が描画される */}
            {todoList.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}

        </>
    );
}

export default TodoList;
