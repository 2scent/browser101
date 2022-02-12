window.addEventListener('DOMContentLoaded', () => {
  const itemList = document.querySelector('.item-list');
  const plusBtn = document.querySelector('.plus');
  const inputItem = document.querySelector('.input-item');

  plusBtn.addEventListener('click', () => {
    addItem();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    addItem();
  });

  document.addEventListener('click', (event) => {
    if (!event.target || event.target.className !== 'item-delete') return;

    itemList.removeChild(event.target.parentElement);
  });

  function addItem() {
    const itemName = inputItem.value;
    if (itemName === '') return;

    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    item.setAttribute('data-name', itemName);

    const name = document.createElement('span');
    name.setAttribute('class', 'item-name');
    name.textContent = itemName;
    item.appendChild(name);

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item-delete');
    deleteBtn.textContent = 'X';
    item.appendChild(deleteBtn);

    itemList.appendChild(item);

    inputItem.value = '';
  }
});
