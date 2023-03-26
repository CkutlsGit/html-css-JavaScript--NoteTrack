// Функиця по добавлении задачи
function formHandler(event) {
    event.preventDefault(); // Удаляем чтобы не отправлялась форма
  
    const nametask = todoinput.value;
  
    if (nametask == '') { // Проверка пустая форма или нет, и если пустая выводится всплывающие окно
      alert('Поле пустое!');
    } else {
      const Element_li = `<li>${nametask}</li>`; // Создание и добавление задачи
      todolist.insertAdjacentHTML('beforeend', Element_li);
  
      todoinput.value = '';
      todoinput.focus();
    }  
}
  
// Получаем элементы формы,текста.
const todolist = document.querySelector('#todo__mis');
const todoform = document.querySelector('#todo');
const todoinput = document.querySelector('#todo-text');
  
todoform.addEventListener('submit', formHandler);
  