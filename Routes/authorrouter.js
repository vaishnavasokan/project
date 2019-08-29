var express = require("express");
const router=express.Router();

var author_arr = [
    { 
        title:"Arundhati Roy",
        image:"http://highlightsindia.com/wp-content/uploads/2017/06/image-2017-06-12-2.jpg",
        nationality:"Indian",
        dob:"born on November 24, 1961",
        about:"https://en.wikipedia.org/wiki/Arundhati_Roy",
        desc:"Suzanna Arundhati Roy (born 24 November 1961) is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the biggest-selling book by a non-expatriate Indian author."
    },

    { 
        title:"Chetan Bhagat",
        image:"https://img.theweek.in/content/dam/week/news/entertainment/images/2018/9/4/chetanbhagat.jpg",
        nationality:"Indian",
        dob:"born on 22 April 1974",
        about:"https://en.wikipedia.org/wiki/Chetan_Bhagat",
        desc:"Chetan Baghat, a rising star in the contemporary modern Indian literature, is a multitalented personality. He is a novelist, columnist, public speaker and a screenplay writer. His notable works include Five Point Someone, The 3 Mistakes of My Life and 2 States.Most of his literary works address the issues related to Indian youth and their aspirations which earned Baghat status of the youth icon."
    },

    { 
        title:"Paulo Coelho",
        image:"https://cdn2.penguin.com.au/authors/original/87518au.jpg",
        nationality:"Brazilian",
        dob:"born on August 24, 1947",
        about:"https://en.wikipedia.org/wiki/Paulo_Coelho",
        desc:"The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist. In 1986, PAULO COELHO did the pilgrimage to Saint James of Compostella, an experience later to be documented in his book The Pilgrimage. In the following year, COELHO published The Alchemist. Slow initial sales convinced his first publisher to drop the novel, but it went on to become one of the best selling Brazilian books of all time. "
    },
    {
        title:"APJ Abdul Kalam",
        image:"https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2019/07/27/APJ%20ABDUL%20KALAM-1564209285.jpg?itok=ElMyF8zR",
        nationality:"Indian",
        dob:"born on October 15, 1931",
        about:"https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam",
        desc:"A.P.J. Abdul Kalam, in full Avul Pakir Jainulabdeen Abdul Kalam, (born October 15, 1931, Rameswaram, India—died July 27, 2015, Shillong), Indian scientist and politician who played a leading role in the development of India’s missile and nuclear weapons programs. He was president of India from 2002 to 2007."
    }
]

router.get("/",function(req,res)
{
    res.render("authors",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}],
    authordetails: author_arr });
})

router.get("/:id",function(req,res)
{
    var id=req.params.id;
    console.log(id);
    console.log(author_arr[id].title);
    res.render("viewauthor",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}],
    authordetails: author_arr[id]});
})

module.exports=router;



