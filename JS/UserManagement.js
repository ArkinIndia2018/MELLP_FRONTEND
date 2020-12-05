function getUsers() {    
    var table = $('#companyUsers').DataTable({
       
     
        "processing": true,
        "serverSide": false,
        "paging": true,
        "ordering": true,
        "info": true,
        "searching": true,
        "bFilter": true,
        "scrollX": "100%",
        "scrollY": ($(window).height() - 900),
        "sScrollXInner": "100%",
        "bScrollCollapse": true,            
        "ajax": {                    
           "url": 'http://139.59.8.1/api/Users',
           "dataSrc": "",
            "type": "GET",

          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' ,
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
        },
    
        },

        "bDestroy": true,
        "bLengthChange": true,
        "bPaginate": true,
        "sEmptyTable": "Loading data from server",

        "columns": [
            { "data": "name" },
            { "data": "email" },
            { "data": "user_type" },
            { "data": "is_active" }
            // { "data": "pan_no" },
            // { "data": "mobile_no" },
            // { "data": "is_director" },
            // { "data": "is_promoter" }
        
        ]

    });

    
}

function saveUserInformation() {
   // alert("in create director setting")  
   
        var name = $("#userFullName").val();       
         var email=$("#userEmail").val();
         var user_name=$("#username").val();
         var password=$("#password").val();
         var user_type=$("#userType").val();
        
       var userInfo=JSON.stringify({ 
     
        name:name,
        email:email,
        password: password, 
        user_name: user_name, 
        user_type:user_type, 
        is_active:"true", 
       profile_pic_url:"", 
       ips:"", 
       branches:"", 
       permissions:"['Master Record']"
      
 });
 //console.log(director),
      
                 $.ajax({
                     url: 'http://139.59.8.1/api/Users',
                     type: 'POST',
                     "datatype": "json",
                     headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' ,
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                    },
                   
               
                    "data": userInfo,

                 
                     success: function (result) {
                        toastr.success("Save successfully");
                        console.log(result)
     
     
                     }
                 });
          
     }