export default function(sequelize, DataTypes) {
  return sequelize.define('Todo', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    tableName: 'Todos',
    timestamps: true
  })
}
