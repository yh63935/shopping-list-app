import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-b9428-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
const shoppingListEl = document.getElementById('shopping-list')
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

//adds input value to shopping list database when add button is clicked
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    clearInput()
})

//render shopping list items on app when shopping list database is changed
onValue(shoppingListInDB, function(snapshot) {
    //get items from Firebase database
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        clearShoppingListEl();

        for (let i = 0; i<itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToShoppingList(currentItem)
        }
    }
    else {
        shoppingListEl.innerHTML = "No items here... yet"
    }

})

//delete item after being clicked
//add eventListeners to each object
function clearInput() {
    inputFieldEl.value = ""
}

function clearShoppingListEl() {
    shoppingListEl.innerHTML = "";
}

function appendItemToShoppingList(item) {
    // shoppingListEl.innerHTML+=`<li>${itemValue}</li>`
    let newEl = document.createElement('li')
    let itemId = item[0]
    let itemValue = item[1]

    newEl.innerText = itemValue;

    newEl.addEventListener('click', function() {
        console.log(itemId)
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemId}`)
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}
