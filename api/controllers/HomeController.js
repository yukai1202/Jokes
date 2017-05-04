/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Constant = require('../common/Constant');

module.exports = {
	index: function (req, res) {
		//Constant.init();
		var currentpage = req.param("page");
		if(!currentpage){
			currentpage = 1;
		}
		UserService.queryArticlesByPage(currentpage, Constant.PageCount, Constant.TYPE_TEXT, (error, articles)=>{
			if(error){
				return res.serverError();
			}

			res.view('home', {type: Constant.TYPE_TEXT, pageCount: Constant.PageCount, currentPage:currentpage, data: articles});
		});

		 
	},
	text: function(req, res){
		sails.log.debug("text page."+req.param("page"));

		var currentpage = req.param("page");
		
		if (!Constant.isNumber(currentpage)) {
		    return res.notFound(null, '404');
		}
		this.index(req, res);
		 
	},
	img: function(req, res){
		
		var currentpage = req.param("page");
		if(!currentpage){
			currentpage = 1;
		}
		sails.log.debug("img page==="+currentpage);
		if (!Constant.isNumber(currentpage)) {
			
		    return res.notFound(null, '404');
		}

		UserService.queryArticlesByPage(currentpage, Constant.PageCount, Constant.TYPE_IMAGE, (error, articles)=>{
			if(error){
				return res.serverError();
			}

			res.view('home', {type: Constant.TYPE_IMAGE, pageCount: Constant.PageCount, currentPage:currentpage, data: articles});
		});
		 
	},

	testqwe: function(req, res){
		var token = req.token;

		sails.log.debug(token);
		UserService.queryArticlesByPage(1, Constant.PageCount, Constant.TYPE_TEXT, (error, articles)=>{
			res.send(articles);
		});
	},

	auth: function(req, res){
		setTimeout(function(){
			res.json(200, {user: {alias:"yukai", sex:'male'}, token: jwToken.issue({id: 21})});
		},5000);
	}
};

