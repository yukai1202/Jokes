module.exports = {
	queryArticlesByPage: function(pageIndex, pageCount, type){
		
		return Article.find({where: {validated:1, type: type},sort:'id desc'}).paginate({page: pageIndex, limit: pageCount}).populateAll();

	}
};