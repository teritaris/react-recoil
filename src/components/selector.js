// atomの値を取得できるselector()
import {selector} from "recoil";
import { todoListFilterState, todoListState } from './atom';

// Todoの数、完了数、未完了数を返す
export const todoListStatsState = selector({
    key: 'todoListStatsState', // 一意にする必要ある atomのkeyともかぶってはいけないかは不明
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length; // todoListState配列の要素数を取得
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length // 現在のリストからtrueを抽出した配列を作ってその長さを完了数とする
        const totalUncompletedNum = totalNum - totalCompletedNum;
        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
        }
    },
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState); // atomからfilterの状態を取得
        const list = get(todoListState); // atomからTodo項目を取得

        switch (filter) {
            case '完了':
                return list.filter((item) => item.isComplete); // 完了のやつだけの配列を返す
            case '未完了':
                return list.filter((item) => !item.isComplete); // 未完了のやつだけの配列を返す
            default:
                return list;
        }
    },
});
