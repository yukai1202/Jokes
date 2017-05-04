module.exports = {
    attributes: {
        parentId:{
            type:Sequelize.INTEGER
        },
        comment:{
            type: Sequelize.TEXT
        },
        validated:{
            type: Sequelize.ENUM,
            values: ["0", "1"],
            defaultValue:"0"
        },
        ip:{
            type: Sequelize.STRING(2)
        },
        voteUp: {
            type:Sequelize.INTEGER
        },
        source:{
            type:Sequelize.STRING
        }
    },
    associations: function() {
        Comment.belongsTo(User);
        Comment.belongsTo(Article);
    },
    options: {
        freezeTableName: true,
        classMethods: {},
        instanceMethods: {},
        hooks: {}
    }
}
