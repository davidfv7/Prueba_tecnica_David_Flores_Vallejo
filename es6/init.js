window.$ = require('jquery');
export default function dataStore(){
    var jsonData=[];
    $.ajax({
        url: '../jsons/dummy.json',
        dataType: 'json',
        async:false,
        success: function(data) {
            
            $.each(data, function(key, val) {
                
               jsonData.push(val)
           });
    
          
    
        },
       statusCode: {
          404: function() {
            alert('There was a problem with the server.  Try again soon!');
          }
        }
     });
     return jsonData;
}
