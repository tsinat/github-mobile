(function($){

    $.ajax({
        method: "get",
        url: "https://api.github.com/users/tsinat",
        sucess: function(data){
            console.log(data);
            procesData(data);
        }
        });
        function procesData(data){
            var content = data;
            console.log(content);

        }

}(jQuery));