$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();


var tween = TweenMax.to('.button', 0.1, {
   //color:'white',
   //backgroundColor:'white'
  });

  var scene = new ScrollScene({
    triggerElement: '#code_cont',
    offset: 0, /* offset the trigger 150px below #scene's top */
  })
   
    
    
    
  .setTween(tween)
  .addTo(scrollMagicController);
scene.addIndicators();
  document.getElementsByClassName('button')[0].style.backgroundColor='black';
     document.getElementsByClassName('button')[0].style.color='white';
  $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 700) {
        var x = document.getElementsByClassName('button');
        var i;
        for(i=0;i<x.length;i++){
        x[i].style.color='white';
	x[i].style.backgroundColor='black';
        }
   document.getElementsByClassName('button')[1].style.backgroundColor='white';
     document.getElementsByClassName('button')[1].style.color='black';
  }
    
    else{
     var x = document.getElementsByClassName('button');
        var i;
        for(i=0;i<x.length;i++){
        x[i].style.color='black';
	x[i].style.backgroundColor='white';
        }
    }
    document.getElementsByClassName('button')[0].style.backgroundColor='black';
     document.getElementsByClassName('button')[0].style.color='white';
    
    
    
});
  
  $("#lol").typed({
		strings: ["Hello...", "My name is Veeral Bhagat..", "I am a second year computer science major.."],
  typeSpeed:50,
  loop:true,
  showCursor:false
})


var tween1 = TweenMax.to('.projects', 0.4, {
  width:200,
  height:200,
  backgroundColor:'#ddd'
   
 
  });
  
  var scene1 = new ScrollScene({
    triggerElement: '#code_cont',
    offset: 50, 
    
    
  })
  .setTween(tween1)
  .addTo(scrollMagicController);
 
	$("#code").click(function() {
    $('body').animate({
        scrollTop: $("#code_cont").offset().top},
        'slow');

	$("#home").click(function() {
    $('body').animate({
        scrollTop: $("#home_cont").offset().top},
        'slow');
        

});
	
//$('.button').style.color='black';

  
  
});
