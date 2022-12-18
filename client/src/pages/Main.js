import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItemAsync,
  addItemAsync,
  showItem,
} from '../redux/feature/slice';

export default function Main() {
  const item = useSelector(showItem);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    userId: 69,
    id: 69,
    title: '',
    completed: false,
  });

  const addNewItem = () => {
    dispatch(addItemAsync(newItem));
  };

  return (
    <>
      <div className="link">
        <Link to="/">Main</Link>
        <h1>item</h1>
        <h2>item list</h2>
        <input
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        />
        <button onClick={addNewItem}>Add new item</button>
        {item.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
        <button onClick={() => dispatch(deleteItemAsync('5'))}>
          Delete Item
        </button>
      </div>
    </>
  );
}
