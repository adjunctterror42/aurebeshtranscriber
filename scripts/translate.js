$( document ).ready(function() {
   $("#engArea").on('change keyup paste', function() {
      console.log(this.value);
      $("#aureArea").val(this.value);
   });

   $("#aureArea").on('change keyup paste', function() {
      console.log(this.value);
      $("#engArea").val(this.value);
   });
});
