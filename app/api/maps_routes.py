from flask import Blueprint, jsonify
from ..config import Config

config = Config()
maps_api_key = config.GOOGLE_MAPS_API_KEY

maps_routes = Blueprint('maps', __name__)

@maps_routes.route('/key', methods=['POST'])
def get_key():
    return jsonify({'googleMapsAPIKey': maps_api_key})

# if __name__ == 'maps':
#     maps_routes.run()
