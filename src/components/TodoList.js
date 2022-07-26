import { useRecoilValue } from 'recoil';
import { todoListState } from './atom';
import { TodoListStats } from './TodoListStats';

function TodoList() {
    // atomから初期値を読み込む
    const todoList = useRecoilValue(todoListState);
    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>

            {/*Todoリストの数を表示するコンポーネントを読み込み*/}
            <TodoListStats />

            {/* atomから読み込んだ初期値を展開しながら描画 */}
            {todoList.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </>
    );
}

export default TodoList;
