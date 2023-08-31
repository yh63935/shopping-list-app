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

// Add input value to task list database when add button is clicked
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(taskListInDB, inputValue)
    clearInput()
})

// Render tasks on app when task list database is changed
onValue(taskListInDB, function(snapshot) {
    // Get items from Firebase database
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
    newEl.innerText = itemValue

    //Added customization for prioritizing tasks

    let importantBtn = document.createElement('button')
    //ClickCount variable to keep track of if click is even or odd
    let clickCount = 1
    newEl.className = 'un-prioritize'
    importantBtn.innerHTML ='<i class="fa-solid fa-star"></i>'
    //Add the button to the task list items
    newEl.append(importantBtn)

    //Sets the button and task to important or not depending on odd/even click
    importantBtn.addEventListener('click', function(event) {
        //If it is an event click, set the button and list item back to normal (unprioritized)
        event.stopImmediatePropagation()
        if (clickCount%2!==0) {
            // importantBtn.textContent = 'hi'
            newEl.className = 'prioritize'
            newEl.classList.add('important')
        }
        else {
            // importantBtn.textContent ='hello'
            newEl.className = 'un-prioritize'
            newEl.classList.remove('important')
        }        clickCount++
    })

    newEl.addEventListener('click', function() {
        console.log(itemId)
        let exactLocationOfItemInDB = ref(database, `taskList/${itemId}`)
        remove(exactLocationOfItemInDB)
    })

    taskListEl.append(newEl)
}
