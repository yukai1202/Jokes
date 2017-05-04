module.exports = {
	TYPE_TEXT: 1,
	TYPE_IMAGE: 2,


	PageCount: 10,

	VOTE_UP_STATUS: "1",
	VOTE_DOWN_STATUS: "0",

	isNumber: function(value) {
	    var patrn = /^(-)?\d+(\.\d+)?$/;
	    if (patrn.exec(value) == null || value == "") {
	        return false
	    } else {
	        return true
	    }
	},

	init: function(){

		var users = [
			{userName:"yukai", password:'11111',alias:'fishyk',avatar:'',email:'qq@qq.com',phoneNumber: '00000'},
			{userName:"aaa", password:'11111',alias:'aaaalias',avatar:'',email:'qq@qq.com',phoneNumber: '00000'},
			{userName:"qqq", password:'11111',alias:'qqqqalias',avatar:'',email:'qq@qq.com',phoneNumber: '00000'}
		];

		var promise = users.map((user)=>{
			return User.create(user);
		});

		Promise.all(promise).then((u)=>{
			for(var key in u){
				console.log(JSON.stringify(u));
			}
		});
	}
};