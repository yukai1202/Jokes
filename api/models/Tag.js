module.exports = {
    attributes: {
        tagName: {
            type: Sequelize.STRING(40)
        },
    },
    associations: function() {
        Tag.hasMany(ArticleTag, { as: 'articleTags' });
    },
    options: {
        freezeTableName: true,
        classMethods: {},
        instanceMethods: {},
        hooks: {}
    }
}
