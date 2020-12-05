function savePaidupCapital() {
    alert("in email setting")      
       // var ssl_required = "true";
        var group = $("#groupName").val();       
         var authorized_capital=$("#underGroup").val();
         var paid_up_capital=$("#remark").val();              
         alert("In save PaidUp capital")
     
      
                 $.ajax({
                     url: 'http://139.59.8.1/api/Capital',
                     type: 'POST',
                     "datatype": "json",
                     headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' ,
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                    },
                    "data": JSON.stringify({ 
                        groupName: date, 
                        authorized_capital: authorized_capital, 
                        paid_up_capital:paid_up_capital
                       
                 }),
                 
                     success: function (result) {
                       
                        console.log(result)
     
     
                     }
                 });
          
     }