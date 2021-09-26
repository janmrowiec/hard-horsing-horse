// selectors
document.querySelector('form').addEventListener('submit', handleAddNewHorse);
document.querySelector('ul').addEventListener('click', handleFinishOrRemove);
document.getElementById('clear').addEventListener('click', handleRemoveAll);


// event handlers 
function handleAddNewHorse(e) {
	e.preventDefault();
	let input = document.querySelector('input');
	if (input.value != '')
		addTask(input.value);
	input.value = ''
}


function handleFinishOrRemove(e) {
	if (e.target.name == 'doneButton')
		finishTask(e);
	if (e.target.name == 'removeButton')
		addTask(e);
}


function handleRemoveAll(e) {
	document.querySelector('ul').innerHTML = '';
}


// helpers

function addTask(task) {
	let ul = document.querySelector('ul');
	let li = document.createElement('li');

	li.innerHTML = `
		<span class="item-title">${task}</span>
		<button name="doneButton">
			<img src="https://img.icons8.com/ios/50/000000/checked--v1.png"/>
		</button>
		<button name="removeButton">
        	<img src="https://img.icons8.com/ios/50/000000/trash--v1.png"/>
        </button>
	`;
	li.classList.add('list-item');
	ul.appendChild(li);
}

function finishTask(argument) {
	// body...
}

function removeTask(argument) {
	// body...
}