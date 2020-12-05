function login() {
  
        //alert("In Login")
          var userName=$("#username").val();
          var Password=$("#password").val();              
       
                  $.ajax({
                      url: 'http://139.59.8.1/api/Users/login',
                      type: 'POST',
                      "datatype": "json",
                      headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json' ,
                       //  Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                     },
                     "data": JSON.stringify({ 
                         
                         username: userName, 
                         password:Password
                        
                  }),
                  
                      success: function (result) {
                        console.log(result)
                        if(result.state=="fail")
                        {
                          alert(result.msg)
                        }
                        //alert("save successfully")
                        else
                        {
                      //  $.cookie('token',result.token)
                     // $.cookie("Name", result.token);
                        window.location = "http://127.0.0.1:5500/dashboard.html";
                        }
      
      
                      }
                      
                  });
           
      }
 