from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length


class AddressForm(FlaskForm):
    user_id = IntegerField('user_id')
    street_address = StringField('street_address', validators=[DataRequired(message='Please enter a valid City')])
    city = StringField('city', validators=[DataRequired(message='Please enter a valid City')])
    state = StringField('state', validators=[DataRequired(message='Please enter a valid State')])
    zipcode = StringField('zipcode', validators=[DataRequired(message='Please ente a valid Zipcode')])
