var theotherdiv = document.getElementById("character");

$("#30mff-button").on('mouseenter', function(event) {
	theotherdiv.src = '30mff.gif';
});
// $("#30mff-button").on('mouseleave', function(event) {
// 	theotherdiv.src = 'standard.gif';
// });



$("#sound-button").on('mouseenter', function(event) {
	theotherdiv.src = 'sound.gif';
});
// $("#sound-button").on('mouseleave', function(event) {
// 	theotherdiv.src = 'standard.gif';



$("#comic-button").on('mouseenter', function(event) {
	theotherdiv.src = 'comic.gif';
});
// $("#comic-button").on('mouseleave', function(event) {
// 	theotherdiv.src = 'standard.gif';



$("#video-button").on('mouseenter', function(event) {
	theotherdiv.src = 'video.gif';
});
// $("#video-button").on('mouseleave', function(event) {
// 	theotherdiv.src = 'standard.gif';



$("#animation-button").on('mouseenter', function(event) {
	theotherdiv.src = 'animation.gif';
	console.log('hello')
});
// $("#animation-button").on('mouseleave', function(event) {
// 	theotherdiv.src = 'standard.gif';

$(".button-container").on('mouseleave', function(event) {
	theotherdiv.src = 'standard.gif';
	console.log('hello')
	});
