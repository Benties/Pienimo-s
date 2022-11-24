from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Pie, Order, db
from app.forms import OrderForm
from .auth_routes import validation_errors_to_error_messages

order_routes = Blueprint('orders', __name__)

@order_routes.route('/', methods=['POST'])
def post_items():
    '''
    Adds a cart items to a order
    '''
    form = OrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    cart = request.json['cartItems']
    if form.validate_on_submit():
        data = form.data
        new_order = Order(user_id=data['user_id'])
        db.session.add(new_order)
        db.session.commit()
        for items in cart:
            curr_pie = Pie.query.get_or_404(items)
            curr_pie.order_id = new_order.id
        db.session.commit()
        return {'order': new_order.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
