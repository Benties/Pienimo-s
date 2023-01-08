from .db import db, environment, SCHEMA, add_prefix_for_prod

class Address(db.Model):
    __tablename__ = 'addresses'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    user = db.relationship('User', back_populates = 'address', lazy='joined')
    # address_type = db.Column(db.String, nullable=False)
    street_address = db.Column(db.String, nullable=False)
    # suite_apt = db.Column(db.String)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    zipcode = db.Column(db.String, nullable=False)
    # address_nickname = db.Column(db.String(50))
    # deliver_instruction = db.Column(db.String(70))

    def to_dict(self):
        return {
        'id': self.id,
        'user_id': self.user_id,
        'street_address': self.street_address,
        # 'address_type': self.address_type,
        # 'suite_apt': self.suite_apt,
        'city': self.city,
        'state': self.state,
        'zipcode': self.zipcode,
        # 'address_nickname': self.address_nickname,
        # 'delivery_instruction': self.deliver_instruction
        }
