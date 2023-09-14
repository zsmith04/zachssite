


//Fade the intro text in
$(document).ready(function(){
    $(".button").click(function(){
      $("#div1").fadeToggle(1000);
      $("#div2").fadeToggle(1000);
      $("#div3").fadeToggle(3000);
    });
  });

  //toggle the additional divs on/off
  jQuery(document).ready(function (){
$('#skillsbutton').click(function(){
	if($("#skills").is(":visible")){
		$('.content').hide(1000);
	} else{
	$('.content').hide(1000);
    $('#skills').toggle(1000);
  }});
  });

  jQuery(document).ready(function (){
	$('#xpbutton').click(function(){
		if($("#xp").is(":visible")){
			$('.content').hide(1000);
		} else{
		$('.content').hide(1000);
	  $('#xp').toggle(1000);
   }});
	});


	jQuery(document).ready(function (){
		$('#sitebutton').click(function(){
			$('.content').hide();
		  $('#site').toggle(1000);
	   });
		});



		
		
