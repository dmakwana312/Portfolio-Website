$(document).ready(function() {
    showProjects();
});

function showProjects() {
    $.ajax({
        type: "GET",
        url: "./projects.xml",
        dataType: "xml",

        error: function(e) {
            alert("An Error Occured While Processing XML File");
        },
        success: function(response) {


            $(response).find("project").each(function() {
                var xml = $(this);
                var projectLink = '<div class="col-md-3 project-info"><a href="' + xml.find('github').text() + '"><p class="project-title">' + xml.find('title').text() + '</p><img src="img/project-img/' + xml.find('image').text() + '.png" alt="Project"></a><a href="' + xml.find('github').text() + '" class="btn btn-dark"><i class="fab fa-github"></i>GitHub</a></div>';
                document.getElementById('project-links').innerHTML += projectLink;

            })
        }
    });
}