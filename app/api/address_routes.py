from flask import Blueprint, jsonify, request
from .auth_routes import validation_errors_to_error_messages
from app.models import Address, db
from app.forms import AddressForm

address_routes = Blueprint('address', __name__)

@address_routes.route('', methods=['POST'])
def post_address():
    '''
    Post a Address
    '''
    form = AddressForm()
    form['csrf_token'].data = request.cookies['crsf_token']
    if form.validate_on_submit():
        data = form.data
        new_address = Address(user_id=data['user_id'],
                              city=data['city'],
                              state=data['state'],
                              zipcode=data['zipcode'])
        db.session.add(new_address)
        db.session.commit()
        return {'address': new_address.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
