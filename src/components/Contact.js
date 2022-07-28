import { useSearchParams } from "react-router-dom";

// 検索対象の製品一覧
const products = [
    {
        id: 1,
        product_name: 'iPhone',
        price: 1000,
    },
    {
        id: 2,
        product_name: 'iPad',
        price: 500,
    },
    {
        id: 3,
        product_name: 'iPod',
        price: 40,
    },
    {
        id: 4,
        product_name: 'MacBook',
        price: 2000,
    },
];

// コンタクトコンポーネント
const Contact = () => {
    // URLにあるパラメータのgetterとsetter
    const [searchParams, setSearchParams] = useSearchParams();
    // const [searchParams] = useSearchParams();

    // searchParams.get([パラメータ名])で当該パラメータの値がとれる
    // パラメータ指定無しはエラー
    const paramsValue = searchParams.get('product_name') // パラメータ"product_name"の値を取得
    console.log(searchParams.get('product_name'));
    console.log(searchParams.get('mameshiba'));

    const searchProducts = () => {
        return products.filter((product) => { // 検索対象一覧から
            // パラメータ"product_name"の値と一致または空と一致するkey"product_name"の値があたらtrue
            return product.product_name.includes(
                searchParams.get('product_name') || ''
            );
        });
    };

    // input type textに値が入ったら発火
    const handleChange = (event) => {
        // textの値を取得
        const product_name = event.target.value;
        if (product_name) {
            // 値が空文字ではなかったらtextの値をURLパラメータにセット（検索欄ではない）
            setSearchParams({ product_name: product_name });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div>
            <h2>Contact</h2>
            <input type="text" onChange={handleChange} value={paramsValue} />
            <ul>
                {/*検索して描画*/}
                {searchProducts().map((product) => ( // 配列要素先頭から精査
                    <li key={product.id}>
                        {product.product_name}/{product.price} {/*製品名/価格で描画*/}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contact;
