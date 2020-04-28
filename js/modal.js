$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();
});



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 300) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1500); 
        return false; 
    }); 
});


    $(window).on('load',function(){
        $('#myModal2').modal('show');
    });