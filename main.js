const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

const fromLocalStorage = JSON.parse(localStorage.getItem('tasks'))
let tasks = fromLocalStorage

tasks.forEach(item => {
	taskList.innerHTML += `<li>${item}</li>`
})

addBtn.addEventListener('mouseover', function() {
	tasks.push(taskInput.value)

	localStorage.setItem('tasks', JSON.stringify(tasks))

	taskList.innerHTML += `<li>${taskInput.value}</li>`

	taskInput.value = ""
})
