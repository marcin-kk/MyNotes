const saveBtn = document.querySelector(".save")
const addBtn = document.querySelector(".add")
const notePanel = document.querySelector(".note-panel")
const selectCategories = document.querySelector("#category")
const textArea = document.querySelector("#text")
const panelError = document.querySelector(".error")
const noteArea = document.querySelector(".note-area")
let noteNumber = 1

const showPanel = () => {
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
		const newNote = document.createElement("div")
		newNote.classList.add("note")
		newNote.innerHTML = `<div class="note-header">
        <h3 class="note-title">Note #${noteNumber}</h3>
        <button class="delete-note"><i class="fas fa-times icon"></i></button>
    </div>
    <div class="note-body">${textArea.value}</div>`
		applyColor(newNote)
		noteArea.append(newNote)
		panelError.style.visibility = "hidden"
		notePanel.style.display = "none"
		noteNumber++
	} else {
		panelError.style.visibility = "visible"
	}
}

addBtn.addEventListener("click", showPanel)
saveBtn.addEventListener("click", createNote)
selectCategories.addEventListener("change", function () {
	console.dir(selectCategories)
    console.log(selectCategories.value);
    console.log(selectCategories.innerText);
})

noteArea.addEventListener('click', function(e){
    console.log(e.target);
    console.dir(e.target);
    if (e.target.nodeName === "BUTTON") {
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove()
    }
})