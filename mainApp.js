
// JavaScript Document


if (window.self === window.top) {
    document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
 }

let sdk = new window.sfdc.BlockSDK(); //initalize SDK

let imgData = {
   
    ImageURL: 'http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png',
    ImgHeight: '400',
    Text: 'Text Over Image',
	Textcolor: '#000000'

};

let defaultContent ="<table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td style='background-repeat:no-repeat;background-position: center;' background='http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png' bgcolor='#ffffff' width='600' height='400' valign='top'> <!--[if gte mso 9]> <v:rect xmlns:v='urn:schemas-microsoft-com:vml' fill='true' stroke='false' style='background-repeat:no-repeat; width:600px;height:400px;'> <v:fill type='tile' src='http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png' color='#ffffff' /> <v:textbox inset='0,0,0,0'> <![endif]--> <div> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td width='30' align='left' valign='top' style='font-size: 0%;'></td> <td align='left' valign='top'><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tbody> <tr> <td align='left' valign='top' style='padding-top: 95px;color: #000000; padding-left: 100px; padding-right: 100px; font-size: 48px;'><center>Text Over Image</center></td> </tr> </tbody> </table></td> <td width='30' align='left' valign='top' style='font-size: 0%;'></td> </tr> </tbody> </table> </div> <!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]--> </td> </tr> </tbody> </table>";

let saveData = () => {
	
    imgData.ImgHeight = document.getElementById('ImgHeight').value;
    imgData.ImageURL = document.getElementById('ImageURL').value;
    imgData.Text = document.getElementById('Text').value;
	imgData.Textcolor = document.getElementById('Textcolor').value;
	
}


let fetchData = () => {

  

    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            imgData = data;
         
			
	document.getElementById('ImgHeight').value = '400';
      document.getElementById('ImageURL').value = 'http://image.s4.exct.net/lib/fe8f15737c62077a76/m/1/a9836fc9-54dc-434a-a09f-2b2ca88ce146.png';
    document.getElementById('Text').value = 'Text';
	document.getElementById('Textcolor').value = '#000000';
			
     
        }
    });


}




window.onload = fetchData;
window.onchange = saveData;
