/*
	VERSEVIEW FOR LOWER THIRD VIEW
	Feb 11, 2021

	Copyright (c) 2021 VerseVIEW
	
	Disclaimer: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/


/* 
    PROCESS THE DATA AND DISPLAY IT CORRECTLY FOR THE THEME
*/
function processLower3rdResponse(){
	var footerspace = 30;

	if (alertmessage == "") {
		if (showdatetime){
			getDate();
			$("#footer").show();
			footerspace = 30;
		} else {
			$("#footer").hide();
			footerspace = 0;
		}
	} else {
		$("#footer").css("font-size", "30px");
	
		$("#footer").html(alertmessage);
		$("#footer").show();
		footerspace = 30;
	}

	

	$(".textStyle").css("text-align", textAlign);

	$(".textStyle").css("text-shadow", textShadow);
	$(".textStyle").css("-webkit-text-stroke", textOutline);

	if (backgroundImage){
		//console.log(backgroundFilename);
		$(".theme1").css("background-image", "url(" + backgroundFilename + ")");
	} else {
		$(".theme1").css("background-image", "none");
	}

	$("#resultID2").show();
	console.log(p_text1next)
	if (p_text1next == ""){
		$("#resultID2").hide();
		//return;
	}

	if (data.enableUpperCase){
		p_text1 = p_text1.toUpperCase();
		p_text2 = p_text2.toUpperCase();

		p_text1next = p_text1next.toUpperCase();
		p_text2next = p_text2next.toUpperCase();
	}

	var verseNumber = "";

	if (p_title != "") {		//Detect it is a verse and add the book name and chapter
		p_text1 = p_title + ":" + p_text1;
		p_text2 = p_title + ":" + p_text2;

		p_text1next = p_title + ":" + p_text1next;
		p_text2next = p_title + ":" + p_text2next;
	}
		

	if (showBothTranslations) {
		//p_text1 = p_text1 + "<BR>" + "<div style='font-family:" + p_font2 + "'>" + p_text2 + "</div>";
	}

	//console.log(p_text1);
	if (p_text1 == "") {
		console.log("blank");
	}

	
	
	//console.log($( window ).width());
	var newscreenResolutionHorizontal = $( window ).width();
	var newscreenResolutionVertical = $( window ).height();

	var vv_width_percent = newscreenResolutionHorizontal/data.screenResolutionHorizontal;
	var vv_height_percent = newscreenResolutionVertical/data.screenResolutionVertical;

	const box1_css = {
		"top" : data.box1_top * vv_height_percent,
		"left": data.box1_left * vv_width_percent,
		"width": data.box1_width * vv_width_percent,
		"height": data.box1_height * vv_height_percent,

		"color": data.box1_color,
		"border": data.box1_border,
		"border-radius": data["box1_border-radius"],
		"background-color": data["box1_background-color"],

		"padding": data["box1_padding"],

		"text-align" : data["box1_text-align"],
	}

	const box2_css = {
		"top" : data.box2_top * vv_height_percent,
		"left": data.box2_left * vv_width_percent,
		"width": data.box2_width * vv_width_percent,
		"height": data.box2_height * vv_height_percent,

		"color": data.box2_color,
		"border": data.box2_border,
		"border-radius": data["box2_border-radius"],
		"background-color": data["box2_background-color"],

		"padding": data["box2_padding"],

		"text-align" : data["box2_text-align"],
	}



	

	var f = p_font1;
	if (data.newFont1 != ""){
		f = data.newFont1;
	}
	$("#resultID1").css("font-family", f);
	$("#resultID1").css(box1_css);
	$("#resultID1").html(p_text1);

	//console.log("TEXT1**: " + p_text1);

	//console.log("second: " + showBothTranslations + "  " + p_text2.length)
	//if (showBothTranslations && (p_text2.length > 2)) {
		var f = p_font1;
		if (data.newFont1 != ""){
			f = data.newFont1;
		}
		$("#resultID2").css("font-family", f);
		$("#resultID2").css(box2_css);
		$("#resultID2").html(p_text1next);
		//$("#resultID2").show();
	//} else {
		//console.log("second: " + showBothTranslations + "  " + p_text2.length)
	//	$("#resultID2").hide();
	//}
	
	// if (p_title != ""){
	// 	textFit(document.getElementsByClassName('box0')[0], {
	// 		minFontSize: minfont,
	// 		maxFontSize: maxfont,
	// 		alignVert: true,
	// 		multiLine: textMultiLine,
	// 		widthOnly: false,
	// 		detectMultiLine: false
	// 	});
	// }

	textFit(document.getElementsByClassName('box1')[0], {
		minFontSize: minfont,
		maxFontSize: maxfont,
		alignVert: true,
		multiLine: textMultiLine,
		widthOnly: false,
		detectMultiLine: false
	});
	
	//if (showBothTranslations && (p_text2.length > 2)) {
		textFit(document.getElementsByClassName('box2')[0], {
			minFontSize: minfont,
			maxFontSize: maxfont,
			alignVert: true,
			multiLine: textMultiLine,
			widthOnly: false,
			detectMultiLine: false
		});
	//}
}

var t1_ratio = 0.5;
var t2_ratio = 0.5;
function setSplitRatio(){
	var len1 = p_text1.length;
	var len2 = p_text2.length;
	
	t1_ratio = len1/(len1+len2);
	t2_ratio = 1-t1_ratio;
}