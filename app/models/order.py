from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime
import json

class Order(db.Model):
    __tablename__ = 'orders'

    if environment == 'production':
        __table__args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    # store_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('stores.id')), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            # 'store_id': self.store_id,
            'created_at': json.dumps(self.created_at, default=str),
            'updated_at': json.dumps(self.updated_at, default=str)
        }
