
$("#start").click(function() {
    $("#start").remove();
    $("input").removeClass("hidden");
    $("button#txtInput").removeClass("hidden");
    var i = 0;
    $("h1").text(chars[i]);
    $("button#txtInput").click(function() {
        $("h1").text(chars[i+1]);
        let s = $("input").val();
        numberOfCharacters.push(s);
        console.log(numberOfCharacters);
        $("input").val("");    
        i++;
        if (i == 3) {
            $("input").remove();
            $("button#txtInput").remove();
            $("#start").remove();
            $("h1").text("Here is your password");
            var x = numberOfCharacters[0];
            var y = numberOfCharacters[1];
            var z = numberOfCharacters[2];
            var pazz = password(wholeList, x, y, z)
            $("h4").text(pazz);
            $("h4").removeClass("hidden");
        }
        
    });
});
var numberOfCharacters = [];
var chars = ["How many letters?", "How many numbers?", "How many symbols?"]
var wholeList = [[
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], ['!', '#', '$', '%', '&', '(', ')', '*', '+']];

function randomItemFromList(list, nitems) {
    var new_list = [];
    for (var i = 0; i < nitems; i++) {
        let randomIndex = Math.floor(Math.random() * list.length);
        var element = list[randomIndex];
        new_list.push(element);
    }
    return new_list;
}

function shuffle(list) {
    list.sort(() => Math.random() - 0.5);
    return list;
}

function password(list, x, y, z) {
    var passwordList = [];

    numberOfItems = x;
    var partialList = list[0];
    var new_lst = randomItemFromList(partialList, x);
    passwordList.push(new_lst);

    numberOfItems = parseInt(y);
    partialList = list[1];
    var new_lst = randomItemFromList(partialList, y);
    passwordList.push(new_lst);

    numberOfItems = parseInt(z);
    partialList = list[2];
    var new_lst = randomItemFromList(partialList, z);
    passwordList.push(new_lst);

    var passwordElementsSorted = [];
    for (var i = 0; i < passwordList.length; i++) {
        passwordElementsSorted = passwordElementsSorted.concat(passwordList[i]);
    }
    var password = shuffle(passwordElementsSorted).join();
    var pass = password.replaceAll(",", "");
    return pass;
}

