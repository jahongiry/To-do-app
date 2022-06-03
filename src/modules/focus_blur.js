export const focusing = (taskName, toDoItem, trashBin, dots) => {
  for (let i = 0; i < toDoItem.length; i += 1) {
    taskName[i].addEventListener('focus', () => {
      toDoItem[i].style.background = 'rgba(226, 226, 9, 0.555)';
      trashBin[i].style.display = 'block';
      dots[i].style.display = 'none';
    });
  }
};

export const bluring = (taskName, toDoItem, trashBin, dots) => {
  for (let i = 0; i < toDoItem.length; i += 1) {
    taskName[i].addEventListener('blur', () => {
      toDoItem[i].style.background = 'white';
      const delaying = () => {
        trashBin[i].style.display = 'none';
        dots[i].style.display = 'block';
      };
      setTimeout(delaying, 200);
    });
  }
};

export const trashBining = (taskName, toDoItem, trashBin, dots, toDoArray) => {
  for (let i = 0; i < trashBin.length; i += 1) {
    trashBin[i].addEventListener('click', () => {
      toDoArray.splice(i, 1);
      for (let n = 0; n < toDoArray.length; n += 1) {
        toDoArray[n].index = n;
      }
      localStorage.setItem('tasks', JSON.stringify(toDoArray));
      toDoItem[i].remove();
      if (toDoArray.length === 1) {
        toDoArray.splice(0, 1);
      }
    });
  }
};
