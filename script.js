const saveBtn = document.querySelector(".save")
const addBtn = document.querySelector(".add")
const notePanel = document.querySelector(".note-panel")
const selectCategories = document.querySelector("#category")
const textArea = document.querySelector("#text")
const panelError = document.querySelector(".error")

const showPanel = () => {
	notePanel.style.display = "flex"
}

const createNote = () => {
	if (selectCategories.value == !0 && textArea.value !== "") {
		console.log("ok")
        
	} else {
        panelError.style.visibility = 'visible'
	}
}

addBtn.addEventListener("click", showPanel)
saveBtn.addEventListener("click", createNote)
selectCategories.addEventListener("change", function () {
	console.dir(selectCategories)
})
