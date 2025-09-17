var tweet = prompt("Compose your tweets:");
//alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");

//var name = "Angela";
//var teste = name.slice(1,5);

//alert(teste);
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);