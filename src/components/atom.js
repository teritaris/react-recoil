import { atom } from 'recoil';


// コンポーネントで扱う初期値（グローバルで他コンポーネントからも参照できる？atom()の中）
export const todoListState = atom({
    key: 'todoListState', // 一意にする必要ある
    default: [
        {
            id: 0,
            title: 'メール送信',
            isComplete: false,
        },
        {
            id: 1,
            title: 'Slack確認',
            isComplete: false,
        },
        {
            id: 3,
            title: 'コーヒーを買う',
            isComplete: false,
        },
    ],
});
