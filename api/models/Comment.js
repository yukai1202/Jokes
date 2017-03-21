module.exports = {
	attributes:{
        id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            required: true
        },

        parentId: {
        	type: 'integer'
        },

        comment: {
        	type: 'text'
        },

        validated: {
            type: 'integer',
            enum: [0, 1],
            defaultsTo: 0
        },
        ip: {
            type: 'string',
            size: 20,
            defaultsTo: ''
        },
        source: {
            type: 'string'
        },

        voteUp: {
        	type: 'integer'
        },

        userId: {
        	model: 'user'
        },
        articleId:{
        	model: 'article'
        }
	}
}