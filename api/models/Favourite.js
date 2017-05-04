module.exports = {
    attributes: {

    },
    associations: function() {
        Favourite.belongsTo(Article);
        Favourite.belongsTo(User);
    },
    options: {
        freezeTableName: true,
        classMethods: {},
        instanceMethods: {},
        hooks: {}
    }
}
