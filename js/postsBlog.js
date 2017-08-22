$(function() {

    var url = "https://script.google.com/macros/s/AKfycbxK-I4ecLXyiAWyjQQuov52_wLNwa0g3zTeE7NCkl33E_bsDZ-b/exec?action=read";

    $.getJSON(url, function (json) {

        var divContainer = document.getElementById("showPosts");
        
        for (var i = json.records.length - 1, count = 0; i >= 0 && count < 3; i--, count++) {

            var post = document.createElement("div");
            post.setAttribute("class", "content-card col-xs-12 col-md-4");

            post.innerHTML =    "<a href='" + json.records[i].link + "'>" +
                                    "<div class='content-img' style=\"background-image: url('" + json.records[i].image + "'); background-size: 450px;\"> </div>" +
                                "</a>" +
                                
                                "<h3> <a href='" + json.records[i].link + "'>" + json.records[i].title + "</a> </h3>" +
                                
                                "<div class='author'><h4>" + json.records[i].author + "</h4> </div>" +

                                "<div class='content-text'>" +
                                    "<p>" + json.records[i].description + "</p>" +
                                "</div>" +
                                
                                "<a class='read-more hidden-xs' href='" + json.records[i].link + "'>CONTINUE LENDO</a>";

            divContainer.appendChild(post);
        }
    });
});  