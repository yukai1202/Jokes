/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            required: true
        },
        title:{
        	type: 'text'
        },
        content:{
        	type: 'text'
        },
        img: {
            type: 'text',
            defaultsTo: ''
        },
        type: {
            type: 'string',
            enum: ['text', 'image'],
            defaultsTo: '',
            size: 10
        },
        pubDateTime: {
            type: 'datetime',
            defaultsTo: function(){
                return new Date();
            }
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
        img: {
            type: 'string'
        },

        source: {
            type: 'string'
        },

        userId: {
            model: 'user'
        },

        articleTags: {
            collection: 'ArticleTag',
            via: 'articleId'
        },
        comments: {
            collection: 'comment',
            via: 'articleId'
        },
        favourites: {
            collection: 'favourite',
            via: 'articleId'
        }
    }
};
