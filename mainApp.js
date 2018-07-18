

var BlockSDK = require('blocksdk');
if (window.self === window.top) {
	document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder Editor only.';
} else {
	
	var sdk = new BlockSDK();
	
	let imgData = {
   
    ImageURL: 'http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png',
    ImgHeight: 400,
    Text: 'Text Over Image',
	Textcolor: '#000000'
};

	
	sdk.getContent(function (content) {

		
	
		imgData = content;
		
		
		
		function saveText() {
			var html = "<table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td style='background-repeat:no-repeat;background-position: center;' background='" + imgData.ImageURL + "' bgcolor='#ffffff' width='600' height='" + imgData.ImgHeight + "' valign='top'> <!--[if gte mso 9]> <v:rect xmlns:v='urn:schemas-microsoft-com:vml' fill='true' stroke='false' style='background-repeat:no-repeat; width:600px;height:" + imgData.ImgHeight + "px;'> <v:fill type='tile' src='" + imgData.ImageURL + "' color='#ffffff' /> <v:textbox inset='0,0,0,0'> <![endif]--> <div> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td width='30' align='left' valign='top' style='font-size: 0%;' class='mobile-hidden'></td> <td align='left' valign='top'><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td align='left' valign='top' style='padding-top: 95px;color: " + imgData.Textcolor + "; padding-left: 100px; padding-right: 100px; font-size: 48px;'><center>" + imgData.Text + "</center></td> </tr> </tbody> </table></td> <td width='30' align='left' valign='top' style='font-size: 0%;'></td> </tr> </tbody> </table> </div> <!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]--> </td> </tr> </tbody> </table>";
			sdk.setContent(html);
			sdk.setSuperContent('This is super content: ' + html);

			sdk.getData(function (data) {
				var numberOfEdits = data.numberOfEdits || 0;
				sdk.setData({
					numberOfEdits: numberOfEdits + 1
				});
			});
			sdk.getCentralData(function (central) {
				var totalNumberOfEdits = central.totalNumberOfEdits || 0;
				sdk.setCentralData({
					totalNumberOfEdits: totalNumberOfEdits + 1
				});
			});
		}

		
		window.onload = saveText;
window.onchange = saveText;
		
		
	});
