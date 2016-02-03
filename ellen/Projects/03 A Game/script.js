$(document).ready(function() {
    



$('#f2').draggable({
    revert: false,
    containment: 'document',
    cursor: 'move'
});
 
$('#circle').droppable({
    accept: '#f2',
    activeClass: 'active',
    tolerance: 'touch',
    drop: function(event, ui){
        $(this).append(ui.draggable);
    }
 });

$('a').on('click', function(){
  $('#f2').trigger('drag', [$('#circle')]);   
});






$('#f3').draggable({
    revert: false,
    containment: 'document',
    cursor: 'move'
});
 
$('#circle2').droppable({
    accept: '#f3',
    activeClass: 'active',
    tolerance: 'touch',
    drop: function(event, ui){
        $(this).append(ui.draggable);
    }
 });

$('a').on('click', function(){
  $('#f3').trigger('drag', [$('#circle2')]);   
});




$('#f4').draggable({
    revert: false,
    containment: 'document',
    cursor: 'move'
});
 
$('#circle3').droppable({
    accept: '#f4',
    activeClass: 'active',
    tolerance: 'touch',
    drop: function(event, ui){
        $(this).append(ui.draggable);
    }
 });

$('a').on('click', function(){
  $('#f4').trigger('drag', [$('#circle3')]);   
});



$('#f5').draggable({
    revert: false,
    containment: 'document',
    cursor: 'move'
});
 
$('#circle4').droppable({
    accept: '#f5',
    activeClass: 'active',
    tolerance: 'touch',
    drop: function(event, ui){
        $(this).append(ui.draggable);
    }
 });

$('a').on('click', function(){
  $('#f5').trigger('drag', [$('#circle4')]);   
});



$('#f6').draggable({
    revert: false,
    containment: 'document',
    cursor: 'move'
});
 
$('#circle5').droppable({
    accept: '#f6',
    activeClass: 'active',
    tolerance: 'touch',
    drop: function(event, ui){
        $(this).append(ui.draggable);
    }
 });

$('a').on('click', function(){
  $('#f6').trigger('drag', [$('#circle5')]);   
});


$('#f7').draggable({
    revert: false,
    containment: 'document',
    cursor: 'move'
});
 
$('#circle6').droppable({
    accept: '#f7',
    activeClass: 'active',
    tolerance: 'touch',
    drop: function(event, ui){
        $(this).append(ui.draggable);
    }
 });

$('a').on('click', function(){
  $('#f7').trigger('drag', [$('#circle6')]);   
});


$('#f8').draggable({
    revert: false,
    containment: 'document',
    cursor: 'move'
});
 
$('#circle7').droppable({
    accept: '#f8',
    activeClass: 'active',
    tolerance: 'touch',
    drop: function(event, ui){
        $(this).append(ui.draggable);
    }
 });

$('a').on('click', function(){
  $('#f8').trigger('drag', [$('#circle7')]);   
});

function blinker() {
    $('#f9').fadeOut(350).fadeIn(350);
}

setInterval(blinker, 350); 

});



