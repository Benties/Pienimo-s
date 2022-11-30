from flask import Blueprint, jsonify, request
from app.models import Pie, db, Order
from app.forms import PieForm
from app.forms import OrderForm
from .auth_routes import validation_errors_to_error_messages

pie_routes = Blueprint('pies', __name__)


@pie_routes.route('/menu')
def pie_menu():
    '''
    Query for all pies on the menu and returns them in a list of user dictionaries
    '''
    pies = Pie.query.filter_by(menu_item=True).all()
    return {'pies': [pie.to_dict() for pie in pies]}

@pie_routes.route('', methods=['POST'])
def post_pie():
    '''
    Post a Pie
    '''
    form = PieForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        data = form.data
        new_pie = Pie(quantity=data['quantity'],
                    order_id=None,
                    menu_item=False,
                    price=data['price'],
                    bake=data['bake'],
                    cut=data['cut'],
                    size=data['size'],
                    style=data['style'],
                    seasoning=data['seasoning'],
                    cheese=data['cheese'],
                    robust_inspired_tomato_sauce=data['robust_inspired_tomato_sauce'],
                    hearty_marinara_sauce=data['hearty_marinara_sauce'],
                    honey_bbq_sauce=data['honey_bbq_sauce'],
                    garlic_parmesan_sauce=data['garlic_parmesan_sauce'],
                    alfredo_sauce=data['alfredo_sauce'],
                    ranch=data['ranch'],
                    ham=data['ham'],
                    italian_sausage=data['italian_sausage'],
                    beef=data['beef'],
                    premium_chicken=data['premium_chicken'],
                    bacon=data['bacon'],
                    salami=data['salami'],
                    philly_steak=data['philly_steak'],
                    pepperoni=data['pepperoni'],
                    hot_buffalo_sauce=data['hot_buffalo_sauce'],
                    jalapeno_pepper=data['jalapeno_pepper'],
                    onion=data['onion'],
                    banana_pepper=data['banana_pepper'],
                    diced_tomato=data['diced_tomato'],
                    black_olive=data['black_olive'],
                    mushroom=data['mushroom'],
                    pineapple=data['pineapple'],
                    cheddar_cheese=data['cheddar_cheese'],
                    green_pepper=data['green_pepper'],
                    spinach=data['spinach'],
                    roasted_red_pepper=data['roasted_red_pepper'],
                    feta_cheese=data['feta_cheese'],
                    shredded_parmesan_asiago=data['shredded_parmesan_asiago'],
                    american_cheese=data['american_cheese'],
                    shredded_provolone_cheese=data['shredded_provolone_cheese'])
        db.session.add(new_pie)
        db.session.commit()
        print ('newwwwwwwwwwww', new_pie.to_dict())
        return {'pie': new_pie.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
