import { useState } from "react";
import { useSetRecoilState} from 'recoil';
import { todoListState } from './atom';

let id = 1;
const getId = () => {
    return id++;
}

export const TodoItemCreator = () => {
    const [title, setTitle] = useState('');
    // atomから初期値を読み込む。useRecoilStateは更新も可能。
    const setTodoList = useSetRecoilState(todoListState);

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
        <div style={{ margin: '1em 0' }}>
            <input type="text" value={title} onChange={handleChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );

}
