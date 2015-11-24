(function($){
  $( "#tabs" ).tabs();

    $.getJSON("https://api.github.com/users/tsinat", function(data){
          //console.log(data);
            procesData(data);
            last(data);
            second(data);
        });
    function procesData(data){
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
        var result = template({Array: data});

       $("#repo").html(result);
    }
      function second(value){
        var repo = value;
        $.getJSON(repo.repos_url, function(data){
           secondRepo(data);
         });
    }
    function secondRepo(data){
        console.log(data);
        var source = $("#Second-Template").html();
        var template = Handlebars.compile(source);
        var result = template({Array: data});

       $("#second").html(result);
   }

}(jQuery));