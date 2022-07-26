import { useState } from "react";
import { useRecoilState } from 'recoil';
import { todoListState } from './atom';
import { TodoListStats } from './TodoListStats';

let id = 1;
const getId = () => {
    return id++;
}

const TodoList = () => {
    const [title, setTitle] = useState('');
    // atomから初期値を読み込む。useRecoilStateは更新も可能。
    const [todoList, setTodoList] = useRecoilState(todoListState); // 分割代入？更新前と更新後を保持するために同じものが入る？

    // 推測：ボタン押されたらtextの値がeに入る
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const addItem = () => {
        setTodoList((oldTodoList) => [ // todoListStateの中身が入る？
            ...oldTodoList, // スプレッド構文・・・配列/オブジェクト を展開する構文
            // TODO: この中の動きがわからない。oldTodoListの全要素に対して適用されてidとか振ってる？
            {
                id: getId(),
                title: title,
                isComplete: false,
            },
        ]);
        setTitle('')
    };

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>

            {/*Todoリストの数を表示するコンポーネントを読み込み*/}
            <TodoListStats />

            <div style={{ margin: '1em 0' }}>
                <input type="text" value={title} onChange={handleChange} />
                <button onClick={addItem}>Add</button>
            </div>
            {/* atomから読み込んだ初期値を展開しながら描画 */}
            {todoList.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </>
    );
}

export default TodoList;
