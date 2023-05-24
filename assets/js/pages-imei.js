$('#formCheckIMEI').submit(function (e) {
e.preventDefault();
      $.ajax({
         url: "https://api.nabil.my.id/cekImeiKemenperin",
         type: "POST",
         dataType: "JSON",
         data: 'imei=' + $(this).serialize(),
         success: function (data) {

            console.log(data);

            if (data.status == "failed") {
               $.notify({
                  message: data.message
               }, {
                  type: "danger",
                  timer: 1000,
                  placement: {
                     from: 'top',
                     align: 'align-right'
                  }
               });
            } else {
               $.notify({
                  message: data.message
               }, {
                  type: "info",
                  timer: 1000,
                  placement: {
                     from: 'top',
                     align: 'align-right'
                  }
               });
            }

         },
         error: function (jqXHR, textStatus, errorThrown) {
            $.notify({
               message: "Mohon maaf sepertinya ada masalah dengan server."
            }, {
               type: "info",
               timer: 1000,
               placement: {
                  from: 'top',
                  align: 'align-right'
               }
            });
         }
      });


});
