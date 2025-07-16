function addTodo() {
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();
  if (!taskText) return;

  const list = document.getElementById('todo-list');
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => list.removeChild(li);

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
}
