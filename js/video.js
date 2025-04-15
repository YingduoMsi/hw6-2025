var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

	// 1️⃣ page load：Initialize the video element and turn off autoplay and turn off looping.
	video = document.querySelector("#player1");
	console.log("found video")
	video.autoplay = false;
	console.log("autoplay closed")
	video.loop = false;
	console.log("loop closed")
	video.load();
	console.log("video loaded")

	// 2️⃣ Play button： Play the video and update the volume information. 
	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		console.log("video playing");

		let volumePercent = Math.round(video.volume * 100);
		document.querySelector("#volume").innerText = volumePercent + "%";
		console.log("Volume: " + volumePercent + "%");
	});

	// 3️⃣ Pause button： Pause the video.
	document.querySelector("#pause").addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();
	});

	// 4️⃣ Slow Down button： Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(2));
	});

	// 5️⃣ Speed Up button：Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(2));
	});

	// 6️⃣ Skip Ahead：Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
	document.querySelector("#skip").addEventListener("click", function () {
		var newTime = video.currentTime + 10;
		if (newTime > video.duration) {
			newTime = 0;
		}
		video.currentTime = newTime;
		console.log("Current video time: " + video.currentTime + " seconds");
	});

	// 7️⃣ Mute：Mute/unmute the video and update the text in the button.
	document.querySelector("#mute").addEventListener("click", function () {
		if (video.muted) {
			video.muted = false;
			document.querySelector("#mute").innerText = "Mute";
		} else {
			video.muted = true;
			document.querySelector("#mute").innerText = "Unmute";
		}
	});

	// 8️⃣ Volume Slider：Change the volume based on the slider and update the volume information.
	document.querySelector("#slider").addEventListener("input", function () {
		var volume = this.value / 100;
		video.volume = volume;
		document.querySelector("#volume").innerText = Math.round(volume * 100) + "%";
	});

	// 9️⃣ Old School：Utilize the existing oldSchool class on the video element
	document.querySelector("#vintage").addEventListener("click", function () {
		console.log("Applying oldSchool style.");
		video.classList.add("oldSchool");
	});

	//🔟 Original：Remove the oldSchool class from the video.
	document.querySelector("#orig").addEventListener("click", function () {
		console.log("Reverting to original style.");
		video.classList.remove("oldSchool");
	});
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

