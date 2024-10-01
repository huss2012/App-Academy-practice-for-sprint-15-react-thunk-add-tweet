
module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  db: {
    username: process.env.DB_USERNAME || 'Hussain',
    password: process.env.DB_PASSWORD || 'Hussain',
    database: process.env.DB_DATABASE || 'twitter_lite',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  }
};
