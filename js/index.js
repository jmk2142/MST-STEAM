(function() {
	//wrap our existing svg and store elements to be animated
	var animatingSvg = Snap('#animated-svg'),
		bulb = animatingSvg.select('#bulb'),
    leftYellowCross = animatingSvg.select('#left-yellow-cross'),
    leftWhiteCross = animatingSvg.select('#left-white-cross'),
    leftGreyCross = animatingSvg.select('#left-grey-cross'),
    rightYellowCross = animatingSvg.select('#right-yellow-cross'),
    rightGreyCross = animatingSvg.select('#right-grey-cross');

	//this variable will be used to store the loadingCircle animation object
	var globalAnimation;

	initLoading();
	//detect the click on the play btn and start the animation
	// playBtn.click(function(){
	// 	loadingSvg.addClass('play-is-clicked');
	// 	//scale down play btn
	// 	playBtn.animate({'transform': 's0 0'}, 200, mina.easeinout);
	// 	//scale up pause btn
	// 	pauseBtn.animate({'transform': 's1 1'}, 200, mina.easeinout);
  //
	// 	var strokeOffset = loadingCircle.attr('stroke-dashoffset').replace('px', '');
	// 	//animate strokeOffeset desn't work with circle element - we need to use Snap.animate() rather than loadingCircle.animate()
	// 	globalAnimation = Snap.animate(strokeOffset, '0', function( value ){
	// 		loadingCircle.attr({ 'stroke-dashoffset': value })
	// 		}, (strokeOffset/circumf)*1500, mina.easein, function(){
	// 			loadingSvg.addClass('fade-out');
	// 			setTimeout(function(){
	// 				animateFloor();
	// 			}, 300);
	// 		}
	// 	);
	// });

	//detect the click on the pause btn and stop the animation
	// pauseBtn.click(function(){
	// 	//pause the animation on the loadingCircle
	// 	globalAnimation.stop();
	// 	loadingSvg.removeClass('play-is-clicked');
	// 	//scale up play btn
	// 	playBtn.animate({'transform': 's1 1'}, 200, mina.easeinout);
	// 	//scale down pause btn
	// 	pauseBtn.animate({'transform': 's0 0'}, 200, mina.easeinout);
	// });

	function initLoading() {
    //showCross();
    // setTimeout(function(){
    //   animateFloor();
    // }, 300);
	}

  function showCross() {
		leftYellowCross.animate({transform: 't210 0'}, 3000);
		leftYellowCross.animate({transform: 't-210 0'}, 3000, function() {
			hideCross();
		});
	}

	function hideCross() {
		leftYellowCross.animate({transform: 't-80 0'}, 3000);
		leftYellowCross.animate({transform: 't70 0'}, 3000, function() {
			//this way the animation will be infinite
			showCross();
		});
	}

	function animateFloor() {
		leftYellowCross.animate({'x': leftYellowCross.attr('data-x')}, 400, mina.easeinout, animateBuildings);
	}

	function animateBuildings() {
		//bulb.animate({'height': bulb.attr('data-height')}, 800, mina.elastic);
		// setTimeout(function(){
		// 	buildingBase2.animate({'height': buildingBase2.attr('data-height')}, 800, mina.elastic);
		// }, 100);
		// setTimeout(function(){
		// 	buildingBase3.animate({'height': buildingBase3.attr('data-height')}, 800, mina.elastic, function(){
		// 		animateRoofs();
		// 		animateDoors();
		// 	});
		// }, 200);
	}
  //
	// function animateRoofs() {
	// 	buildingRoof1.animate({'width': buildingRoof1.attr('data-width')}, 300, mina.easeinout);
	// 	setTimeout(function(){
	// 		buildingRoof2.animate({'width': buildingRoof2.attr('data-width')}, 300, mina.easeinout);
	// 	}, 100);
	// }
  //
	// function animateDoors() {
	// 	buildingDoor1.animate({'height': buildingDoor1.attr('data-height')}, 300, mina.easeinout);
	// 	setTimeout(function(){
	// 		buildingDoor2.animate({'height': buildingDoor2.attr('data-height')}, 300, mina.easeinout, function(){
	// 			animateWindows();
	// 		});
	// 	}, 100);
	// }
  //
	// function animateWindows() {
	// 	buildingWindow1.animate({transform: 's1 1'}, 400, mina.easeinout);
	// 	setTimeout(function(){
	// 		buildingWindow2.animate({transform: 's1 1'}, 400, mina.easeinout);
	// 	}, 100);
	// 	setTimeout(function(){
	// 		buildingWindow3.animate({transform: 's1 1'}, 400, mina.easeinout, function(){
	// 			animateChimneies();
	// 		});
	// 	}, 200);
	// }
  //
	// function animateChimneies() {
	// 	buildingChimney.attr('visibility', 'visible').animate({'transform': 't0 0'}, 800, mina.elastic);
	// 	setTimeout(function(){
	// 		buildingRoof3.attr('visibility', 'visible').animate({'transform': 't0 0'}, 1000, mina.elastic, function(){
	// 			showClouds();
	// 		});
	// 	}, 100);
	// }
  //

})();
