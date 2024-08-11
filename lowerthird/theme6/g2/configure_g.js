/*
	VERSEVIEW FOR LOWER THIRD VIEW
	June 24, 2020

	Copyright (c) 2020 VerseVIEW
	
	Disclaimer: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/
/*
    CONFIGURATION FILE - THEME E
	This theme shows the lyrics on the lower side as two lines. This theme only works on two line setup
*/

var screenResolutionHorizontal = 1920;
var screenResolutionVertical = 1080;


var vv_width_percent = 50;
var vv_height_percent = 50;

refminfont = 20;			/* Adjust as needed */
refmaxfont = 40;

minfont = 20;			/* Adjust as needed */
maxfont = 50;

var ref_top = 839;
var ref_left = 380;
var ref_width = 420;
var ref_height = 53;

var vv_top = 889;
var vv_left = 380;
var vv_width = 1150;
var vv_height = 130;



var showBothTranslations = false;	//Change to true to show both translations 
//var spaceBetweenTranslations = 30;
var textMultiLine = true;

var vv_text_color1 = "white";
var vv_text_color2 = "white";

var backgroundImage = true;
var backgroundFilename = '../img/g5.png';	//g1,g2.png

var textShadow = "0px 0px #000000";     //"2px 2px #000000"
var textOutline = "0px white";          //"2px black"

var textAlign = "left";       //"left", "right", "center"

var enableUpperCase = true;

var newFont1 = "";
var newFont2 = "";		//Overide the font as provided from VerseVIEW Example: Segoe Script