
var url_string = window.location.href;
var url = new URL(url_string);
var acessChat = url.searchParams.get("acessChat");

if(acessChat != null || acessChat != undefined || acessChat != ""){
	localStorage.setItem('chatbot-info-student', acessChat);
}

var paramChat;
paramChat = localStorage.getItem('chatbot-info-student')
let cronchatToken = 'zyRsjc52BVRI';
let hostURL = 'https://cronchatcronapp.cronapp.io/get-chat?token=';
let chatbotURL = `${hostURL}${cronchatToken}&extraparam=${paramChat}`;
let scriptHTML = document.createElement("script");
scriptHTML.src = chatbotURL;
scriptHTML.type = 'text/javascript'
document.body.appendChild(scriptHTML);