import './styles/main.css';
import generate from './modules/generate_function.js';
import { focusing, bluring, trashBining } from './modules/focus_blur.js';

const input = document.querySelector('.add-input');
const submitTask = document.querySelector('.submit-task');
const tasksContainer = document.querySelector('.todo-lists');
// const trashCan = document.getElementsByName('trash-outline');
let toDoArray = [];

if (localStorage.getItem('tasks')) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  toDoArray = tasks;
}

const todoLines1 = toDoArray.map((product) => generate(product)).join('');
tasksContainer.innerHTML = todoLines1;

submitTask.addEventListener('click', () => {
  const objTemplate = {
    description: input.value,
    completed: false,
    index: toDoArray.length,
  };
  toDoArray.push(objTemplate);
  localStorage.setItem('tasks', JSON.stringify(toDoArray));
  const todoLines = toDoArray.map((product) => generate(product)).join('');
  tasksContainer.innerHTML = todoLines;

  input.value = '';
  const toDoItem = document.querySelectorAll('.todo-item');
  const taskName = document.querySelectorAll('.task-name');
  const trashBin = document.querySelectorAll('.trashbin');
  const dots = document.querySelectorAll('.dots');
  focusing(taskName, toDoItem, trashBin, dots);
  bluring(taskName, toDoItem, trashBin, dots);
  trashBining(taskName, toDoItem, trashBin, dots, toDoArray);
});

const toDoItem = document.querySelectorAll('.todo-item');
const taskName = document.querySelectorAll('.task-name');
const trashBin = document.querySelectorAll('.trashbin');
const dots = document.querySelectorAll('.dots');
focusing(taskName, toDoItem, trashBin, dots);
bluring(taskName, toDoItem, trashBin, dots);
trashBining(taskName, toDoItem, trashBin, dots, toDoArray);
