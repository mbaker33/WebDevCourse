var movies = [{hasSeen: true, name: "The Departed",stars: 5},
              {hasSeen: false, name: "Creed",stars: 4.5},
              {hasSeen: true, name: "Creed 2",stars: 4}];

movies.forEach(function(item){
    var seenIt = item.hasSeen;
    var movieName = item.name;
    var rating = item.stars;

    if (seenIt === false) {
        var hasWatched = "not seen";
    }
    else {
        var hasWatched = "watched";
    }

    console.log("You have " + hasWatched + ' \"' + movieName + '\" - ' + rating + " stars");
});