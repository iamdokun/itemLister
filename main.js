let form = document.getElementById('addForm');
let itemList = document.getElementById('itemList');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Remove event
itemList.addEventListener('click', removeItem);
//search event
filter.addEventListener('keyup', filterItem);


//Add Item
function addItem(e) {
    e.preventDefault();
    
   // Get Input Value
    let newItem = document.getElementById('textInput').value;

    // Create li element
    let li = document.createElement('li');

    //Add classname
    li.className = 'item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button
    let deleteBtn = document.createElement('button');
    //Add classname to the delete button
    deleteBtn.className = 'delete';
    //Add text node to the delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//Remove item
function removeItem (e) {
    if (e.target.classList.contains("delete")) {
        if (confirm('Are you sure')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Search Item
function filterItem (e) {
    //Convert input text to lower Case
    let text = e.target.value.toLowerCase();
    //
    let items = itemList.getElementsByTagName('li');
    //Convert to array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}