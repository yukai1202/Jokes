/**
 * User.js
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
        userName:{
        	type: 'string',
        	size: 40
        },
        password:{
        	type: 'string',
        	size: 40
        },
        alias: {
        	type: 'string',
        	size: 40
        },
        avatar:{
        	type: 'string'
        },
        email: {
        	type: 'string',
        	size: 40
        },
        phoneNumber: {
        	type: 'string',
        	defaultsTo: ''
        },

        articles: {
        	collection: 'article',
        	via: 'userId'
        },
        comments: {
            collection: 'comment',
            via: 'userId'
        },
        favourites: {
            collection: 'favourite',
            via: 'userId'
        },
        votes: {
            collection: 'vote',
            via: 'userId'
        }
    }
};
