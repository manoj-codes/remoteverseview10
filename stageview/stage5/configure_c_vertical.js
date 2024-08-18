/*
	VERSEVIEW FOR STAGEVIEW
	AUG 17, 2024

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
    CONFIGURATION FILE - THEME C
	This theme shows the verse / lyrics on the lower side - side by side. 
*/

let data = {
	"screenResolutionHorizontal": 1920,
	"screenResolutionVertical": 1080,

	"enableUpperCase": true,
	"newFont1": "",
	"newFont2": "",

	//BOX1
	"box1_top":20,
	"box1_left":30,
	"box1_width":1200,
	"box1_height":950,

	"box1_color" : "white",
	"box1_background-color":"#0A0708",		//First three values (0-255) are Red , Green , Blue and last values (0 to 1, example 0.4)is for opacity
	"box1_border" : "1px solid white",
	"box1_border-radius" : 20,
	"box1_font-weight" : "normal",		//Options are bold, normal
	"box1_font-style" : "normal",		//Options are italics, normal
	"box1_text-align" : "center",		//Options are left, center , right
	"box1_text-decoration": "none",
	"box1_letter-spacing": "",	//Example: "5px"
	"box1_line-height": "",		//Example: "1.5"
	"box1_text-shadow": "5px 5px 5px black",
	"box1_margin" : "0px 0px 0px 0px",
	"box1_padding" : "20px 20px 50px 50px",

	//BOX2
	"box2_top":20,
	"box2_left":1265,
	"box2_width":620,
	"box2_height":950,

	"box2_color" : "#FDD264",
	"box2_background-color":"#444444",		//First three values (0-255) are Red , Green , Blue and last values (0 to 1, example 0.4)is for opacity
	"box2_border" : "1px solid white",
	"box2_border-radius" : 20,
	"box2_font-weight" : "normal",		//Options are bold, normal
	"box2_font-style" : "normal",		//Options are italics, normal
	"box2_text-align" : "center",		//Options are left, center , right
	"box2_text-decoration": "none",
	"box2_letter-spacing": "",	//Example: "5px"
	"box2_line-height": "",		//Example: "1.5"
	"box2_text-shadow": "5px 5px 5px black",
	"box2_margin" : "0px 0px 0px 0px",
	"box2_padding" : "20px 20px 50px 50px",
}


var screenResolutionHorizontal = 1920;
var screenResolutionVertical = 1080;



minfont = 20;			/* Adjust as needed */
maxfont = 140;


var vv_top = 20;
var vv_left = 100;
var vv_width = screenResolutionHorizontal - 200;
var vv_height = screenResolutionVertical - 160;

var ref_top = 950;
var ref_left = 1300;
var ref_width = 500;
var ref_height = 100;

var ref_border = {
	"border-color": "#C1E0FF", 
    "border-width":"3px", 
    "border-style":"solid"};


var showBothTranslations = true;	//Change to true to show both translations 
var spaceBetweenTranslations = 10;
var textMultiLine = true;
var showHorizontal = true;

var ref_text_color1 = "white";
var vv_text_color1 = "white";
var vv_text_color2 = "orange";

var backgroundImage = false;
var backgroundFilename = '../img/g1.jpg';	//b1,b2,b3,b4,b5.png

var textShadow = "0px 0px #000000";     //"2px 2px #000000"
var textOutline = "0px black";          //"2px black"

var textAlign = "center";       //"left", "right", "center"

var enableUpperCase = false;

var text1_style = {
	
};

// var text2_style = {
// 	"color" : "white",
// 	"background-color":"rgba(0, 0, 0, 0)",
// 	"border" : "0px solid yellow",
// 	"font-weight" : "normal",
// 	"font-style" : "normal",
// 	"text-align" : "center",
// 	"text-decoration": "none",
// 	"letter-spacing": "",	//Example: "5px"
// 	"line-height": "",		//Example: "1.5"
// 	//"text-shadow": "5px 5px 5px black",
// 	"margin" : "0px 0px 0px 0px",
// 	"padding" : "20px 20px 20px 20px",
// };