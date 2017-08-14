export default function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(100),
    },
    lastName: {
      type: DataTypes.STRING(100),
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(100)
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: true
  })
}
