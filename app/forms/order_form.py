from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError


class OrderForm(FlaskForm):
    user_id = IntegerField()
