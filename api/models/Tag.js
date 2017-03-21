module.exports = {
	attributes:{
		id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            required: true
        },
        tagName: {
        	type: 'string',
        	size: 20,
        	defaultsTo: ''
        },

        articleTags: {
            collection: 'ArticleTag',
            via: 'tagId'
        }
	}
}