(function($){

    $.getJSON("https://api.github.com/users/tsinat", function(data){
          //  console.log(data);
            procesData(data);
            last(data);
        });
    function procesData(data){
        //console.log(data);
        var source = $("#Handlebars-Template").html();
        var template = Handlebars.compile(source);
         var result = template(data);

  $("#profile").html(result);
  }
   function last(value){
        var repo = value;
        $.getJSON(repo.repos_url, function(data){
           repos(data);
         });
    }
    function repos(data){
        console.log(data);
        var source = $("#Repo-Template").html();
        var template = Handlebars.compile(source);
         var result = template(data);

      $("#repo").html(result);
    }

}(jQuery));