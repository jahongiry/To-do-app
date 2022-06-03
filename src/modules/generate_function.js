const generate = ({ description }) => `
  <div class="todo-item">
  <div class="inner-box">
  <form class="check-form" action="#">
    <ion-icon class="checkbox" name="stop-outline"></ion-icon>
    <ion-icon class="checked" name="checkmark-outline"></ion-icon>
    <input class="task-name" type="text" value="${description}">
  </form>
</div>
<ion-icon class="dots" name="ellipsis-vertical-outline"></ion-icon>
<ion-icon class="trashbin" name="trash-outline"></ion-icon>
</div>
  `;

export default generate;
