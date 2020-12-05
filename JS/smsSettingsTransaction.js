function saveTransactionSettings() {
     var isPending = $("#isActiveTransactionPending").val();
     var isApproved = $("#isActiveTransactionApproved").val();
     var isDisApproved = $("#isActiveTransactionDissapproved").val();
     var setting_type="Transactions";
     var PendingEvent="Pending";
     var PendingMessage="	DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. PAYMENT IS SUBJECT TO APPROVAL."   

     var ApprovedEvent="Approved";
     var ApprovedMessage="DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. THE AVAILABLE BALANCE IS INR #AVAILABLEBALANCE#."   

     var DisApprovedEvent="DisApproved";
     var DisApprovedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   
     var req=[{ 
                    
        setting_type: setting_type, 
        settings:
        [
            {event:PendingEvent,message:PendingMessage,isActive:isPending},
            {event:ApprovedEvent,message:ApprovedMessage,isActive:isApproved},
            {event:DisApprovedEvent,message:DisApprovedMessage,isActive:isDisApproved},
        ],  
                                  
 }]
             $.ajax({
                 url: 'https://139.59.8.1/api/SMSSettings/',
                 type: 'POST',
                 "datatype": "json",  
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' ,
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                },    

                "data": JSON.stringify({'request':JSON.stringify(req)}),
              
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


 function saveSavingAccountSettings() {
    var isOpen = $("#IsSavingAccountOpen").val();
    var isApproved = $("#IsSavingAccountApproved").val();
    var isNotApproved = $("#IsSavingAccountNotApproved").val();
    var isClosed = $("#IsSavingAccountClosed").val();

    var setting_type="Saving_Account";
    var OpenEvent="Open";
    var OpenMessage="	DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. PAYMENT IS SUBJECT TO APPROVAL."   

    var ApprovedEvent="Approved";
    var ApprovedMessage="DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. THE AVAILABLE BALANCE IS INR #AVAILABLEBALANCE#."   

    var NotApprovedEvent="Not_Approved";
    var NotApprovedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   

    var Closed="Closed";
    var NotApprovedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   
    var req=[{ 
                   
        setting_type: setting_type, 
        settings:
        [
         {event:OpenEvent,message:OpenMessage,isActive:isOpen},
            {event:PendingEvent,message:PendingMessage,isActive:isPending},
            {event:ApprovedEvent,message:ApprovedMessage,isActive:isApproved},
            {event:NotApprovedEvent,message:NotApprovedMessage,isActive:isNotApproved},
            {event:Closed,message:NotApprovedMessage,isActive:isClosed},
        ],  
                                  
 }]
            $.ajax({
                url: 'http://139.59.8.1/api/',
                type: 'POST',
                "datatype": "json",  
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' ,
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                },           
               "data": JSON.stringify({'request':JSON.stringify(req)} ),
             
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


function saveRdAccountSettings() {
    var isOpen = $("#IsRDAccountOpen").val();
    var isApproved = $("#IsRDAccountApproved").val();
    var isNotApproved = $("#IsRdAccountNotApproved").val();
    var isMatured = $("#IsRdAccountMatured").val();
    var iClosed = $("#IsRdClosed").val();

    var setting_type="RD_Account";
    var OpenEvent="Open";
    var OpenMessage="	DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. PAYMENT IS SUBJECT TO APPROVAL."   

    var ApprovedEvent="Approved";
    var ApprovedMessage="DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. THE AVAILABLE BALANCE IS INR #AVAILABLEBALANCE#."   

    var NotApprovedEvent="Not_Approved";
    var NotApprovedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   

    var Matured="Matured";
    var MaturedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   

    var Close="Matured";
    var CloseMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   
    var req=[{ 
                   
        setting_type: setting_type, 
        settings:
        [
         {event:OpenEvent,message:OpenMessage,isActive:isOpen},
            {event:PendingEvent,message:PendingMessage,isActive:isPending},
            {event:ApprovedEvent,message:ApprovedMessage,isActive:isApproved},
            {event:NotApprovedEvent,message:NotApprovedMessage,isActive:isNotApproved},
            {event:Matured,message:MaturedMessage,isActive:isMatured},
            {event:Closed,message:NotApprovedMessage,isActive:isClosed},
        ],  
                                  
 }]
            $.ajax({
                url: 'http://139.59.8.1/api/',
                type: 'POST',
                "datatype": "json",  
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' ,
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                },           
               "data": JSON.stringify({'request':JSON.stringify(req)}),
             
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

function saveFdAccountSettings() {
    var isOpen = $("#IsFdOpen").val();
    var isApproved = $("#IsFdApproved").val();
    var isNotApproved = $("#IsFdNotApproved").val();
    var isMatured = $("#IsRdAccountMatured").val();
    var iClosed = $("#IsRdClosed").val();

    var setting_type="RD_Account";
    var OpenEvent="Open";
    var OpenMessage="	DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. PAYMENT IS SUBJECT TO APPROVAL."   

    var ApprovedEvent="Approved";
    var ApprovedMessage="DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. THE AVAILABLE BALANCE IS INR #AVAILABLEBALANCE#."   

    var NotApprovedEvent="Not_Approved";
    var NotApprovedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   

    var Matured="Matured";
    var MaturedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   

    var Close="Matured";
    var CloseMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   
    var req=[{ 
                   
        setting_type: setting_type, 
        settings:
        [
         {event:OpenEvent,message:OpenMessage,isActive:isOpen},
            {event:PendingEvent,message:PendingMessage,isActive:isPending},
            {event:ApprovedEvent,message:ApprovedMessage,isActive:isApproved},
            {event:NotApprovedEvent,message:NotApprovedMessage,isActive:isNotApproved},
            {event:Matured,message:MaturedMessage,isActive:isMatured},
            {event:Closed,message:NotApprovedMessage,isActive:isClosed},
        ],  
                                  
 }]
            $.ajax({
                url: 'http://139.59.8.1/api/',
                type: 'POST',
                "datatype": "json",  
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' ,
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                },           
               "data": JSON.stringify({'request':JSON.stringify(req)}),
             
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

function saveGoldLoanSettings() {
    var isOpen = $("#IsGoldLoanOpen").val();
    var isApproved = $("#IsGoldLoanApproved").val();
    var isNotApproved = $("#IsGoldLoanNotApproved").val();
    var isDisbursed = $("#IsGoldLoanDisbursed").val();
    var iClosed = $("#IsRdClosed").val();

    var setting_type="RD_Account";
    var OpenEvent="Open";
    var OpenMessage="	DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. PAYMENT IS SUBJECT TO APPROVAL."   

    var ApprovedEvent="Approved";
    var ApprovedMessage="DEAR CUSTOMER, YOUR ACCOUNT #ACCOUNTNO# HAS BEEN #TRANSACTIONTYPE# WITH INR #TRANSACTIONAMOUNT# ON #TRANSACTIONDATE#. THE AVAILABLE BALANCE IS INR #AVAILABLEBALANCE#."   

    var NotApprovedEvent="Not_Approved";
    var NotApprovedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   

    var Matured="Matured";
    var MaturedMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   

    var Close="Matured";
    var CloseMessage="DEAR CUSTOMER, YOUR TRANSACTION OF INR #TRANSACTIONAMOUNT# DATED #TRANSACTIONDATE# IS DISAPPROVED. FROM:NDIEXP"   
    var req=[{ 
                   
        setting_type: setting_type, 
        settings:
        [
         {event:OpenEvent,message:OpenMessage,isActive:isOpen},
            {event:PendingEvent,message:PendingMessage,isActive:isPending},
            {event:ApprovedEvent,message:ApprovedMessage,isActive:isApproved},
            {event:NotApprovedEvent,message:NotApprovedMessage,isActive:isNotApproved},
            {event:Matured,message:MaturedMessage,isActive:isMatured},
            {event:Closed,message:NotApprovedMessage,isActive:isClosed},
        ],  
                                  
 }]
            $.ajax({
                url: 'http://139.59.8.1/api/',
                type: 'POST',
                "datatype": "json",  
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' ,
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
                },           
               "data": JSON.stringify({'request':JSON.stringify(req)}),
             
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









 