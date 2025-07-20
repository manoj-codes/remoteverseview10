/*
	VERSEVIEW FOR LOWER THIRD VIEW
	June 9, 2020

	Copyright (c) 2020 VerseVIEW
	
	Disclaimer: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

var STACK_TOP = true;
var STACK_SIDE = false;		//defines for readablity

var box1_top, box1_left, box1_height, box1_width;
var box2_top, box2_left, box2_height, box2_width;

/*
	GENERATE THE POSITONS OF THE BOXES
*/
function generatePositions(dualTranslation,stacking){
	if (!dualTranslation){
		box1_top = vv_top;
		box1_left = vv_left;
		box1_height = vv_height;
		box1_width = vv_width;
	} else {
		//Dual Translation
		if (stacking == STACK_TOP){
			box1_top = vv_top;
			box1_left = vv_left;
			box1_height = (vv_height/2)-5;
			box1_width = vv_width;
			
			box2_top = (vv_top + (vv_height/2));
			box2_left = vv_left;
			box2_height = (vv_height/2)-5;
			box2_width = vv_width;	
		} else {
			//stacking is side by side
			// Calculate to ensure exactly 25px left margin and 25px right margin (wider boxes)
			var totalAvailableWidth = screenResolutionHorizontal - 25 - 25; // 1920 - 25 - 25 = 1870
			var boxWidth = (totalAvailableWidth - spaceBetweenTranslations) / 2; // (1870 - 25) / 2 = 922.5
			
			box1_top = vv_top;
			box1_left = 25; // Exactly 25px from left
			box1_height = vv_height;
			box1_width = boxWidth;
			
			box2_top = vv_top;
			box2_left = 25 + boxWidth + spaceBetweenTranslations; // 25 + 922.5 + 25 = 972.5
			box2_height = vv_height;
			box2_width = boxWidth;
		}
	}
}

/* 
    PROCESS THE DATA AND DISPLAY IT CORRECTLY FOR THE THEME
*/
function processLower3rdResponse(){
	
	//const queryString = window.location.search;
	//console.log(queryString);
	const capitalizeWords = str =>
		str.replace(/\b\w/g, char => char.toUpperCase());

	var dual = false;
	var stack = STACK_TOP;
	

	$(".textStyle").css("text-align", textAlign);

	$(".textStyle").css("text-shadow", textShadow);
	$(".textStyle").css("-webkit-text-stroke", textOutline);


	//console.log("TEXT1 " + p_text1);
	//console.log("TEXT2 " + p_text2);

	if (enableUpperCase){
		// p_text1 = p_text1.toUpperCase();
		// p_text2 = p_text2.toUpperCase();
	}

	if (p_title != "") {		//Detect it is a verse and add the book name and chapter
		if (showVerseSideBySide) {
			stack = STACK_SIDE;
		} else {
			stack = STACK_TOP;
		}
	} else {
		stack = STACK_SIDE;
	}

	if (showBothTranslations && (p_text2 != "")) {
		dual = true;
	}

	if (p_text1 == "") {
		console.log("blank");
	}

	var verseNumber = "";
	if (p_title != "") {		//Detect it is a verse and add the book name and chapter
		verseNumber = (p_text1.split(" "))[0];
		//console.log(verseNumber);
		p_text1 = p_text1.substr(p_text1.indexOf(" ") + 1);
		p_text2 = p_text2.substr(p_text2.indexOf(" ") + 1);
	} else {
		if (enableUpperCase){
			p_text1 = capitalizeWords(p_text1);
			p_text2 = capitalizeWords(p_text2);
		}
	}



	if (p_text2 == null){
		p_text2 = "";
	}
	

	
	if (backgroundImage){
		if (p_title == ""){
			//Full box
			$(".theme1").css("background-image", "url(" + backgroundFilenameFullBox + ")");
		} else {
			//Verse
			$(".theme1").css("background-image", "url(" + backgroundFilenameVerseBox + ")");
		}
	} else {
		$(".theme1").css("background-image", "none");
	}

	generatePositions(dual,stack);
	
	//console.log(box1_top + "|" + box1_left + "|" + box1_height + "|" + box1_width);
	//console.log(box2_top + "|" + box2_left + "|" + box2_height + "|" + box2_width);
	
	//FOR REFERENCE - Position at the bottom below the text
	$("#resultIDRef").css("top", box1_top + box1_height - 10); // Below the text boxes, moved up 50px
	$("#resultIDRef").css("left", "50%"); // Center horizontally
	$("#resultIDRef").css("transform", "translateX(-50%)"); // Center the element
	$("#resultIDRef").css("width", ref_width); // Use original reference width
	$("#resultIDRef").css("height", ref_height);
	$("#resultIDRef").css("text-align", "center"); // Center the text within the box
	
	//SETUP THE POSITION of left translation
	$("#resultID1").css("top", box1_top);
	$("#resultID1").css("left", box1_left);
	$("#resultID1").css("width", box1_width);
	$("#resultID1").css("height", box1_height);
	
	//SETUP THE POSITION of right translation
	$("#resultID2").css("top", box2_top);
	$("#resultID2").css("left", box2_left);
	$("#resultID2").css("width", box2_width);
	$("#resultID2").css("height", box2_height);
	
	//$("#resultID1").css("color", vv_text_color1);
	//$("#resultID2").css("color", vv_text_color2);
	

	var f = p_font1;
	if (newFont1 != ""){
		f = newFont1;
	}
	$("#resultID1").css("font-family", f);
	$("#resultID2").css("font-family", f);
	$("#resultIDRef").css("font-family", f);
	
	if (p_title != ""){
		$("#resultIDRef").html(p_title + ":" + verseNumber);
	} else {
		$("#resultIDRef").html("");
	}
	
	$("#resultID1").html(p_text1);
	$("#resultID2").html(p_text2);
			
	$("#resultIDRef").css(text0_style);
	$("#resultID1").css(text1_style);
	$("#resultID2").css(text2_style);
	
	//OVERRIDE BACKGROUNDS TO BE TRANSPARENT SO GRADIENT SHOWS THROUGH
	$("#resultIDRef").css("background-color", "transparent");
	$("#resultID1").css("background-color", "transparent");
	$("#resultID2").css("background-color", "transparent");
	$("#resultIDRef").css("color", "white");
	$("#resultID1").css("color", "white");
	$("#resultID2").css("color", "white");
	
	if (p_title != ""){
		textMultiLine = true;
		
		textFit(document.getElementsByClassName('box0')[0], {
			minFontSize: refminfont,
			maxFontSize: refmaxfont,
			alignVert: true,
			multiLine: false,
			widthOnly: false,
			alignVertWithFlexbox: false,
			detectMultiLine: true
		});
	} else {
		textMultiLine = false;
	}


	
	
	if (dual){
		textFit(document.getElementsByClassName('box1')[0], {
			minFontSize: minfont,
			maxFontSize: maxfont,
			alignVert: true,
			multiLine: textMultiLine,
			widthOnly: false,
			alignVertWithFlexbox: false,
			detectMultiLine: true
		});
	
		textFit(document.getElementsByClassName('box2')[0], {
			minFontSize: minfont,
			maxFontSize: maxfont,
			alignVert: true,
			multiLine: textMultiLine,
			widthOnly: false,
			alignVertWithFlexbox: false,
			detectMultiLine: true
		});
	} else {
		textFit(document.getElementsByClassName('box1')[0], {
			minFontSize: minfont,
			maxFontSize: maxfont,
			alignVert: true,
			multiLine: textMultiLine,
			widthOnly: false,
			alignVertWithFlexbox: false,
			detectMultiLine: true
		});
	}
	
	
	
		
	
}