/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
	    

		var currentpage = req.param("page");
		//console.log("currentpage:"+currentpage);
		res.view('homepage',{title: "text", type: "1"});
	},

	img: function(req, res){
		res.view('homepage', {title: "img", type: "2"});
	}
};

