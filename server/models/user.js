module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
      },
      phoneNo: {
        type: DataTypes.INTEGER,
      }
  });
    
    User.associate = (models) => {
     User.hasMany(models.Recipe, {
     foreignKey: 'userid',
     as: 'recipes',
     }); 

     User.hasMany(models.Favorites, {
     foreignKey: 'userid',
     as: 'favorites',
     });   
    };
    return User;
};