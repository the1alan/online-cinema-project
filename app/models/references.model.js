module.exports = (db) => {
  
  // 1. User ↔ Subscription
  db.users.belongsTo(db.subscriptions, {
    foreignKey: 'subscription_id',
    as: 'subscription'
  });
  
  db.subscriptions.hasMany(db.users, {
    foreignKey: 'subscription_id',
    as: 'users'
  });
  
  // 2. User ↔ View
  db.users.hasMany(db.views, {
    foreignKey: 'user_id',
    as: 'views'
  });
  
  db.views.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
  });
  
  // 3. Content ↔ View
  db.contents.hasMany(db.views, {
    foreignKey: 'content_id',
    as: 'views'
  });
  
  db.views.belongsTo(db.contents, {
    foreignKey: 'content_id',
    as: 'content'
  });
  
  // 4. User ↔ Payment
  db.users.hasMany(db.payments, {
    foreignKey: 'user_id',
    as: 'payments'
  });
  
  db.payments.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
  });
  
  // 5. Payment ↔ Subscription
  db.payments.belongsTo(db.subscriptions, {
    foreignKey: 'subscription_id',
    as: 'subscription'
  });
  
  db.subscriptions.hasMany(db.payments, {
    foreignKey: 'subscription_id',
    as: 'payments'
  });
  
  // 6. Content ↔ Genre (many-to-many)
  db.contents.belongsToMany(db.genres, {
    through: db.contentGenres,
    foreignKey: 'content_id',
    otherKey: 'genre_id',
    as: 'genres'
  });
  
  db.genres.belongsToMany(db.contents, {
    through: db.contentGenres,
    foreignKey: 'genre_id',
    otherKey: 'content_id',
    as: 'contents'
  });
};
