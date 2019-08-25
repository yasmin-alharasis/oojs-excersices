/*SuperHero
_Make a base class. Give it some properties, and actions (methods) that change those properties.*/
function SuperHero(name,age){
    this.name=name;
    this.age=age;
    this.change=function(){
        console.log(this.name)
        console.log(this.age)
    }
}

var person=new SuperHero('yasmin',23)
person.change();

/*Sing a Song
Create a class called Song() with two properties:
songName - i.e., 'A day in the Life'
bandName - i.e., 'The Beatles'
create a new instance of the class, storing it in a variable
Add two methods to the prototype:
countName - return the total number of words in the song name
createElement - create a new DOM element with jQuery
Create an instance with the new keyword
Append the instance to the DOM
*/

function Song(){
    this.songName='A day in the Life';
    this.bandName='The Beatles';
}


Song.prototype.countName=function(){
var count=this.songName.split(' ');
var long=count.length;
     return long;
}
Song.prototype.createElement = function(){
        $('body').append(`${this.songName} ` + `${this.bandName}`);
     }

     var song1= new Song();

song1.createElement();
song1.countName();

/*The Cat
Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase 
or decrease these things, like "feed", "sleep", or "pet".
Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.*/

function TheCat(tiredness,hunger,lonliness,happiness){
    this.tiredness =tiredness;
    this.hunger=hunger;
    this.lonliness=lonliness;
    this.happiness=happiness;

    this.feed = function (){
      
        console.log(this.hunger=hunger-1);
        console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);


    }
    this.sleep = function (){
                    console.log(this.tiredness=tiredness-1);
                    console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);



    }
    this.pet = function (){
        console.log(this.happiness=happiness+1);
        console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);
    }
    this.play = function (){
        console.log(this.lonliness=lonliness-1);
        console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);
    }

  }
      TheCat.prototype.status = function (){
          if(this.hunger <5){
    console.log('Paws is really hungry')    
      } 
      else {
          console.log('Paws is VERY happy')
      }
      }
    newCat = new TheCat (10,5,8,9);
    newCat.feed();
    newCat.sleep();
    newCat.play();
    newCat.pet();
    newCat.status();
    ------------------------------------------------------------------------
    /*The Reading List
_An object-oriented book-list!_
*   Create a class `BookList`
*   Create another class called `Book`
*   **BookLists** should have the following properties:
    *   Number of books marked as read
    *   Number of books marked not read yet
    *   A reference to the next book to read (book object)
    *   A reference to the current book being read (book object)
    *   A reference to the last book read (book object)
    *   An array of all the Books
*   Each **Book** should have several properties:
    *   Title
    *  Genre
    *  Author
    *   Read (true or false)
    *   Read date, can be blank, otherwise needs to be a [JS Date() object]
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
*   Every **Booklist** should have a few methods: 
    * .add(book)
        * should add a **book** to the books list.
    *   .finishCurrentBook()
        *   should mark the **book** that is currently being read as "read"
        *   Give it a read date of new Date(Date.now())
        *   Change the last **book** read to be the book that just got finished
        *   Change the current **book** to be the next book to be read
        *   Change the next **book** to be read property to be the first unread book you find in the list of books
*   **Booklists** and **Books** might need more methods than that. Try to think of more that might be useful.
 */
function BookList(numOfBooksRead,numOfBooksNotRead,referenceNextBook,referenceCurrentBook,referenceLastBook, arrOfBooks) {
    this.numOfBooksRead = numOfBooksRead ;
    this. numOfBooksNotRead = numOfBooksNotRead;    
    this.referenceNextBook = referenceNextBook;
    this.referenceCurrentBook = referenceCurrentBook;
    this.referenceLastBook = referenceLastBook;
    this.arrayofBooks=[];


    this.add=function(book){
        arrayofBooks.push(book);
    }
      this.finishCurrentBook(){

    }
}


function Book(title, genre, author, read, readDate) {
    this.title = title ;
    this. genre = genre;    
    this.author = author;
    this.read = read;
    this.readDate = readDate;

}

book1 = new Book();
