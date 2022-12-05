from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length, Regexp
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')



# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    # username = StringField(
    #     'username', validators=[DataRequired(), username_exists])
    first_name = StringField('first_name', validators=[Length(min=1, max=50, message='Please enter a first name between 1 and 50 characters'),DataRequired(message='Please enter a first name')])
    last_name = StringField('last_name', validators=[Length(min=1, max=50, message='Please enter a last name between 1 and 50 characters'),DataRequired(message='Please enter a last name')])
    email = StringField('email', validators=[DataRequired(message='Please enter a valid email'), user_exists, Email(message='Please enter a valid e-mail address.'), Length(min= 1, max=255, message='Please enter an e-mail under 255 characters.')])
    password = StringField('password', validators=[DataRequired(message='Please enter a valid password'), Length(min=4, max=50, message='Please enter a valid password between 4 and 50 characters')])
    phone_number = StringField('phone number', validators=[DataRequired(message='Please enter a valid phone number'), Regexp("^\d{3}[-]{1}\d{3}[-]{1}\d{4}$", message="Valid phone number format is xxx-xxx-xxxx")])
    # reward_point = IntegerField('reward point', validators=[DataRequired()])
