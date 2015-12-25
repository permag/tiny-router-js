# tiny-router-js
Tiny JavaScript router

Setup
```<script src="tinyrouter.js"></script>```

### Configuration
In your main JavaScript file:
```
// Routes
router({
  '/': function() {
    myList();
  },
  '/mylist': myList,
  '/myitem/:id': myItem
},
{
  before: function () {
    console.log('Do something before routing.');
  }
});

// Route functions
function myList() {
  console.log('My list.');
}

function myItem(id) {
  console.log('My item.', id);
}
```
### Usage
```
mydomain.com/#/mylist
or
mydomain.com/#!/mylist
```