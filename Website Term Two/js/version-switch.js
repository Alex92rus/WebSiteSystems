var lastScrollTop = 0;
$(window).scroll(function(event){
	var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code, hide version-switch
       hideVersionSwitch();
   } else {
      // upscroll code, show version-switch
      showVersionSwitch();
   }
   lastScrollTop = st;
})

var showTimeout = undefined;
function showVersionSwitch(){
	var versionSwitch = $("#version-switch");
	
	if (versionSwitch.position().top < 0) {
		//disable hideTimeout
		if (hideTimeout != undefined) {
			clearTimeout(hideTimeout);
		}

		var newValue = versionSwitch.position().top + 10;
		if (newValue>0) {
			newValue = 0
		}

		versionSwitch.css('top', newValue+"px");
		showTimeout = setTimeout(showVersionSwitch,20);
	}
}

var hideTimeout = undefined;
function hideVersionSwitch(){
	var versionSwitch = $("#version-switch");
	if (versionSwitch.position().top > -versionSwitch.height()) {
		//disable showTimeout
		if (showTimeout != undefined) {
			clearTimeout(showTimeout);
		}

		
		var newValue = versionSwitch.position().top - 10;
		if (newValue < -versionSwitch.height()) {
			newValue = -versionSwitch.height()
		}

		versionSwitch.css('top', newValue+'px');
		hideTimeout = setTimeout(hideVersionSwitch,20);
	}
}