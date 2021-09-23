document.querySelector('form').addEventListener('submit', handleSubmit);
// document.querySelector('ul').addEventListener('click', handleDoneOrRemove);
// document.getElementById('clear').addEventListener('click', handleClear);

function handleSubmit(element) {
	element.preventDefault();
	let input = document.querySelector('input');
	if (input.value != '')
		addTask(input.value);
}

function addTask(task) {
	let form = document.createElement('form');

	form.innerHTML = `
        <input type="text" value="${task}">
    `;

    document.querySelector('input').value = ''
    document.getElementById('list').appendChild(form);
}