
var quoteList = 
[
    {
        title: '“You only live once, but if you do it right, once is enough.”',
        author: '--Mae West'
    },

    {
        title: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "-- Robert Frost"
    },

    {
        title: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author: "-- Oscar Wilde"
    },

    {
        title: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: "-- Andre Gide, Autumn Leaves"
    },

    {
        title: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author: "-- Mark Twain"
    },

    {
        title : "“Life is what happens to us while we are making other plans.”        ",
        author : "-- Allen Saunders"
    }
    

]


var elemenrQuote = document.getElementById('quote');


var elemenrAughor = document.getElementById('author');


var number = 0;


function getQuote() {
    elemenrQuote.innerHTML = quoteList[number].title;
    elemenrQuote.style.color = 'green';
    elemenrQuote.style.fontWeight = 900;

    elemenrAughor.innerHTML = quoteList[number].author;
    elemenrAughor.style.color = 'blue'


    if (number == quoteList.length - 1 ) {
        number = 0;
    }
    else {
        number += 1;
    }
}

