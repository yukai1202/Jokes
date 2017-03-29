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
        	via: 'user'
        },
        comments: {
            collection: 'comment',
            via: 'user'
        },
        favourites: {
            collection: 'favourite',
            via: 'user'
        },
        votes: {
            collection: 'vote',
            via: 'user'
        }
    }
};
