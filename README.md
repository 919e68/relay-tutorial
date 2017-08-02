sequelize init --options-path ./server/config/sequelize.json
sequelize db:migrate --options-path ./server/config/sequelize.json
sequelize migration:create --options-path ./server/config/sequelize.json


for relay
npm install relay-runtime
