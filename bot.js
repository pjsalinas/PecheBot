const twilio = require('twilio');
conslt botBuilder = require('claudia-bot-builder');

if(!process.env.TWILIO_AUTH_TOKEN){
	var env = require('.env');
}

const api = botBuilder((request, requestApi) => {
	if(request.type === 'slack'){
		backToPlatforms("Slack => ", request.text);
	} else if (request.type === 'twilio') {
		backToPlatfoms("Twilio => " + request.text);
	} else if (request.type === 'skype') {
		backToPlatforms("Skype => " + request.text);
	} else if (request.type === 'telegram') {
		backToPlatforms("Telegram => " + request.text);
	} else {
		return "We don't support that platform yet"
	}
}, platforms: ['slackslashcommand', 'skype', 'twilio', 'telegram');

var backToPlatforms = (platform, text) => {
	return platform + text;
};
