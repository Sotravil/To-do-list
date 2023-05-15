document.addEventListener('DOMContentLoaded', function() {

  const taskInput = document.getElementById('taskInput');

  const addButton = document.getElementById('addButton');

  const taskList = document.getElementById('taskList');

  // Add task event

  addButton.addEventListener('click', function() {

    const taskText = taskInput.value.trim();

    if (taskText !== '') {

      const listItem = document.createElement('li');

      listItem.textContent = taskText;

      // Mark task as completed on click

      listItem.addEventListener('click', function() {

        listItem.classList.toggle('completed');

      });

      // Remove task on double click

      listItem.addEventListener('dblclick', function() {

        listItem.remove();

      });

      taskList.appendChild(listItem);

      taskInput.value = '';

    }

  });
document.addEventListener('DOMContentLoaded', function() {document.addEventListener('DOMContentLoaded', function() {document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
      });

      listItem.addEventListener('dblclick', function() {
        listItem.remove();
      });

      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      addButton.click();
    }
  });
});

  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
      });

      listItem.addEventListener('dblclick', function() {
        listItem.remove();
      });

      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      addButton.click();
    }
  });
});

  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
      });

      listItem.addEventListener('dblclick', function() {
        listItem.remove();
      });

      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      addButton.click();
    }
  });
});

  // Add task on pressing Enter key

  taskInput.addEventListener('keypress', function(event) {

    if (event.key === 'Enter') {

      addButton.click();

    }

  });

});

