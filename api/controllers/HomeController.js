/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Constant = require('../common/Constant');

module.exports = {
	index: function (req, res) {
		var currentpage = parseInt(req.param("page"));
		if(!currentpage){
			currentpage = 1;
		}
		UserService.queryArticlesByPage(currentpage, Constant.PageCount, Constant.TYPE_TEXT).then(function(data){
			sails.log.debug("==>"+JSON.stringify(data[0]));
			sails.log.debug("==>"+data[0].getCommentsCount());
			res.view('home', {type: Constant.TYPE_TEXT, pageCount: 100, currentPage:currentpage});
		}, function(error){
			res.serverError();
		});
		//res.view('home', {type: Constant.TYPE_TEXT, pageCount: Constant.PageCount, currentPage:currentpage});
	},
	text: function(req, res){
		sails.log.debug("text page."+req.param("page"));

		var currentpage = parseInt(req.param("page"));
		if(!currentpage){
			currentpage = 1;
		}


		if (typeof currentpage != "number") {
		    return res.notFound(null, '404');
		}
		//UserService.queryArticlesByPage(currentpage, Constant.PageCount, Constant.TYPE_TEXT);
		UserService.queryArticlesByPage(currentpage, Constant.PageCount, Constant.TYPE_TEXT).then(function(data){
			sails.log.debug("==>"+JSON.stringify(data));
			res.view('home', {type: Constant.TYPE_TEXT, pageCount: 100, currentPage:currentpage});
		}, function(error){
			res.serverError();
		});
		//res.view('home', {type: Constant.TYPE_TEXT, pageCount: Constant.PageCount, currentPage:currentpage});
	},
	img: function(req, res){
		sails.log.debug("img page");
		var currentpage = parseInt(req.param("page"));
		if(!currentpage){
			currentpage = 1;
		}
		if (typeof currentpage != "number") {
		    return res.notFound(null, '404');
		}
		UserService.queryArticlesByPage(currentpage, Constant.PageCount, Constant.TYPE_IMAGE).then(function(data){
			sails.log.debug("==>"+JSON.stringify(data));
			res.view('home', {type: Constant.TYPE_IMAGE, pageCount: 100, currentPage:currentpage});
		}, function(error){
			res.serverError();
		});
	}
};

