//gets the npm library

const Discord = require('discord.js');

//gets thee config file

const config = require('./config.json');

//gets the discord client

const client = new Discord.Client();

//makes the prefix var

const prefix = config.prefix;

//on ready logs ready

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {

	//checks if it starts with a prefix

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //cuts for args

    const args = message.content.slice(prefix.length).trim().split(' ');

    //converts it to lowercase

    const command = args.shift().toLowerCase();

//checks if the message is joined

 if (command === 'joined') {
 	if (!message.member.roles.cache.some(role => role.name === "programmer" || role.name === "Admin" || role.name === "Owner" || role.name === "TerrariaBot")) return

 	//if there is no user attached as an arg

	if (!message.mentions.users.size) {

		//returns a message to ask the user for args

		return message.channel.send(`${message.author} you did not provide any user to check` );
	}

	// if there is a user attached as an arg

	const mentioned = message.mentions.users.map(user => {

		//creates a variable to check the username of the one attached as an arg

		let username = message.guild.member(message.mentions.users.first());

		//makes a var today which will be the current date

		var today = new Date();

		// makes variable names  for todays day,month,year

		var todayDay = today.getDate();
		var todayMonth = today.getMonth();
		var todayYear = today.getFullYear();

		//combines those and gets todays full date

		var todaysfulldate = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

		// makes variables for when the user joined in days, moths, years

		var whenJoineddays = username.joinedAt.getUTCDate();
		var whenJoinedmonths = username.joinedAt.getUTCMonth();
		var whenJoinedyears = username.joinedAt.getFullYear();

		//subtracs to see since days

		var joinedDays = todayDay - whenJoineddays;
		var joinedMonths = todayMonth - whenJoinedmonths;
		var joinedYears = todayYear - whenJoinedyears;

		//divides it to be only days and ads one which is today

		var daysago = `${joinedYears / 365 + joinedMonths / 31 + joinedDays + 1} `;

		//full date when user joined

		var joinedDate = `${whenJoinedyears}/${whenJoinedmonths}/${whenJoineddays}`;

		//returns the message

		message.channel.send(`${username} joined ${daysago} days ago`);

		function addRoles() {
			function giveLevel1() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel1");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel2() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel2");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel3() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel3");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel4() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel4");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel5() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel5");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel6() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel6");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel7() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel7");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel8() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel8");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel9() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel9");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel10() {
				let role = message.guild.roles.cache.find(r => r.name === "TerrarianLevel10");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}
			function giveLevel11() {
				let role = message.guild.roles.cache.find(r => r.name === "RealTerrarian");

				let member = message.mentions.members.first();

				member.roles.add(role).catch(console.error);
			}

			//checks and assing the funtion depending on the time spent
			if (daysago > 10) {
				giveLevel1()
			}
			if (daysago > 25) {
				giveLevel2()
			}
			if (daysago > 30) {
				giveLevel3()
			}
			if (daysago > 60) {
				giveLevel4()
			}
			if (daysago > 120) {
				giveLevel5()
			}
			if (daysago > 150) {
				giveLevel6()
			}
			if (daysago > 170) {
				giveLevel7()
			}
			if (daysago > 200) {
				giveLevel8()
			}
			if (daysago > 275) {
				giveLevel9()
			}
			if (daysago > 365) {
				giveLevel10()
			}
			if (daysago > 730) {
				giveLevel11()
			}
	}
	setInterval(addRoles, 1000)

});
}


});

//connects using the token from the config file
client.login(config.token);