/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var datetime = require('node-datetime');
var Constant = require('../common/Constant');
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
            type: 'string',
            defaultsTo: function(){
                return datetime.create(Date.now()).format('Y-m-d H:M:S').toString();
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

        width:{
            type: 'integer'
        },
        height:{
            type: 'integer'
        },
        source: {
            type: 'string'
        },

        user: {
            model: 'User'
        },

        articleTags: {
            collection: 'ArticleTag',
            via: 'article'
        },
        comments: {
            collection: 'comment',
            via: 'article'
        },
        favourites: {
            collection: 'favourite',
            via: 'article'
        },

        votes: {
            collection: 'vote',
            via: 'article'
        },

        getCommentsCount: function(){
            return this.comments.length;
        },

        getFavouritesCount: function(){
            return this.favourites.length;
        },

        getVotesUpCount: function(){
            return this.votes.filter(function(v){
                return v.voteStatus == Constant.VOTE_UP_STATUS;
            }).length;
        },

        GetVotesDownCount: function(){
            return this.votes.filter(function(v){
                return v.voteStatus == Constant.VOTE_DOWN_STATUS;
            }).length;
        }
    }
};
