const generate = ({ description }) => `
  <div class="todo-item">
  <div class="inner-box">
  <form class="check-form" action="#">
    <input type="checkbox" class="checkbox" name="checkbox" value="false">
    <span class="mark"></span>
  </form>
  <p class="task-name">${description}</p>
</div>
<ion-icon name="ellipsis-vertical-outline"></ion-icon>
</div>
  `;
export default generate;