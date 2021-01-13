

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

    $("#input-burger-button").on("click",function(){
       
        let send = {

            burger:$("#new-burger").val(),
            value: 0

        };

        console.log(send);
        
        $.ajax("/api/burgers",{
                type:"POST",
                data:send
        }).then(function(){
            location.reload();
        })
        
    })


});