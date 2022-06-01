import './styles/main.css';
import generate from './modules/generate_function.js';
import toDoObject from './modules/to_do_object.js';

const newArr = [];
toDoObject.map((item) => {
  newArr.splice(item.index, 0, item);
  return newArr;
});

const tasksContainer = document.querySelector('.todo-lists');
const todoLines = newArr.map((product) => generate(product)).join('');
tasksContainer.innerHTML = todoLines;
