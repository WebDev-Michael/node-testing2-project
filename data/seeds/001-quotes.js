exports.seed = function (knex, Promise) {
    return knex('quotes')
    .truncate()
    .then(function() {
        return knex('quotes').insert([
            {quote_text: "Yesterday is history, tomorrow is a mystery, today is a gift, that's why it's called the present", author: "Master Oogway"},
            {quote_text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Einstein"},
            {quote_text: "I love deadlines! I like the whooshing sound they make as they fly by.", author: "Douglas Adams"},
            {quote_text: "I got your back like a butt crack!"},
            {quote_text: "Some people are like clouds; when they disappear, it's a beautiful day."},
            {quote_text: "People say nothing is impossible, but I do nothing every day.", author: "Winnie the Pooh"}
        ])
    })
}