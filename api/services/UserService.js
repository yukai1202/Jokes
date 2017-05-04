var Constant = require('../common/Constant');
module.exports = {
	queryArticlesByPage: function(pageIndex, pageCount, type, cb){
		
		//return Article.find({where: {validated:1, type: type},sort:'id desc'}).paginate({page: pageIndex, limit: pageCount}).populateAll();
		/*User.findAll(
			{
				attributes: ['username', [sequelize.fn('COUNT', sequelize.col('articles.id')), 'ArticleCount']],
				include: [
					{model: Article, as: 'articles', attributes:[]}
				],
				group: ['User.id'] 
			}
		)
		.then(function(users){
			cb(null, users);
		}, function(e){
			sails.log.error("error:"+e.message);
		});*/
		Article.findAll(
			{
				attributes:{
					include: [
						[sequelize.fn('COUNT', sequelize.col("favourites.id")), 'favouriteCount'],
						[sequelize.fn('COUNT', sequelize.fn('DISTINCT', sequelize.col("comments.id"))), 'commentsCount'],
						[sequelize.fn('COUNT', sequelize.fn('DISTINCT', sequelize.col("votesUp.id"))), 'voteUpCount'],
						[sequelize.fn('COUNT', sequelize.fn('DISTINCT', sequelize.col("votesDown.id"))), 'voteDownCount']
					],
					exclude: 'UserId'
				},
				
				where: {
					validated: 1,
					type: type
				},
				order: [['id', 'DESC']],
				include: [
					{	model: User, 
						attributes:['alias', 'avatar', ['id', 'userId']]
					},
					{
						model: Favourite, as: 'favourites', 
						attributes:[], duplicating: false, required:false
					},
					{
						model: Comment, as: 'comments', 
						attributes:[], duplicating: false, required:false
					},
					{
						model: Vote, as: 'votesUp', 
						attributes:[], duplicating: false,required:false, 
						where:{voteStatus: Constant.VOTE_UP_STATUS}
					},
					{
						model: Vote, as: 'votesDown', 
						attributes:[], duplicating: false,required:false, 
						where:{voteStatus: Constant.VOTE_DOWN_STATUS}
					}
				],
				group: ['Article.id'],
				limit:pageCount,
				offset: (pageIndex-1)*pageCount,
				logging:true 
			}
		).then((articles)=>{
			sails.log.debug(JSON.stringify(articles));
			/*var arrays = articles.map(function(a){
				return a.toJSON(); 
			});*/
			cb(null, articles);
		}, (e)=>{
			sails.log.error("error:"+e.message);
			cb(e);
		});
	}
};