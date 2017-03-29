module.exports = {
	attributes:{
		ip: {
        	type: 'string'
        },

        voteStatus: {
        	type: 'integer',
        	enum: [0,1]
        },

        article: {
            model: 'Article'
        },
        user: {
            model: 'User'
        }
	}
}