import todoController from '../Controllers/todoController';

class TodoView {
  // todoを画面に追加する
  appendTodo(todo) {
    const isDone = todo.isDone;
    if (isDone) {
      $('#todos-area').append(
        `<p class="checked"><input checked type="checkbox" class="todo-check" id=${
          todo.id
        } /><span>${todo.task}</span></p>`
      );
    } else {
      $('#todos-area').append(
        `<p class="unchecked"><input type="checkbox" class="todo-check" id=${
          todo.id
        } /><span>${todo.task}</span></p>`
      );
    }
    $('#remain').text(
      $('#todos-area input:checkbox').length -
        $('#todos-area input:checkbox:checked').length
    );
    $('.todo-check').on('click', e => {
      const clickedPoint = e.target;
      if (clickedPoint.id == todo.id) {
        todoController.updateTodo(e, todo);
      }
    });
  }

  renderTodo(todos) {
    $('#todos-area').empty();
    for (const todo of todos) {
      const isDone = todo.isDone;
      if (isDone) {
        $('#todos-area').append(
          `<p class="checked"><input checked type="checkbox" class="todo-check" id=${
            todo.id
          } /><span>${todo.task}</span></p>`
        );
      } else {
        $('#todos-area').append(
          `<p class="unchecked"><input type="checkbox" class="todo-check" id=${
            todo.id
          } /><span>${todo.task}</span></p>`
        );
      }
      $('#remain').text(
        $('#todos-area input:checkbox').length -
          $('#todos-area input:checkbox:checked').length
      );
      $('.todo-check').on('click', e => {
        const clickedPoint = e.target;
        if (clickedPoint.id == todo.id) {
          todoController.updateTodo(e, todo);
        }
      });
    }
  }

  // 残りtodo数を表示
  updateTodo() {
    $('#remain').text(
      $('#todos-area input:checkbox').length -
        $('#todos-area input:checkbox:checked').length
    );
  }

  // チェック済みtodoを見える・見えないを切り替える関数
  toggleFilter() {
    const filterState = $('#filter-state').text();
    if (filterState === 'off') {
      $('#filter-state').text('on');
      $('#todos-area input:checkbox:checked')
        .parent()
        .addClass('hide');
    } else {
      // on -> off もしくは, init時はこっちの分岐に入る.
      $('#filter-state').text('off');
      $('#todos-area input:checkbox:checked')
        .parent()
        .removeClass('hide');
    }
  }
}

const todoView = new TodoView();

export default todoView;
