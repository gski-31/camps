// similar to other apps but includes other methods and local storage

// grab the page elements
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// array to hold the state of our app
const items = [];

// create submit event
function submitHandler(e) {
        e.preventDefault(); // not goign to a form, getting displayed in lower div
        const name = e.currentTarget.item.value; // grab via form name
        if (!name) return; // no empty submissions
        console.log(name);
        // when creating a list give each a unique id
        // create a new object for each entry and push to the array
        const item = {
                name, // var from above
                id: Date.now(), // easy unique identifier
                complete: false, // just added so not completed yet
        };
        // push the item/object to storage array
        items.push(item);
        console.log(items);
        // clear all forms on submit
        e.target.reset();
        // call display all the items function
        // displayItems();
        // fire off a custom event that will ley all know that the items have been updated!
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// function to display all the items
function displayItems() {
        const html = items
                .map(
                        item =>
                                `<li class="shopping-item"><input type="checkbox"><span class="itemName">${item.name}</span><button aria-label="remove ${item.name}">&times;<button></li>`
                )
                .join('');
        list.innerHTML = html;
}

shoppingForm.addEventListener('submit', submitHandler); // submit is better than click, enter, etc.. for forms
