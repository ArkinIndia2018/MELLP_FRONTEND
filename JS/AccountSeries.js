function saveAccountSeries() {
  //  alert("In Account Series")
    var prefixEmployeeCode = $("#prefixEmployeeCode").val();
    var startNumberEmployeeCode = $("#startNumberEmployeeCode").val();
    var formatInDigitEmployeeCode = $("#formatInDigitEmployeeCode").val();    

    var prefixAgentCode = $("#prefixAgentCode").val();
    var startNumberAgentCode = $("#startNumberAgentCode").val();
    var formateInDigitAgentCode = $("#formateInDigitAgentCode").val();   
    
    var prefixVoucherNumber = $("#prefixVoucherNumber").val();
    var startNumberVoucherNumber = $("#startNumberVoucherNumber").val();
    var formatInDigitsVoucherCode = $("#formatInDigitsVoucherCode").val();   

    
    var seriesTypeMember = $('#seriesTypeMember').is(':checked');
    var prefixMemberNumber = $("#prefixMemberNumber").val();
    var startNumberMembershipNumber = $("#startNumberMembershipNumber").val();
    var formateInDigitsMemberNumber = $("#formateInDigitsMemberNumber").val();  
    
    var prefixApplicationNumber = $("#prefixApplicationNumber").val();
    var startNumberApplicationNumber = $("#startNumberApplicationNumber").val();
    var formateInDigitsApplicationNumber = $("#formateInDigitsApplicationNumber").val();  

    var prefixAccountNumber = $("#prefixAccountNumber").val();
    var startNumberAccountNumber = $("#startNumberAccountNumber").val();
    var formatInDigitsAccountNumber = $("#formatInDigitsAccountNumber").val();
    
    var prefixDepositApplicationNumber = $("#prefixDepositApplicationNumber").val();
    var startNumberDepositApplicationNumber = $("#startNumberDepositApplicationNumber").val();
    var formatInDigitsDepositApplicationNumber = $("#formatInDigitsDepositApplicationNumber").val();

    var prefixDepositAccountNumber = $("#prefixDepositAccountNumber").val();
    var startNumberDepositAccountNumber = $("#startNumberDepositAccountNumber").val();
    var formatInDigitsDepositAccountNumber = $("#formatInDigitsDepositAccountNumber").val();

    var prefixLoanApplicationNumber = $("#prefixLoanApplicationNumber").val();
    var startNumberLoanApplicationNumber = $("#startNumberLoanApplicationNumber").val();
    var formatInDigitsLoanApplicationNumber = $("#formatInDigitsLoanApplicationNumber").val();

    var prefixLoanAccountNumber = $("#prefixLoanAccountNumber").val();
    var startNumberLoanAccountNumber = $("#startNumberLoanAccountNumber").val();
    var formatInDigitsLoanAccountNumber = $("#formatInDigitsLoanAccountNumber").val();

    var prefixSavingApplication = $("#prefixSavingApplication").val();
    var startNumberSavingApplication = $("#startNumberSavingApplication").val();
    var formatInDigitsSavingApplication = $("#formatInDigitsSavingApplication").val();

    var prefixSavingAccount = $("#prefixSavingAccount").val();
    var startNumberSavingAccount = $("#startNumberSavingAccount").val();
    var formatInDigitsSavingAccount = $("#formatInDigitsSavingAccount").val();

    var prefixRecurringDepositApplication = $("#prefixRecurringDepositApplication").val();
    var startNumberRecurringDepositApplication = $("#startNumberRecurringDepositApplication").val();
    var formatInDigitsRecurringDepositApplication = $("#formatInDigitsRecurringDepositApplication").val();

    var prefixRecurringDepositAccount = $("#prefixRecurringDepositAccount").val();
    var startNumberRecurringDepositAccount = $("#startNumberRecurringDepositAccount").val();
    var formatInDigitsRecurringDepositAccount = $("#formatInDigitsRecurringDepositAccount").val();

    var prefixFixedDepositApplication = $("#prefixFixedDepositApplication").val();
    var startNumberFixedDepositApplication = $("#startNumberFixedDepositApplication").val();
    var formatInDigitsFixedDepositApplication = $("#formatInDigitsFixedDepositApplication").val();
    
    var prefixFixedDepositAccount = $("#prefixFixedDepositAccount").val();
    var startNumberFixedDepositAccount = $("#startNumberFixedDepositAccount").val();
    var formatInDigitsFixedDepositAccount = $("#formatInDigitsFixedDepositAccount").val();

    var prefixMisDepositApplication = $("#prefixMisDepositApplication").val();
    var startNumberMisDepositApplication = $("#startNumberMisDepositApplication").val();
    var formatInDigitsMISDepositApplication = $("#formatInDigitsMISDepositApplication").val();

    var prefixMisDepositAccount = $("#prefixMisDepositAccount").val();
    var startNumberMisDepositAccount = $("#startNumberMisDepositAccount").val();
    var formatInDigitsMISDepositAccount = $("#formatInDigitsMISDepositAccount").val();

    var prefixGoldLoanApplication = $("#prefixGoldLoanApplication").val();
    var startNumberGoldLoanApplication = $("#startNumberGoldLoanApplication").val();
    var formatInDigitsApplicationNumber = $("#formatInDigitsApplicationNumber").val();

    var prefixGoldLoanAccount = $("#prefixGoldLoanApplication").val();
    var startNumberGoldLoanAccount = $("#startNumberGoldLoanAccount").val();
    var formatInDigitsGoldLoanAccount = $("#formatInDigitsGoldLoanAccount").val();

    var prefixPropertyLoanApplication = $("#prefixPropertyLoanApplication").val();
    var startNumberPropertyLoanApplication = $("#startNumberPropertyLoanApplication").val();
    var formatInDigitsPropertyLoanApplication = $("#formatInDigitsPropertyLoanApplication").val();

    var prefixPropertyLoanAccount = $("#prefixPropertyLoanAccount").val();
    var startNumberPropertyLoanAccount = $("#startNumberPropertyLoanAccount").val();
    var formatInDigitsPropertyLoanAccount = $("#formatInDigitsPropertyLoanAccount").val();

    var prefixDepositLoanApplication = $("#prefixDepositLoanApplication").val();
    var startNumberDepositLoanApplication = $("#startNumberDepositLoanApplication").val();
    var formatInDigitsDepositLoanApplication = $("#formatInDigitsDepositLoanApplication").val();

    var prefixDepositLoanAccount = $("#prefixDepositLoanAccount").val();
    var startNumberDepositLoanAccount = $("#startNumberDepositLoanAccount").val();
    var formatInDigitsDepositLoanAccount = $("#formatInDigitsDepositLoanAccount").val();

    var prefixBusinessLoanApplication = $("#prefixBusinessLoanApplication").val();
    var startNumberBusinessLoanApplication = $("#startNumberBusinessLoanApplication").val();
    var formatInDigitsBusinessApplication = $("#formatInDigitsBusinessApplication").val();

    var prefixBusinessLoanAccount = $("#prefixBusinessLoanAccount").val();
    var startNumberBusinessLoanAccount = $("#startNumberBusinessLoanAccount").val();
    var formatInDigitsBusinessLoanAccount = $("#formatInDigitsBusinessLoanAccount").val();

    var prefixCashCreditApplication = $("#prefixCashCreditApplication").val();
    var startNumberCashCreditApplication = $("#startNumberCashCreditApplication").val();
    var formatInDigitsCashCreditApplication = $("#formatInDigitsCashCreditApplication").val();

    var prefixCashCreditAccount = $("#prefixCashCreditAccount").val();
    var startNumberCashcreditAccount = $("#startNumberCashcreditAccount").val();
    var formatInDigitsCashCreditAccount = $("#formatInDigitsCashCreditAccount").val();

    var prefixFixedEmiLoanApplication = $("#prefixFixedEmiLoanApplication").val();
    var startNumberFixedEmiLoanApplication = $("#startNumberFixedEmiLoanApplication").val();
    var formatInDigitsFixedEmiLoanApplication = $("#formatInDigitsFixedEmiLoanApplication").val();

    var prefixFixedEmilLoanAccount = $("#prefixFixedEmilLoanAccount").val();
    var startNumberFixedEmiLoanAccount = $("#startNumberFixedEmiLoanAccount").val();
    var formatInDigitsFixedEmiLoanAccount = $("#formatInDigitsFixedEmiLoanAccount").val();

    var prefixNoEmiLoanApplication = $("#prefixNoEmiLoanApplication").val();
    var startNumberNoEmiLoanApplication = $("#startNumberNoEmiLoanApplication").val();
    var formatInDigitsNoEmiLoanApplication = $("#formatInDigitsNoEmiLoanApplication").val();

    var prefixNoEmiLoanAccount = $("#prefixNoEmiLoanAccount").val();
    var startNumberNoEmiLoanAccount = $("#startNumberNoEmiLoanAccount").val();
    var formatInDigitsNoEmiLoanAccount = $("#formatInDigitsNoEmiLoanAccount").val();
    

   
    var req=[
             
           {document_name:"Employee Code no",series_type:"false",prefix:prefixEmployeeCode,start_no:startNumberEmployeeCode,format_in_digits:formatInDigitEmployeeCode},
           {document_name:"Agent Code No",series_type:"false",prefix:prefixAgentCode,start_no:startNumberAgentCode,format_in_digits:formateInDigitAgentCode},
           {document_name:"VOUCHER NO",series_type:"false",prefix:prefixVoucherNumber,start_no:startNumberVoucherNumber,format_in_digits:formatInDigitsVoucherCode},
           {document_name:"MEMBERSHIP NO",series_type:seriesTypeMember,prefix:prefixMemberNumber,start_no:startNumberMembershipNumber,format_in_digits:formateInDigitsMemberNumber},
           
           {document_name:"APPLICATION NO (IF SINGLE SERIES)",series_type:"false",prefix:prefixApplicationNumber,start_no:startNumberApplicationNumber,format_in_digits:formateInDigitsApplicationNumber},
           {document_name:"ACCOUNT NO (IF SINGLE SERIES)",series_type:"false",prefix:prefixAccountNumber,start_no:startNumberAccountNumber,format_in_digits:formatInDigitsAccountNumber},

           {document_name:"DEPOSIT APPLICATION NO",series_type:"false",prefix:prefixDepositApplicationNumber,start_no:startNumberDepositApplicationNumber,format_in_digits:formatInDigitsDepositApplicationNumber},
           {document_name:"DEPOSIT ACCOUNT NO",series_type:"false",prefix:prefixDepositAccountNumber,start_no:startNumberDepositAccountNumber,format_in_digits:formatInDigitsDepositAccountNumber},
           {document_name:"LOAN APPLICATION NO",series_type:"false",prefix:prefixLoanApplicationNumber,start_no:startNumberLoanApplicationNumber,format_in_digits:formatInDigitsLoanApplicationNumber},
           {document_name:"LOAN ACCOUNT NO",series_type:"false",prefix:prefixLoanAccountNumber,start_no:startNumberLoanAccountNumber,format_in_digits:formatInDigitsLoanAccountNumber},

           {document_name:"SAVING APPLICATION",series_type:"false",prefix:prefixSavingApplication,start_no:startNumberSavingApplication,format_in_digits:formatInDigitsSavingApplication},
           {document_name:"SAVING ACCOUNT",series_type:"false",prefix:prefixSavingAccount,start_no:startNumberSavingAccount,format_in_digits:formatInDigitsSavingAccount},
           {document_name:"RECURRING DEPOSIT APPLICATION",series_type:"false",prefix:prefixRecurringDepositApplication,start_no:startNumberRecurringDepositApplication,format_in_digits:formatInDigitsRecurringDepositApplication},
           {document_name:"RECURRING DEPOSIT ACCOUNT",series_type:"false",prefix:prefixRecurringDepositAccount,start_no:startNumberRecurringDepositAccount,format_in_digits:formatInDigitsRecurringDepositAccount},
           {document_name:"FIXED DEPOSIT APPLICATION",series_type:"false",prefix:prefixFixedDepositApplication,start_no:startNumberFixedDepositApplication,format_in_digits:formatInDigitsFixedDepositApplication},
           {document_name:"FIXED DEPOSIT ACCOUNT",series_type:"false",prefix:prefixFixedDepositAccount,start_no:startNumberFixedDepositAccount,format_in_digits:formatInDigitsFixedDepositAccount},
           {document_name:"MIS DEPOSIT APPLICATION",series_type:"false",prefix:prefixMisDepositApplication,start_no:startNumberMisDepositApplication,format_in_digits:formatInDigitsMISDepositApplication},
           {document_name:"GOLD LOAN APPLICATION",series_type:"false",prefix:prefixGoldLoanApplication,start_no:startNumberGoldLoanApplication,format_in_digits:formatInDigitsApplicationNumber},
           {document_name:"GOLD LOAN ACCOUNT",series_type:"false",prefix:prefixGoldLoanAccount,start_no:startNumberGoldLoanAccount,format_in_digits:formatInDigitsGoldLoanAccount},
           {document_name:"PROPERTY LOAN APPLICATION",series_type:"false",prefix:prefixPropertyLoanApplication,start_no:startNumberPropertyLoanApplication,format_in_digits:formatInDigitsPropertyLoanApplication},
           {document_name:"PROPERTY LOAN ACCOUNT",series_type:"false",prefix:prefixPropertyLoanAccount,start_no:startNumberPropertyLoanAccount,format_in_digits:formatInDigitsPropertyLoanAccount},
           {document_name:"DEPOSIT LOAN APPLICATION",series_type:"false",prefix:prefixDepositLoanApplication,start_no:startNumberDepositLoanApplication,format_in_digits:formatInDigitsDepositLoanApplication},
           {document_name:"DEPOSIT LOAN ACCOUNT",series_type:"false",prefix:prefixDepositLoanAccount,start_no:startNumberDepositLoanAccount,format_in_digits:formatInDigitsDepositLoanAccount},
           {document_name:"BUSINESS LOAN APPLICATION",series_type:"false",prefix:prefixBusinessLoanApplication,start_no:startNumberBusinessLoanApplication,format_in_digits:formatInDigitsBusinessApplication},
           {document_name:"BUSINESS LOAN ACCOUNT",series_type:"false",prefix:prefixBusinessLoanAccount,start_no:startNumberBusinessLoanAccount,format_in_digits:formatInDigitsBusinessLoanAccount},
           {document_name:"CASH CREDIT APPLICATION",series_type:"false",prefix:prefixCashCreditApplication,start_no:startNumberCashCreditApplication,format_in_digits:formatInDigitsCashCreditApplication},
           {document_name:"CASH CREDIT ACCOUNT",series_type:"false",prefix:prefixCashCreditAccount,start_no:startNumberCashcreditAccount,format_in_digits:formatInDigitsCashCreditAccount},
           {document_name:"FIXED EMI LOAN APPLICATION",series_type:"false",prefix:prefixFixedEmiLoanApplication,start_no:startNumberFixedEmiLoanApplication,format_in_digits:formatInDigitsFixedEmiLoanApplication},
           {document_name:"FIXED EMI LOAN ACCOUNT",series_type:"false",prefix:prefixFixedEmilLoanAccount,start_no:startNumberFixedEmiLoanAccount,format_in_digits:formatInDigitsFixedEmiLoanAccount},
           {document_name:"NO EMI LOAN APPLICATION",series_type:"false",prefix:prefixNoEmiLoanApplication,start_no:startNumberNoEmiLoanApplication,format_in_digits:formatInDigitsNoEmiLoanApplication},
           {document_name:"NO EMI LOAN ACCOUNT",series_type:"false",prefix:prefixNoEmiLoanAccount,start_no:startNumberNoEmiLoanAccount,format_in_digits:formatInDigitsNoEmiLoanAccount},





                            
]
            $.ajax({
                url: 'http://139.59.8.1/api/AccountSeries',
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
                    toastr.success("Save successfully");
                   console.log(result)


                }
            });      
}