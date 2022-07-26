import { useRecoilValue } from 'recoil';
import { todoListStatsState } from "./selector";

export const TodoListStats = () => {
    // Todoの数を取得するメソッドを実行して値を取得
    const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(todoListStatsState);
    return (
        <ul>
            <li>Todoの登録数:{totalNum}</li>
            <li>完了数:{totalCompletedNum}</li>
            <li>未完了数:{totalUncompletedNum}</li>
        </ul>
    );
}
