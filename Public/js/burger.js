$(function(){
    $(".devour-button").on("click",function(){

        let id = this.id;
        
        let send = {
            status:"devoured",
            value: 1

        };

        $.ajax("/api/burgers/"+id,{
                type:"PUT",
                data:send
        }).then(function(){
            location.reload();
        })
        
    });

    $("#input-burger-button").on("click",function(event){
        event.preventDefault();

        let send = {

            burger:$("#new-burger").val(),
            type:"burger_name"

        };

        $.ajax("/api/burgers",{
                type:"POST",
                data:send
        }).then(function(){
            console.log("success");
            location.reload();
        })
        
    })

    $(".delete-button").on("click",function(){

        let id = this.id;
        
       

        $.ajax("/api/burgers/"+id,{
                type:"DELETE",
               
        }).then(function(){
            location.reload();
        })
        
    });

    $(".log-button").on("click",function(){

        let id = this.id;
        
        let send = {
            status:"devoured",
            value: 0

        };

        $.ajax("/api/burgers/"+id,{
                type:"PUT",
                data:send
        }).then(function(){
            location.reload();
        })
        
    });


});