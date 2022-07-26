# メモ
## 参考サイト
https://reffect.co.jp/react/react-recoil

## atom
- 複数のコンポーネントで共有することができるコンテナみたいなやつ。
- 必ず初期値を設定して一意となるkeyを設定する必要がある。

## selector
- atomの値を利用して別の処理を行う場合に利用する。
- 一意となるkeyを設定する必要がある。
- getプロパティとsetプロパティでatomの値を取得・更新することが可能。
- atomと異なり初期値の設定は行わない。

## useRecoilValue
atomで定義した値を取得する。

## useRecoilState
値の取得と更新が可能になる。
>ReactのuseState Hookと同じように値とsetter関数が戻されます。

## useSetRecoilState
更新だけしたい場合に使う。
>setter関数だけを利用したい場合にはuseSetRecoilState Hookを利用することもできます。
