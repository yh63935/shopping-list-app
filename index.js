import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-b9428-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const taskListInDB = ref(database, "taskList")

const taskListEl = document.getElementById('task-list')
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

//adds input value to task list database when add button is clicked
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(taskListInDB, inputValue)
    clearInput()
})

//render tasks on app when task list database is changed
onValue(taskListInDB, function(snapshot) {
    //get items from Firebase database
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        clearTaskListEl();

        for (let i = 0; i<itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToTaskList(currentItem)
        }
    }
    else {
        taskListEl.innerHTML = "Congratulations! You finished all your tasks :)"
    }

})

//delete item after being clicked
//add eventListeners to each object
function clearInput() {
    inputFieldEl.value = ""
}

function clearTaskListEl() {
    taskListEl.innerHTML = "";
}

function appendItemToTaskList(item) {
    let newEl = document.createElement('li')
    let itemId = item[0]
    let itemValue = item[1]

    newEl.innerText = itemValue;

    newEl.addEventListener('click', function() {
        console.log(itemId)
        let exactLocationOfItemInDB = ref(database, `taskList/${itemId}`)
        remove(exactLocationOfItemInDB)
    })

    taskListEl.append(newEl)
}
