const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = [
  {
    title: 'Записать блок про массивы',
    completed: false,
  },
  {
    title: 'Рассказать теорию про объекты',
    completed: true,
  },
];

function render() {
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  };

  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote));
  inputElement.value = '';
};

function getNoteTemplate(note) {
  return `
          <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="${
                note.completed ? 'text-decoration-line-through' : ''
              }">${note.title}</span>
              <span>
                  <span class="btn btn-small btn-success">&check;</span>
                  <span class="btn btn-small btn-danger">&times;</span>
              </span>
          </li>
    `;
}
