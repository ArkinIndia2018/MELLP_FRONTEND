

function saveEmailSettings() {
//alert("in email setting")
    //var ssl_required = $('#SSL').is(':checked');
    var ssl_required = $('#SSL').is(':checked');
    var mail_server = $("#mailServer").val();
   
     var smtp_port=$("#smtPort").val();
     var display_name=$("#displayName").val();
     var username=$("#username").val();
     var password=$("#password").val();
   // console.log(password)
   //  alert("In email setting")
 
  
             $.ajax({
                 url: 'http://139.59.8.1/api/EmailSettings',
                 type: 'POST',
                 "datatype": "json",
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' ,
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                },
                "data": JSON.stringify({ 
                    ssl_required: ssl_required, 
                    mail_server: mail_server, 
                    smtp_port:smtp_port, 
                    display_name:display_name, 
                    username: username, 
                    password: password 
                                   
             }),
             
                 success: function (result) {
                    //  $('#divLoader').hide();
 
                    //  if (result.Status == true) {
                    //      toastr.success("Mail sent successfully to all Pre-Primary schools");
                    //      $('#divLoader').hide();
 
                    //  }
                    //  else if (result.Status == false) {
 
                    //      alert("Something went wrong");
                    //      $('#divLoader').hide();
 
                    //  }
                    toastr.success("Save successfully");
                    console.log(result)
 
 
                 }
             });
      
 }



 

function getEmailSettings() {
         
                 $.ajax({
                     url: 'http://139.59.8.1/api/EmailSettings',
                     type: 'GET',
                     "datatype": "json",
                     headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' ,
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                    },
                                
                     success: function (result) {
                        $("#mailServer").val(result[0].mail_server);
                        $("#smtPort").val(result[0].smtp_port);
                        $("#displayName").val(result[0].display_name);
                     
                      //  $("#letterHeadSecond").val(result.password);
                      
                        $("#username").val(result[0].username);
                        $("#SSL").prop('checked', result[0].ssl_required);
                        console.log(result)
     
     
                     }
                 });
          
     }