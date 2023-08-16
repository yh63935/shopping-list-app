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

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    clearInput()
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

onValue(shoppingListInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val())
    clearShoppingListEl();
    for (let i = 0; i<itemsArray.length; i++) {
        appendItemToShoppingList(itemsArray[i]);
    }
})