import { useRecoilState } from 'recoil';
import { todoListState } from './atom';

export const TodoItem = ({ item }) => {
    // getterとsetter？
    const [todoList, setTodoList] = useRecoilState(todoListState)

    // 完了/未完了 状態を切り替える
    const toggleItemCompletion = () => {
        const index = todoList.findIndex((listItem) => listItem.id === item.id);
        const newTodoList = [
            ...todoList.slice(0, index), // 対象より前の要素たち
            { ...item, isComplete: !item.isComplete }, // 対象の要素のisCompleteの現在状態をitemから拾ってT/F反転させる？
            ...todoList.slice(index + 1) // 対象より後の要素
        ];
        setTodoList(newTodoList);
    }

    // 項目を削除する
    const deleteItem = () => {
        console.log('delete');

        // findIndex関数で配列番号を取得
        const index = todoList.findIndex((listItem) => listItem.id === item.id);
        // 0から配列の番号までの要素と、配列の番号+1から最後の要素までを取得してdelete対象以外の要素を配列に詰め直す
        const newTodoList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList);
    };

    return (
        <div>
            <button onClick={toggleItemCompletion}>
                {item.isComplete ? '完' : '未'}
            </button>
            {item.title}
            <span onClick={deleteItem} style={{ cursor:'pointer' }}>
                X
            </span>
        </div>
    );
}
