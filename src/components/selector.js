// atomの値を取得できるselector()
import {selector} from "recoil";
import { todoListState } from './atom';

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
