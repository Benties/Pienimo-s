from flask import Blueprint, jsonify, request
from .auth_routes import validation_errors_to_error_messages
from flask_login import login_required
from app.models import Address, db
from app.forms import AddressForm

address_routes = Blueprint('address', __name__)

@address_routes.route('', methods=['POST'])
@login_required
def post_address():
    '''
    Post an Address
    '''
    form = AddressForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_address = Address(user_id=data['user_id'],
                              street_address=data['street_address'],
                              city=data['city'],
                              state=data['state'],
                              zipcode=data['zipcode'])
        db.session.add(new_address)
        db.session.commit()
        return {'address': new_address.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@address_routes.route('/<int:address_id>', methods=['PUT'])
@login_required
def update_address(address_id):
    '''
    Update an address
    '''
    address = Address.query.get_or_404(address_id)

    form = AddressForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        address.street_address=data['street_address']
        address.city=data['city']
        address.state=data['state']
        address.zipcode=data['zipcode']
        db.session.commit()
        return {'address': address.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
