

let taskInput = document.querySelector('input');
let listContainer = document.querySelector('.list');
let checkedContainer = document.querySelector('.checked');

function createTag (tag) {
  return document.createElement(tag);
}

function adicionar () {
  let line = createTag('tr');
  let tdChecked  = createTag('td');
  let inputChecked = createTag('input');
  inputChecked.type = 'checkbox';
  let tdTask  = createTag('td');
  let tdEdit  = createTag('td');
  let buttonEdit = createTag('button');
  buttonEdit.innerHTML = '<img src="/edit.png"></img>';
  let tdDelete = createTag('td');
  let buttonDelete = createTag('button');
  buttonDelete.innerHTML = '<img src="/delete.png"></img>';

  listContainer.appendChild(line);
  let inputValue = document.createTextNode(taskInput.value);
  tdTask.appendChild(inputValue);
  tdChecked.appendChild(inputChecked);
  line.appendChild(tdChecked);
  line.appendChild(tdTask);
  tdEdit.appendChild(buttonEdit);
  line.appendChild(tdEdit);
  tdDelete.appendChild(buttonDelete);
  line.appendChild(tdDelete);

  buttonDelete.addEventListener('click', () => {
    line.remove();
  })
  taskInput.value = '';

}