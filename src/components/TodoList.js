import { useRecoilValue } from 'recoil';
import { todoListState } from './atom';
import { TodoListStats } from './TodoListStats';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';

const TodoList = () => {

    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>

            {/*Todoリストの数を表示するコンポーネントを読み込み*/}
            <TodoListStats />
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
