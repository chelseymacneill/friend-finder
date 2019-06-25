// Data for filled out surveys

let friendsArray = [
    {
        "name": "Lady Gaga",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lady_Gaga_interview_2016.jpg/440px-Lady_Gaga_interview_2016.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Conan O'Brien",
        "photo": "data:image/jpeg;base64,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",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },

    {
        "name": "Bradley Cooper",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiuv7KR7YPjAhWN4J4KHTwjCWgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.mirror.co.uk%2F3am%2Fcelebrity-news%2Fbradley-cooper-spends-fathers-day-16534628&psig=AOvVaw20AfXpW_7OmWx5KdgL9pbU&ust=1561525269502446",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        "name": "Britney Spears",
        "photo": "https://www.gannett-cdn.com/presto/2019/01/04/USAT/b2e69f21-2b1b-4bbc-9b0f-1400e0d72099-A1_Money_Ear_Britney_Spears.JPG?crop=1442,811,x348,y228&width=3200&height=1680&fit=bounds",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;