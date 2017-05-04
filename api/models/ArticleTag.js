module.exports = {
    attributes: {
        
    },
    associations: function() {
        ArticleTag.belongsTo(Article);
        ArticleTag.belongsTo(Tag);
    },
    options: {
        freezeTableName: true,
        classMethods: {},
        instanceMethods: {},
        hooks: {}
    }
}
