module.exports = {
  attributes: {
    userName: {
      type: Sequelize.STRING(40),
      unique: true
    },
    password:{
      type: Sequelize.STRING(40)
    },
    alias:{
      type: Sequelize.STRING(40),
      unique: true
    },
    avatar:{
      type: Sequelize.STRING
    },
    email:{
      type: Sequelize.STRING
    },
    phoneNumber:{
      type: Sequelize.STRING,
      defaultValue:''
    },

    openId:{
      type: Sequelize.STRING
    },

    source:{
      type:Sequelize.STRING
    }
  },
  associations: function() {
    User.hasMany(Article, {as: 'articles'});
    User.hasMany(Comment, {as: 'comments'});
    User.hasMany(Favourite, {as: 'favourites'});
    User.hasMany(Vote, {as: 'votes'});
  },
  options: {
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {},
      hooks: {}
  }
};
