
      function saveMembers() {
        alert("in create director setting")  
       // var isDirector = $('#isDirector').is(':checked');
       // var isPromoter = $('#isPromoter').is(':checked');    
           
            var enrollment_date = $("#enrollmentDate").val();       
             var gender=$("#gender").val();
             var name=$("#promoterDirectorsName").val();
             var address1=$("#addressOne").val();
             var address2=$("#addressTwo").val();
             var state=$("#state").val();

             var district=$("#district").val();
             var pincode=$("#pinCode").val();
           //  var mobile_number=$("#contry").val();
             var dob=$("#dateOfBirth").val();
             var marital_status=$("#maritalStatus").val();
             var occupation=$("#occupation").val();
             var mobile_no=$("#mobileNumber").val();
             var email=$("#email").val();
             var aadhar_no=$("#aadharNumber").val();
             var pan_no=$("#pan").val();
             var relative_name=$("#relativesName").val();
             var mother_name=$("#motherName").val();
             var group=$("#memberGroup").val();
             var introducer_member_name=$("#introducerName").val();
             var monthly_income=$("#monthlyIncome").val();
           //  var din_no=$("#din").val();
           //  var appointment_date=$("#appointmentDate").val();
             var ifsc_code=$("#iFSCode").val();
             var bank_name=$("#bankName").val();
             var bank_address=$("#address").val();
             var account_type=$("#accountType").val();
             var account_no=$("#accountNumber").val();
          
           //  alert("In save company profile")
         
          
                     $.ajax({
                         url: 'http://139.59.8.1/api/Member',
                         type: 'POST',
                         "datatype": "json",
                         headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json' ,
                            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                        },
                        "data": JSON.stringify({ 
                            // is_director:isDirector,
                            // is_promoter:isPromoter,
                            is_director:false,
                            is_promoter:true,
                           enrollment_date: enrollment_date, 
                            gender: gender, 
                            name:name, 
                            address1:address1, 
                            address2: address2, 
                            state: state,
                            district:district,
                            pincode:pincode,
                            dob:dob,
                            marital_status:marital_status,
                            occupation:occupation,
                            mobile_no:mobile_no,
                            email:email,
                            aadhar_no:aadhar_no,
                            pan_no:pan_no,
                            relative_name:relative_name,
                            mother_name:mother_name,
                            din_no:"",
                            appointment_date:"",
                            ifsc_code:ifsc_code,
                            bank_name:bank_name,                     
                            bank_address:bank_address,
                            account_type:account_type,
                            account_no:account_no,
                            password:"qw",
                            group:group,
                            monthly_income:monthly_income,
                            introducer_member_name:introducer_member_name,
                            role:"Member"



                                           
                     }),
                     
                         success: function (result) {
                          toastr.success("Save successfully");
                            console.log(result)
         
         
                         }
                     });
              
         }
     function getMembers() {    
          var table = $('#members').DataTable({
             
           
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
                 "url": 'http://139.59.8.1/api/Member',
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
                //  { "data": "din_no" },
                //  { "data": "appointment_date" },
                  { "data": "district" },
                  { "data": "pan_no" },
                  { "data": "mobile_no" },
                 // { "data": "is_director" },
                //  { "data": "is_promoter" }
              
              ]
      
          });
     
          
      }