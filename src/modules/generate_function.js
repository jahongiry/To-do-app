const generate = ({ description }) => `
  <div class="todo-item">
  <div class="inner-box">
  <form class="check-form" action="#">
    <input type="checkbox" class="checkbox" name="checkbox" value="false">
    <input class="task-name" type="text" value="${description}">
  </form>
</div>
<ion-icon class="dots" name="ellipsis-vertical-outline"></ion-icon>
<ion-icon class="trashbin" name="trash-outline"></ion-icon>
</div>
  `;

export default generate;