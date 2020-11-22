var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//Form submit event
form.addEventListener('submit',addItem);

// Delete Event
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);



//Add item function
function addItem (e){
    e.preventDefault();
    
    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');
    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.append(deleteBtn);

    //Append li to list
    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){ //da provjerimo da li klikcemo na dugme ono crveno
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    
    //Get list
    var items = itemList.getElementsByTagName('li');

    //convert to array from collection
    Array.from(items).forEach(function(item){ //potrebno je prebaciti HTML kolekciju u listu!
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){ // != -1 (ukoliko niej -1 ), odnosno ukoliko su jednaki!
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}