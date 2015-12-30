# tiny-router-js
Tiny JavaScript router

### Setup
```<script src="tinyrouter.js"></script>```

### Configuration
In your main JavaScript file:
```
// Routes
router({
  '/': function () {
    myList();
  },
  '/mylist': myList,
  '/myitem/:id/colors/:color': myItem
},
{
  before: function () {
    console.log('Do something before routing.');
  }
});

// Route functions
function myList() {
  alert('My list.');
}

function myItem(id, color) {
  alert('My item. ' + id + ' ' + color);
}
```
### Usage
```
mydomain.com/#/mylist
or
mydomain.com/#!/mylist

mydomain.com/#/myitem/99/colors/brown
```
