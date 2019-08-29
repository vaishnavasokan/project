var express = require("express");
const router=express.Router();

var book_arr = [
    { 
        title:"The God of Small Things",
        author:"Arundhati Roy",
        category:"Fiction",
        image:"https://dynamic.indigoimages.ca/books/0735273286.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=0&lang=en",
        desc:"The God of Small Things is the debut novel of Indian writer Arundhati Roy. It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the 'Love Laws' that lay down 'who should be loved, and how. And how much.'The book explores how the small things affect people's behavior and their lives. It won the Booker Prize in 1997."
    },

    { 
        title:"3 Mistakes of my Life",
        author:"Chetan Bhagat",
        category:"Fiction",
        image:"https://images-na.ssl-images-amazon.com/images/I/51nziLHeduL._SX328_BO1,204,203,200_.jpg",
        desc:"The 3 Mistakes of My Life is the third novel written by Chetan Bhagat. The book was published in May 2008 and had an initial print-run of 420,000. The novel follows the story of three friends and is based in the city of Ahmedabad in western India.Kai Po Che! (transl. The kite has been cut!; also known as Kai Po Che: Brothers... for Life) is a 2013 Indian buddy drama film directed by Abhishek Kapoor and is based on this novel of Chetan Bhagat."
    },

    { 
        title:"The Ministry of Utmost Happiness",
        author:"Arundhati Roy",
        category:"Fiction",
        image:"https://images.penguinrandomhouse.com/cover/9780525434818",
        desc:"The Ministry of Utmost Happiness takes us on a journey of many years – the story spooling outwards from the cramped neighbourhoods of Old Delhi into the burgeoning new metropolis and beyond, to the Valley of Kashmir and the forests of Central India, where war is peace and peace is war, and where, from time to time, ‘normalcy’ is declared."
    },
    {
        title:"Playing it my way",
        author:"Sachin Tendulkar, Boria Majumdar",
        category:"Autobiography",
        image:"https://techmarketblog.files.wordpress.com/2014/11/tendulkar-playing-it-my-way.jpg",
        desc:"This is cricket icon, Sachin Tendulkar's life story in his own words - his journey from a small boy with dreams to becoming a cricket god. His amazing story has now been turned into a major film, A Billion Dreams, in which he stars.The greatest run-scorer in the history of cricket, Sachin Tendulkar retired in 2013 after an astonishing 24 years at the top. The most celebrated Indian cricketer of all time, he received the Bharat Ratna Award - India's highest civilian honour - on the day of his retirement. Now Sachin Tendulkar tells his own remarkable story - from his first Test cap at the age of 16 to his 100th international century and the emotional final farewell that brought his country to a standstill."
    }
]
    

router.get("/",function(req,res)
{
    res.render("books",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}],
    bookdetails: book_arr });
})

router.get("/:id",function(req,res)
{
    var id=req.params.id;
    console.log(id);
    console.log(book_arr[id].title);
    res.render("viewbook",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}],
    bookdetails: book_arr[id]});
})


module.exports=router;