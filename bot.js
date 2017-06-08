// bot => PecheBot
// claudia, node.js, slack, twilio, telegram and skype

"use strict";

const botBuilder = require('claudia-bot-builder');
const telegramTemplate = botBuilder.telegramTemplate;
const skypeTemplate = botBuilder.skypeTemplate;

const _ = require('lodash');

// Load the file with the answer to the pre-existing questions
const scriptRules = require('./answer.json');


const api = botBuilder((message, originalApiRequest) => {

	// Get the message, clean it and convert it to upper case.
	var upperText = _.toUpper(_.trim(message.text));

	// Check if text sent is the key for one of the pre-existing answers.
	var response = _.get(scriptRules, upperText, "I didn't undestand that. Type [More] for info.");
	
  
	if(message.type === 'slack-slash-command') {
	  
		return {
			response_type: "in_channel",
			text: `${response}`
		};
		
	} else if (message.type === 'twilio') {
	  
		return response;
		
	} else if (message.type === 'telegram') {
	  
		return new telegramTemplate.Text(response).get();
		
	} else if(message.type === 'skype') {
	  
		return response;
		
	} else {
	  
		return 'you are coming from a platform we do not support yet.';
	}

}, { platforms: ['slackSlashCommand', 'twilio', 'telegram', 'skype'] });

module.exports = api;