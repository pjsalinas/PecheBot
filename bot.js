/**
 * How to have PecheBot answering questions from different platforms
 */

"use strict";


const botBuilder = require('claudia-bot-builder');
const _ = require('lodash');

// Load the file with the answer to the pre-existing questions
const scriptRules = require('./answer.json');


const api = botBuilder((message, originalApiRequest) => {

	// Get the message, trim the blank spaces and convert it to upper case.
	// answer.json keys are upper case. Avoid the fact the user can type 
	// lower and upper case letters.
	var upperText = message.text.trim().toUpperCase();

	// Check if text sent is the key for one of the pre-existing answers.
	var response = _.get(scriptRules, upperText, "I didn't undestand that. Type 'more' for info.");

	/*
	originalApiRequest.post = {
		token: "",
		team_id: "",
		team_domain: "pjsalinas",
		channel_id: "",
		channel_name: "",
		user_id: "",
		user_name: "",
		command: "/pechebot",
		text: "bot",
		response_url: "https://hooks.slack.com/commands/1234/5678"
	}
	*/

	if(message.type === 'slack-slash-command') {
		return {
			response_type: "in_channel",
			text: `${response}`,
			/*
			attachments: [
				{
					text: "url => " + originalApiRequest.post.response_url + '\n' +
						  "channel_name => " + originalApiRequest.post.channel_name  + '\n' +
						  "channel_id => " +  originalApiRequest.post.channel_id
				}
			]
			*/
		}
	} else if (message.type === 'twilio') {
		/*
			This is the info you have to collect in advance:
		 		Twilio Account ID
		 		Twilio Auth Token
		 		Twilio Number
		*/

		return response;
	} else {
		return 'you are coming from a platform we do not support yet.';
	}



	// These are the planned platforms so far.
}, { platforms: ['slackSlashCommand', 'telegram', 'skype', 'twilio'] });

var sendMessageToSlack = () => {};

module.exports = api;