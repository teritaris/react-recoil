import { useRecoilState} from 'recoil';
import { todoListFilterState } from './atom';

export const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState)

    const handleChange = (e) => {
        setFilter(e.target.value)
    };

    return (
        <>
            <select value={filter} onChange={handleChange}>
                <option value="すべて">すべて</option>
                <option value="完了">完了</option>
                <option value="未完了">未完了</option>
            </select>
        </>
    );
}
