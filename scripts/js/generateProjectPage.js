$(document).ready(function() {
    showProjects();
});

function getQueryParameter(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

var projectID = getQueryParameter('projectID');




function showProjects() {
    $.ajax({
        type: "GET",
        url: "./projects.xml",
        dataType: "xml",

        error: function(e) {
            alert("An Error Occured While Processing XML File");
        },
        success: function(response) {


            $(response).find('project[id="' + projectID + '"]').each(function() {
                var xml = $(this);


                document.getElementById('project-title').innerHTML += '<h2>' + xml.find('title').text() + '</h2>';
                document.getElementById('project-img').innerHTML += '<img class="center" src="img/project-img/' + xml.find('image').text() + '.png">'
                document.getElementById('more-info').innerHTML += '<p>' + xml.find('about').text() + '</p>';


                document.getElementById('tools-used').innerHTML += xml.find('tools').text();



            })


        }

    });
}