/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
	    

		var currentpage = req.param("page");
		if(!currentpage){
			currentpage = 1;
		}

		Tag.find().exec(function(err, tags){
			if(err){
				return;
			}

			//sails.log(tags.pop().toJSON());
			res.view('homepage',{title: "text", type: "1", data: tags});
		});

		//console.log("currentpage:"+currentpage);
		
	},
	text: function(req, res){
		res.view('homepage', {title: "text", type: "1"});
	},

	img: function(req, res){
		res.view('homepage', {title: "img", type: "2"});
	}
};

