module.exports = {
	attributes:{
		ip: {
        	type: 'string'
        },

        voteStatus: {
        	type: 'integer',
        	enum: [0,1]
        },

        articleId: {
            model: 'article'
        },
        userId: {
            model: 'user'
        }
	}
}