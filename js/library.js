var library = [
    {
        title: "Lord of rings",
        author: "Tolkien",
        readingStatus: true
    },    
    {
        title: "Hobbit",
        author: "Tolkien",
        readingStatus: true
    },
    {
        title: "Harry Poter and chamber of secrets",
        author: "Rowling",
        readingStatus: false        
    },
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        readingStatus: false
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: false
    }
];


console.log(library);

//create table and fill it with the array of objects

var table = document.getElementById("books");


for (var i = 0; i < library.length; i++) {
    fillBooksInTable(library[i], i);
}

//library.forEach(fillBooksInTable);

function fillBooksInTable(data, index){
    var rowId = index + 1;
    var row = table.insertRow(rowId);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    cell1.innerHTML = data.title;
    cell2.innerHTML = data.author;
    cell3.innerHTML = data.readingStatus;
}

