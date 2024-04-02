import { observer } from 'mobx-react-lite';
import mobxStore from '../store/mobxStore';
import styles from './mobxPage.module.css';
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const MobxPage = observer(() => {
  return (
    <div className={styles.page}>
      <div>Count {mobxStore.counter}</div>
      <div>
        <button onClick={() => mobxStore.increment(2)}>increment</button>
        <button onClick={mobxStore.decrement}>decrement</button>
      </div>

      <br />
      <div>
        <button onClick={mobxStore.fetchArray}>FetchArray</button>
        <button onClick={mobxStore.clearArray}>clearArray</button>
      </div>

      {mobxStore.array.map((todo: ITodo) => {
        return <div>{todo.title}</div>;
      })}
    </div>
  );
});

export default MobxPage;
