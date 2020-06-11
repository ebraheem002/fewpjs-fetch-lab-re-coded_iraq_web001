const URLA = 'https://anapioficeandfire.com/api/books'
let main =  document.getElementsByClassName('main')[0]

function fetchBooks(){
fetch(URLA)
  .then(response => response.json())
  .then(json  => {
    renderBooks(json)
    //console.log(json);

})
.catch(Error =>console.log(Error))
}
fetchBooks()
  //const main = document.querySelector('main')

const myArr1 = []
function renderBooks(myBook) {
 // console.log(myBook)
  myBook.forEach(book => {
    myArr1.push(book)
    //console.log(myBook)

  })
      const h2 = document.createElement('h2')

   main.appendChild(h2)
    let nameJson = myArr1[4].name
  h2.appendChild(nameJson)
   let myArr2 = JSON.stringify(myArr1)


}
