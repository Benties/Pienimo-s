from flask import Blueprint, jsonify
from app.models import Pie

pie_routes = Blueprint('pies', __name__)

@pie_routes.route('/menu')
def pie_menu():
    '''
    Query for all pies on the menu and returns them in a list of user dictionaries
    '''
    pies = Pie.query.filter_by(menu_item=True).all()
    return {'pies': [pie.to_dict() for pie in pies]}


# @pie_routes.route('/')
