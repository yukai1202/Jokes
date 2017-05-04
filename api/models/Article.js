module.exports = {
  attributes: {
      title: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.TEXT,
        defaultsTo: ''
      },
      type:{
        type: Sequelize.ENUM,
        values: ["1", "2"],
        defaultValue: "1"
      },
      pubDateTime:{
        type: Sequelize.STRING
      },
      validated: {
        type: Sequelize.ENUM,
        values: ["0", "1"],
        defaultValue:"0"
      },
      ip:{
        type: Sequelize.STRING(20),
        defaultValue: ''
      },

      img:{
        type: Sequelize.STRING
      },
      width:{
        type:Sequelize.INTEGER
      },
      height:{
        type:Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING
      },

      share: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
  },
  associations: function() {
    Article.belongsTo(User);
    Article.hasMany(Comment, { as: 'comments' });
    Article.hasMany(Favourite, { as: 'favourites' });
    Article.hasMany(Vote, { as: 'votesUp' });
    Article.hasMany(Vote, { as: 'votesDown' });
    Article.hasMany(ArticleTag, { as: 'articleTags' });
  },
  options: {
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {},
      hooks: {}
  }
};
