var fs = require('fs');
function setBooks(books, callback) {
    fs.writeFile('./users.json', JSON.stringify(books), 'utf8', function (err) {
        if (err) {
            books = [];
            setBooks(books, callback);
            callback();
        } else {
            callback();
        }
    })
}
setBooks('sdfasdfsa1',function(){
    console.log('ok');
});
console.log('over');