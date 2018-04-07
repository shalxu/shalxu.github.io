app.controller('HomeController', function ($animate,$scope) {
	console.log("???");
	FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
	var opts = {
		clockFace: 'DailyCounter',
		countdown: true,
		language: 'Custom'
	};
	opts.classes = {
		active: 'flip-clock-active',
		before: 'flip-clock-before',
		divider: 'flip-clock-divider',
		dot: 'flip-clock-dot',
		label: 'flip-clock-label',
		flip: 'flip',
		play: 'play',
		wrapper: 'flip-clock-small-wrapper'
	};  
	var countdown = 1532210400 - ((new Date().getTime())/1000); // from: 07/21/2018 03:00 pm -0700
	countdown = Math.max(1, countdown);
	$('.countdown').FlipClock(countdown, opts);
});