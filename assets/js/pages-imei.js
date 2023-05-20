function Fn_submit() {
   $('#formCheckIMEI').submit(function (e) {
      e.preventDefault();
      var dataform = $(this).serialize();
      var delayInMilliseconds = 3500; //1 second

      return new Promise(resolve => {
         axios.request({
            url: "https://api.nabil.my.id/cekImeiKemenperin",
            method: "POST",
            data: "imei=" + document.getElementsByName("imei")[0].value
         }).then(hasil => {
            hasil = JSON.stringify(hasil.data);
            hasil = JSON.parse(hasil);
            resolve(hasil);

            console.log(hasil);
			
            if (hasil.status == "failed") {
               $.notify({
                  message: hasil.message
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
                  message: hasil.message
               }, {
                  type: "info",
                  timer: 1000,
                  placement: {
                     from: 'top',
                     align: 'align-right'
                  }
               });
            }


         }).catch(function (e) {
            resolve(e.response.data);
         });
      });


   });

}