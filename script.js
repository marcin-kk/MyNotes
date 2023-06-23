const saveBtn = document.querySelector(".save")
const addBtn = document.querySelector(".add")
const notePanel = document.querySelector(".note-panel")
const selectCategories = document.querySelector("#category")
const textArea = document.querySelector("#text")
const panelError = document.querySelector(".error")
const noteArea = document.querySelector(".note-area")
const cancelBtn = document.querySelector(".cancel")
const deleteAllBtn = document.querySelector(".delete-all")
let noteNumber = 1

const openPanel = () => {
	notePanel.style.display = "flex"
}

const applyColor = note => {
	if (selectCategories.selectedIndex === 1) {
		note.style.backgroundColor = "#ffff20"
	} else if (selectCategories.selectedIndex === 2) {
		note.style.backgroundColor = "#9AFF1F"
	} else if (selectCategories.selectedIndex === 3) {
		note.style.backgroundColor = "#25E7F8"
	}
}

const createNote = () => {
	if (selectCategories.value == !0 && textArea.value !== "") {
		console.log("ok")
		const index = selectCategories.selectedIndex
		const selectedText = selectCategories[index].textContent
		const newNote = document.createElement("div")
		newNote.classList.add("note")
		newNote.innerHTML = `<div class="note-header">
        <h3 class="note-title">${selectedText}</h3>
        <button class="delete-note"><i class="fas fa-times icon"></i></button>
    </div>
    <div class="note-body">${textArea.value}</div>`
		applyColor(newNote)
		noteArea.append(newNote)
		closePanel()
		noteNumber++
	} else {
		panelError.style.visibility = "visible"
	}
}

const closePanel = () => {
	panelError.style.visibility = "hidden"
	notePanel.style.display = "none"
	textArea.value = ""
	selectCategories.selectedIndex = 0
}

const deleteAll = () => {
	noteArea.textContent = ""
}

addBtn.addEventListener("click", openPanel)
saveBtn.addEventListener("click", createNote)
cancelBtn.addEventListener("click", closePanel)
deleteAllBtn.addEventListener("click", deleteAll)

//how I figured out how to make a note category its header
// selectCategories.addEventListener("change", function () {
// 	console.dir(selectCategories)
// 	console.log(selectCategories[3].textContent)
// 	console.log(selectCategories.selectedIndex)
// 	console.log(selectCategories.value)
// 	console.log(selectCategories.innerText)
// })

noteArea.addEventListener("click", function (e) {
	console.log(e.target)
	console.dir(e.target)
	if (e.target.nodeName === "BUTTON") {
		console.log(e.target.parentElement.parentElement)
		e.target.parentElement.parentElement.remove()
	}
})
