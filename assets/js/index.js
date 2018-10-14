$(function (){

      $('.ns').hide();
      
      $('#select').on("change", function (){
            $('.ns').hide();
            $('.n'+$(this).val()).show();
      });
});