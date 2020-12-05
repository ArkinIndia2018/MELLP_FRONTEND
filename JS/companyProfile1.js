function saveCompanyProfile() {
   // alert("in email setting")      
       // var ssl_required = "true";
        var name = $("#fullName").val();       
         var alias=$("#alias").val();
         var address1=$("#addressOne").val();
         var address2=$("#addressTwo").val();
         var state=$("#state").val();
         var district=$("#district").val();
         var pincode=$("#pinCode").val();
         var country=$("#contry").val();
         var mobile_number=$("#mobileNumber").val();
         var landline_number=$("#landlineNumber").val();
         var email=$("#emailAddress").val();
         var website=$("#webAddress").val();
         var cin_no=$("#cin").val();
         var gstin_no=$("#gstin").val();
         var pan_no=$("#pan").val();
         var incorporation_date=$("#incorporationDate").val();
      
        // alert("In save company profile")
     
      
                 $.ajax({
                     url: 'http://139.59.8.1/api/Company',
                     type: 'POST',
                     "datatype": "json",
                     headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' ,
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                    },
                    "data": JSON.stringify({ 
                        name: name, 
                        alias: alias, 
                        address1:address1, 
                        address2:address2, 
                        state: state, 
                        district: district,
                        pincode:pincode,
                        country:country,
                        mobile_number:mobile_number,
                        landline_number:landline_number,
                        email:email,
                        website:website,
                        cin_no:cin_no,
                        gstin_no:gstin_no,
                        pan_no:pan_no,
                        incorporation_date:incorporation_date
                                       
                 }),
                 
                     success: function (result) {
                       alert("save successfully")
                        console.log(result)
     
     
                     }
                 });
          
     }

     function getCompanyProfile(){

        $.ajax({
            type: 'GET',
    
            url: 'http://139.59.8.1/api/Company',
          //  dataType: 'json',
           // data: {},
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' ,
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
        },
            success: function (data) {
                if (data != "null") {
                   // var x = document.getElementById("tbodyPrincipal");
                    //x.style.display = "block";
                 //   var html = '';
                   
                   // html += '<tr>';
    
                  //  htmlCompanyName += data[0].name ;
    
    
                    //html += '<td style="cursor: pointer;"><a onclick="deletePrincipal()"> Delete </a></td>';
                    //html += '</tr>';
                  
                }
                // else {
                //     var x = document.getElementById("tbodyPrincipal");
                //     x.style.display = "none";
                // }
              //  $('#divLoader').hide();
                $('.companyName').html(data[0].name);
                $('.companyAddress').html(data[0].address1 +" "+ data[0].address2);
                $('.mobileNumber').html(data[0].mobile_no);
                $('.landlineNumber').html(data[0].landline_no);
                $('.emailAddress').html(data[0].email);
                $('.websiteAddress').html(data[0].website);
                $('.CIN').html(data[0].cin_no);
                $('.GSTIn').html(data[0].gstin_no);
                $('.PAN').html(data[0].pan_no);
                $('.incorporationDate').html(data[0].incorporation_date);
               // $('.authorisedCapital').html(data[0].incorporation_date);
                //$('.companyAddress').html(data[0].address);
               console.log(data)
               // console.log(data[0].name)
    
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
     }

     function existingCompanyProfile()
     {
        $.ajax({
            type: 'GET',
    
            url: 'http://139.59.8.1/api/Company',
          //  dataType: 'json',
           // data: {},
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' ,
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
        },
            success: function (data) {               
                $('#companyName').val(data[0].name);
                $('#alias').val(data[0].alias);
                $('#companyAddressOne').val(data[0].address1);
                $('#companyAddressTwo').val(data[0].address2);
                $('#state').val(data[0].state);
                $('#district').val(data[0].district);
                $('#pinCode').val(data[0].pincode);
                $('#country').val(data[0].country);
                 $('#mobileNumber').val(data[0].mobile_no);
                 $('#landlineNumber').val(data[0].landline_no);
                 $('#emailAddress').val(data[0].email);              
                $('#webAddress').val(data[0].website);
                 $('#cin').val(data[0].cin_no);
                $('#gstin').val(data[0].gstin_no);
               $('#pan').val(data[0].pan_no);
                $('#incorporationDate').val(data[0].incorporation_date);
           
               console.log(data)
           
    
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
     }