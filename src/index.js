import './styles/main.css';
import generate from './modules/generate_function.js';
import { focusing, bluring, trashBining } from './modules/focus_blur.js';

const input = document.querySelector('.add-input');
const submitTask = document.querySelector('.submit-task');
const tasksContainer = document.querySelector('.todo-lists');
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

  const checkMark = document.querySelectorAll('.checkbox');
  const checked = document.querySelectorAll('.checked');

  const checkmarking = (i) => {
    checkMark[i].style.display = 'none';
    checked[i].style.display = 'block';
    taskName[i].style.textDecoration = 'line-through';
    taskName[i].style.color = 'grey';
    taskName[i].style.textDecorationThickness = '7%';
    if (toDoArray[i].completed === true || toDoArray[i].completed === false) {
      toDoArray[i].completed = true;
    }
    localStorage.setItem('tasks', JSON.stringify(toDoArray));
  };

  for (let i = 0; i < checkMark.length; i += 1) {
    checkMark[i].addEventListener('click', () => {
      checkmarking(i);
    });
  }

  const checkmarking2 = (i) => {
    checkMark[i].style.display = 'block';
    checked[i].style.display = 'none';
    taskName[i].style.textDecoration = 'none';
    taskName[i].style.color = 'black';
    taskName[i].style.textDecorationThickness = '7%';
    if (toDoArray[i].completed === true || toDoArray[i].completed === false) {
      toDoArray[i].completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(toDoArray));
  };

  for (let i = 0; i < checked.length; i += 1) {
    checked[i].addEventListener('click', () => {
      checkmarking2(i);
    });
  }
});

const toDoItem = document.querySelectorAll('.todo-item');
const taskName = document.querySelectorAll('.task-name');
const trashBin = document.querySelectorAll('.trashbin');
const dots = document.querySelectorAll('.dots');
focusing(taskName, toDoItem, trashBin, dots);
bluring(taskName, toDoItem, trashBin, dots);
trashBining(taskName, toDoItem, trashBin, dots, toDoArray);

const checkMark = document.querySelectorAll('.checkbox');
const checked = document.querySelectorAll('.checked');
const clearingAll = document.querySelector('.clear-all');

const checkmarking = (i) => {
  checkMark[i].style.display = 'none';
  checked[i].style.display = 'block';
  taskName[i].style.textDecoration = 'line-through';
  taskName[i].style.color = 'grey';
  taskName[i].style.textDecorationThickness = '7%';
  if (toDoArray[i].completed === true || toDoArray[i].completed === false) {
    toDoArray[i].completed = true;
  }
  localStorage.setItem('tasks', JSON.stringify(toDoArray));
};

for (let i = 0; i < checkMark.length; i += 1) {
  checkMark[i].addEventListener('click', () => {
    checkmarking(i);
  });
}

const checkmarking2 = (i) => {
  checkMark[i].style.display = 'block';
  checked[i].style.display = 'none';
  taskName[i].style.textDecoration = 'none';
  taskName[i].style.color = 'black';
  taskName[i].style.textDecorationThickness = '7%';
  if (toDoArray[i].completed === true || toDoArray[i].completed === false) {
    toDoArray[i].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(toDoArray));
};

for (let i = 0; i < checked.length; i += 1) {
  checked[i].addEventListener('click', () => {
    checkmarking2(i);
  });
}

clearingAll.addEventListener('click', () => {
  const checking = JSON.parse(localStorage.getItem('tasks'));
  const filtering = (item) => {
    let checkedItem = 0;
    if (item.completed === false) {
      checkedItem = item;
    }
    return checkedItem;
  };
  const result = checking.filter(filtering);
  toDoArray = result;
  for (let n = 0; n < toDoArray.length; n += 1) {
    toDoArray[n].index = n;
  }
  localStorage.setItem('tasks', JSON.stringify(toDoArray));
  window.location.reload();
});
