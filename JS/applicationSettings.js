function saveAppliationSettings() {

  // var Subject = $('#letterHeadFdBond').is(':checked');
    var face_value = $("#faceValue").val(); 

    var share_certificate_issuing_date=$("#shareIssuingDate").val();

    var first_authorized_signatory=$("#firstSignatory").val();

    var second_authorized_signatory=$("#secondSignatory").val();

    var promoter_for_share_transfer=$("#promotorShareTransfer").val();

    var letter_head_title_first=$("#letterHeadFirst").val();

    var letter_head_title_second=$("#letterHeadSecond").val();

    var show_letter_head_in_fd_bond = $('#letterHeadFdBond').is(':checked');
  
    var show_letter_head_in_rd_bond=$("#letterHeadRdBond").is(':checked');

    var show_letter_head_in_mis_bond=$("#letterHeadMisBond").is(':checked');

    var show_letter_head_top_margin_status=$("#letterHeadTopMarginStatus").is(':checked');    
     
    var show_letter_head_top_margin_value=$("#letterHeadTopMarginValue").val();

    var show_associate_name_receipt_format_status=$("#associateNameStatus").is(':checked');
   
    var show_associate_name_receipt_format_value=$("#receipetFormat").val();

    var otp_on_withdrawl_from_saving_account=$("#otpWithdrawl").is(':checked');
    
    var auto_approval_limit_for_transaction=$("#autoApprovalLimitForTransaction").val();

    var auto_approval_limit_for_collecting_payments=$("#autoApprovalLimitForPaymentCollection").val();

    var auto_approval_limit_payout=$("#autoApprovalLimitPayout").val();

    var application_theme=$("#applicationTheme").val();

    var customer_portal_url=$("#customerPortalUrl").val();

    var enable_two_factor_auth=$("#twoFactorAuth").is(':checked'); 
   
    var do_not_allow_duplicate_mobile_number=$("#duplicateMobileNumber").is(':checked');

    var allow_user_to_edit_penalty_charges=$("#allowPenaltyCharges").is(':checked');     

   var is_tds_applicable=$("#isTdsApplicable").is(':checked'); 
  
    var tds_rate=$("#tdsRate").val();

    var tax_deduction_limit=$("#taxDeductionLimit").val()

   
    $('#divLoader').show();
   // if (Subject != "" && Content != "") {
      //  if (size <= 10000) {
            $.ajax({
                url: 'http://139.59.8.1/api/ApplicationSettings',
                type: 'POST',
                "datatype": "json",
               // url: 'https://localhost:5001/api/ApplicationSettings/',
               headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' ,
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
            },

               "data": JSON.stringify( {                
                face_value: face_value,

                share_certificate_issuing_date: share_certificate_issuing_date, 

                first_authorized_signatory: first_authorized_signatory, 

                second_authorized_signatory: second_authorized_signatory, 

                promoter_for_share_transfer: promoter_for_share_transfer, 

                letter_head_title_first: letter_head_title_first, 

                letter_head_title_second: letter_head_title_second, 

               show_letter_head_in_fd_bond: show_letter_head_in_fd_bond, 
             
                show_letter_head_in_rd_bond: show_letter_head_in_rd_bond, 
              
               show_letter_head_in_mis_bond: show_letter_head_in_mis_bond, 
              
                show_letter_head_top_margin_status:show_letter_head_top_margin_status, 

              show_letter_head_top_margin_value:show_letter_head_top_margin_value, 

               show_associate_name_receipt_format_status:show_associate_name_receipt_format_status, 

                show_associate_name_receipt_format_value:show_associate_name_receipt_format_value ,

                otp_on_withdrawl_from_savings_account:otp_on_withdrawl_from_saving_account,

                auto_approval_limit_for_transaction:auto_approval_limit_for_transaction, 

                auto_approval_limit_for_collecting_payments:auto_approval_limit_for_collecting_payments,

                auto_approval_limit_payout:auto_approval_limit_payout,

                application_theme:application_theme, 

                customer_portal_url:customer_portal_url,  

                enable_two_factor_auth:enable_two_factor_auth,  

                do_not_allow_duplicate_mobile_no: do_not_allow_duplicate_mobile_number,

                allow_user_to_edit_penalty_charges:allow_user_to_edit_penalty_charges,

                is_tds_applicable:is_tds_applicable,

                tds_rate:tds_rate,

                tax_deduction_limit:tax_deduction_limit,


            }),
             
                success: function (response) {
                    console.log(response)
                    toastr.success("Save successfully");
                    
                }
            });
     
}



function AppliationSettingsGet() {

    
              $.ajax({
                  url: 'http://139.59.8.1/api/ApplicationSettings',
                  type: 'GET',
                  "datatype": "json",
              
                 headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json' ,
                  Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
              },
  
                  success: function (response) {
                      console.log(response)
                   
                      console.log(response[0].share_certificate_issuing_date)
                      $("#faceValue").val(response[0].face_value);
                      $("#shareIssuingDate").val(response[0].share_certificate_issuing_date);
                      $("#firstSignatory").val(response[0].first_authorized_signatory);
                      $("#secondSignatory").val(response[0].second_authorized_signatory);
                      $("#promotorShareTransfer").val(response[0].promoter_for_share_transfer);
                      $("#letterHeadFirst").val(response[0].letter_head_title_first);
                      $("#letterHeadSecond").val(response[0].letter_head_title_second);

                      $("#letterHeadFdBond").prop('checked', response[0].show_letter_head_in_fd_bond);
                      $("#letterHeadRdBond").prop('checked', response[0].show_letter_head_in_rd_bond);
                      $("#letterHeadMisBond").prop('checked', response[0].show_letter_head_in_mis_bond);
                      $("#letterHeadTopMarginStatus").prop('checked', response[0].show_letter_head_top_margin_status);
                     
                      

                      $("#letterHeadTopMarginValue").val(response[0].show_letter_head_in_mis_value);
                      $("#associateNameStatus").prop('checked',response[0].show_associate_name_receipt_format_status);
                    
                      $("#receipetFormat").val(response[0].show_associate_name_receipt_format_value);
                      $("#otpWithdrawl").prop('checked',response[0].otp_on_withdrawl_from_saving_account);
                      
                      $("#autoApprovalLimitForTransaction").val(response[0].auto_approval_limit_for_transaction);
                      $("#autoApprovalLimitForPaymentCollection").val(response[0].auto_approval_limit_for_collecting_payments);
                      $("#autoApprovalLimitPayout").val(response[0].auto_approval_limit_payout);
                      $("#applicationTheme").val(response[0].application_theme);
                      $("#customerPortalUrl").val(response[0].customer_portal_url);
                      $("#twoFactorAuth").prop('checked',response[0].enable_two_factor_auth);
                      
                      $("#duplicateMobileNumber").prop('checked',response[0].do_not_allow_duplicate_mobile_no);
                      $("#allowPenaltyCharges").prop('checked',response[0].allow_user_to_edit_penalty_charges);
                    
                     

                      $("#isTdsApplicable").prop('checked', response[0].is_tds_applicable);
                    
                      $("#tdsRate").val(response[0].tds_rate);
                      $("#taxDeductionLimit").val(response[0].tax_deduction_limit);
 // console.log(response)
                   
                  }
              });
       
  }