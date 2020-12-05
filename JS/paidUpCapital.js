function savePaidupCapital() {
   // alert("in email setting")      
       // var ssl_required = "true";
        var date = $("#date").val();       
         var authorized_capital=$("#authorisedCapital").val();
         var paid_up_capital=$("#paidUpCapital").val();              
        // alert("In save PaidUp capital")
     
      
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
                        date: date, 
                        authorized_capital: authorized_capital, 
                        paid_up_capital:paid_up_capital
                       
                 }),
                 
                     success: function (result) {
                      // alert("save successfully")
                      toastr.success("Save successfully");
                        console.log(result)
     
     
                     }
                 });
          
     }

    
     function getPaidupCapitalReport() {
 
      //  $('#divLoader').show();       
        var table = $('#paidUpCapital').DataTable({
           
         
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
               "url": 'http://139.59.8.1/api/Capital',
               "dataSrc": "",
                "type": "GET",
    
              //  "datatype": "json",
              //  "data": { SchoolType: SchoolType, dateby: StatusByDate, StaffType: StaffType, Schools: Schools, TeachingPosition: Position, SubCast: SubCast, Religion: Religion, TeachingSubjects: Subjects, Education: Education, BusinessEducation: BusinessEducation, Hobbies: Hobbies, Standards: Standards, PayGrade: PayGrade, SelectionGrade: SelectionGrade, Traning: Traning, Member: Member, Gender: Gender, MaritalStatus: MaritalStatus, Awards: Awards, ComputerTraning: ComputerTraining, Medium: SchoolMedium, OtherRetirenment: OtherRetirenment }
    
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' ,
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOGYwMTZlMC1iNTM3LTQxMjctYmQyYy04Mzg2OGE5MDA5OTAiLCJpZCI6IjEiLCJyb2xlIjoiQWRtaW4iLCJuYW1lIjoiTW9oaXQgRGl4aXQiLCJlbWFpbCI6Im1tZDI2LmFrYUBnbWFpbC5jb20iLCJleHAiOjE2MDY4MDM1NzMsImlzcyI6Imh0dHBzOi8vbWVsbHAuY29tIiwiYXVkIjoiaHR0cHM6Ly9tZWxscC5jb20ifQ.16yPs-NXVZ8soJZKgp6Qqy-DRuCnBT2NyblrFJwIUCU'
            }
            // success: function (data) {
              
            //    console.log(data)
               
              
    
            // },
            },
    
            "bDestroy": true,
            "bLengthChange": true,
            "bPaginate": true,
            "sEmptyTable": "Loading data from server",

            "columns": [
                { "data": "date" },
                { "data": "paid_up_capital" },
                { "data": "authorized_capital" }
              //  { "data": "extn" },
              //  { "data": "start_date" },
              //  { "data": "salary" }
            ]
    
            // "columns": [
    
            //     {
    
            //         "sWidth": "6%",
            //         "sClass": "TextCenter PID",
    
            //         "visible": false,
        
            //         "render": function (data, type, row) {
    
    
            //            // console.log(data)
            //             return row[0].Date;
    
            //         }
    
    
            //     },
    
            //     {
    
            //         "sWidth": "6%",
            //         "sClass": "TextCenter Name",
    
            //         "render": function (data, type, row) {
    
            //             return row.Paid_Up_Capital;
    
            //         }
            //     },
            //     {
    
            //         "sWidth": "6%",
    
            //         "sClass": "TextCenter SchoolId",
    
            //         "render": function (data, type, row) {
                       
    
            //             return row.authorized_capital
    
    
    
    
            //         }
            //     },
    
    
              
            // ],
    
        });
   
        
    }