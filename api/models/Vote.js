module.exports = {
    attributes: {
        ip: {
            type: Sequelize.STRING(40)
        },
        voteStatus:{
            type: Sequelize.ENUM,
            values: ["0", "1"],
            defaultValue:"1"
        }
    },
    associations: function() {
        Vote.belongsTo(Article);
        Vote.belongsTo(User);
    },
    options: {
        freezeTableName: true,
        classMethods: {},
        instanceMethods: {},
        hooks: {}
    }
}
