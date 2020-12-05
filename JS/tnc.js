
function saveTermsAndConditions() {
   // alert("hi")
    var rdMsg = tinymce.get('rd').getContent();
    console.log(rdMsg)
     var rdMsg = $("#rd").val();
     var fdMsg=$("#fd").val();
     var misMsg=$("#mis").val();
     var sanctionMsg=$("#sanction").val();
    
     console.log(rdMsg)
     alert("In TNC")
     

             $.ajax({
                 url: 'http://139.59.8.1/api/TermsAndConditions',
                 type: 'POST',
                 "datatype": "json",            
                "data": { 
                    request: [{tc_type:"rd"},{tc_type:"fd"},{tc_type:"mis"},{tc_type:"sanction_letter"}], 
                   // settings:"[{event:event,message:message,isActive:isActive}]",              
             },
              
                 success: function (result) {
                     $('#divLoader').hide();
 
                     if (result.Status == true) {
                         toastr.success("Mail sent successfully to all Pre-Primary schools");
                         $('#divLoader').hide();
 
                     }
                     else if (result.Status == false) {
 
                         alert("Something went wrong");
                         $('#divLoader').hide();
 
                     }
 
 
                 }
             });
      
 }