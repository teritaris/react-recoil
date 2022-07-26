// atomの値を取得できるselector()
import {selector} from "recoil";
import { todoListState } from './atom';

// Todoの数を返す
export const todoListStatsState = selector({
    key: 'todoListStatsState', // 一意にする必要ある atomのkeyともかぶってはいけないかは不明
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length; // todoListState配列の要素数を取得
        return totalNum;
    },
});
