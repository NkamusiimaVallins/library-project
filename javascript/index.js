 const container = document.querySelector(".container")
 const item = document.querySelector(".item")
 const myLibrary = [
    { title:"Betrayal in the City",
    author:"Francis D. Imbuga",
    year:1976,
    pages:80,
    read_stat:"not read",
    id:crypto.randomUUID() }

    ,{title:"The Curse of a Sacred cow",
    author:"Mary Karooro Okurut",
    year:1994,
    pages:65,
    read_stat:"read",
    id:crypto.randomUUID(),}
]
 
 function Book(title,author,year,pages,id){
    this.title=title
    this.author=author
    this.year=year
    this.pages=pages
    this.id=id
 }
 const book1 = new Book("Government Inspector","Nikolia Gogol",1836,100,crypto.randomUUID())
 const book2 = new Book("The Alien Woman","Laury Lawrence Ocen",1999,145,crypto.randomUUID())
 myLibrary.push(book1)
 myLibrary.push(book2)

 /*addingToLib("The Alien Woman","Laury Lawrence Ocen",1999,145,"read")
 addingToLib("Government Inspector","Nikolia Gogol",1836,100,"read")
 addingToLib("Magic Bullet","Harry Stein",1995,390,"not read")*/
 

 function displayOnPage(x){
    const newdiv = document.createElement("div")
    newdiv.classList.add("bookDiv")
    container.appendChild(newdiv)
     const heading = document.createElement("h1")
    newdiv.appendChild(heading)
    heading.textContent=`${x.title}`.toUpperCase()
    const paragraph1 = document.createElement("p")
    newdiv.appendChild(paragraph1)
    paragraph1.textContent=`${x.author}, ${x.year}`.toUpperCase()

   const paragraph2 = document.createElement("p")
    newdiv.appendChild(paragraph2)
    paragraph2.textContent=`${x.pages} pages `

     const paragraph3 = document.createElement("p")
    newdiv.appendChild(paragraph3)
    paragraph3.textContent=`${x.id}`

    const label = document.createElement("label")
    const input = document.createElement("input")
    label.textContent="read/not_read".toUpperCase()
    input.type="checkbox"
   newdiv.appendChild(label)
   newdiv.appendChild(input)

   }

 myLibrary.forEach(displayOnPage)
 
 const book_title = document.querySelector("#book_title")
 const author = document.querySelector("#author")
 const pages = document.querySelector("#pages")
 const year = document.querySelector("#year")
 const btn = document.querySelector("#btn")
 const btn_cancel = document.querySelector("#btn_cancel")
 const form_box = document.querySelector("#form_box")

 function addButtonMagic(e){
   e.preventDefault();
   let book = new Book(book_title.value,author.value,year.value,pages.value,crypto.randomUUID())
   myLibrary.push(book)
   displayOnPage(book)
   form_box.reset()
 }
 


/*form_box.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("The form is valid!");
});*/

form_box.addEventListener("submit",addButtonMagic)

const myDialog = document.querySelector("#myDialog")
const addBook = document.querySelector("#addBook")
addBook.addEventListener("click",()=>{
myDialog.showModal()

btn_cancel.addEventListener("click",()=>{
   myDialog.close()
})
})



 

 
