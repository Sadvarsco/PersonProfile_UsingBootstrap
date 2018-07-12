//Github URL
const url = "https://api.github.com/users/Sadvarsco/repos";

$(document).ready(function () {
    $("#button").click(function () {
        loadRepo(url, loadRepoCallback);
    });
    
    function loadRepo(url, callback) {
        const gitHubRequest = new XMLHttpRequest();
        gitHubRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this);
            }
        };
        gitHubRequest.open("GET", url, true);
        gitHubRequest.send();
    };

    $("#button2").click(function () {
        loadRepo(url, loadRepoCallback);
    });
    
    function loadRepo(url, callback) {
        const gitHubRequest = new XMLHttpRequest();
        gitHubRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this);
            }
        };
        gitHubRequest.open("GET", url, true);
        gitHubRequest.send();
    };


    function loadRepoCallback(gitHubRequest) {
        let repolist = JSON.parse(gitHubRequest.responseText);

        let nm = ""; //repolist.name; //name
        let ht = ""; //Html URL
        let ds = ""; // Description

        let printlist = "";
        let card = "";
        for (i = 0; i < repolist.length; i++) {
            nm = repolist[i].name; //repo name
            ht = repolist[i].html_url; //repo url
            ds = repolist[i].description; //repo description, in none available, shows up as null
            console.log(repolist.length);
            console.log(repolist[i].name);
            console.log(repolist[i].html_url);
            console.log(repolist[i].description);

            //List Print out, create Bootstrap Cards for each repo
            printlist = `<h6 class="card-title">Repo name: ${nm} </h6><p class="card-text">${ds}</p> <a href=\"${ht}\" target="_blank" class="btn btn-primary">Link</a>`;
            console.log(printlist);
            card +=`<li style="margin: 0.1rem;"><div class="card" style="width: 12rem;"><div class="card-body">${printlist}</div></div></li>`;   
        }

        document.getElementById('repolist').innerHTML = card;
        // Callback function needs to parse the JSON
        // Using the DOM get the element ID from your <ul> in your HTML
        // You will need a forEach to loop through the parsed object
        // Using the DOM create new list elements
        // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
        // Append the new list items to the element you retrieved from HTML
    }

    $(".github").hover(function () {
        $(this).filter(':not(:animated)').animate({
            height: '9.5em',
            width: '9.5em'
        });
    }, function () {
        $(this).animate({
            height: '4.5em',
            width: '4.5em'
        });
    });
    $(".linkedin").hover(function () {
        $(this).filter(':not(:animated)').animate({
            height: '9.5em',
            width: '9.5em'
        });
    }, function () {
        $(this).animate({
            height: '4.5em',
            width: '4.5em'
        });
    });
    $(".instagram").hover(function () {
        $(this).filter(':not(:animated)').animate({
            height: '9.5em',
            width: '9.5em'
        });
    }, function () {
        $(this).animate({
            height: '4.5em',
            width: '4.5em'
        });
    });
});