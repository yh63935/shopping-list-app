import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    let itemsArray = Object.values(snapshot.val())
    clearShoppingListEl();

    for (let i = 0; i<itemsArray.length; i++) {
        appendItemToShoppingList(itemsArray[i]);
    }
})

function clearInput() {
    inputFieldEl.value = ""
}

function clearShoppingListEl() {
    shoppingListEl.innerHTML = "";
}

function appendItemToShoppingList(itemValue) {
    shoppingListEl.innerHTML+=`<li>${itemValue}</li>`
}
