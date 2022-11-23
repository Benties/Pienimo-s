from .db import db, environment, SCHEMA, add_prefix_for_prod



class Pie(db.model):
    __tablename__ = 'pies'

    if environment == 'production':
        __table__args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), nullable=False)
    # easy_order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('easyorders.id')), nullable=False)
    menu_item = db.Column(db.Boolean, default=False)
    name = db.Column(db.String(100))
    price = db.Column(db.float, nullable=False)
    bake = db.Column(db.Integer)
    cut = db.Column(db.Integer)
    size = db.Column(db.Integer)
    style = db.Column(db.String)
    cheese = db.Column(db.Integer)
    robust_inspired_tomato_sauce = db.Column(db.Integer)
    hearty_marinara_sauce = db.Column(db.Integer)
    honey_bbq_sauce = db.Column(db.Integer)
    garlic_parmesan_sauce = db.Column(db.Integer)
    alfredo_sauce = db.Column(db.Integer)
    ranch = db.Column(db.Integer)
    ham = db.Column(db.Integer)
    italian_sausage = db.Column(db.Integer)
    beef = db.Column(db.Integer)
    premium_chicken = db.Column(db.Integer)
    bacon = db.Column(db.Integer)
    salami = db.Column(db.Integer)
    philly_steak = db.Column(db.Integer)
    pepperoni = db.Column(db.Integer)
    hot_buffalo_sauce = db.Column(db.Integer)
    jalapeno_pepper = db.Column(db.Integer)
    onion = db.Column(db.Integer)
    banana_pepper = db.Column(db.Integer)
    diced_tomatoe = db.Column(db.Integer)
    black_olive = db.Column(db.Integer)
    mushroom = db.Column(db.Integer)
    pineapple = db.Column(db.Integer)
    cheddar_cheese = db.Column(db.Integer)
    green_pepper = db.Column(db.Integer)
    spinach = db.Column(db.Integer)
    roasted_red_pepper = db.Column(db.Integer)
    feta_cheese = db.Column(db.Integer)
    shredded_parmesan_asiago = db.Column(db.Integer)



    def to_dict(self):
        return {
            'id' : self.id,
            'order_id' : self.order_id,
            'easy_order_id' : self.easy_order_id,
            'menu_item': self.menu_item,
            'name' : self.name,
            'price': self.price,
            'bake': self.bake,
            'cut' : self.cut,
            'size' : self.cut,
            'style' : self.style,
            'cheese' : self.cheese,
            'robust_inspired_tomato_sauce' : self.robust_inspired_tomato_sauce,
            'hearty_marinara_sauce' : self.hearty_marinara_sauce,
            'honey_bbq_sauce' : self.honey_bbq_sauce,
            'garlic_parmesan_sauce' : self.garlic_parmesan_sauce,
            'alfredo_sauce' : self.alfredo_sauce,
            'ranch' : self.ranch,
            'ham' : self.ham,
            'italian_sausage' : self.italian_sausage,
            'beef' : self.beef,
            'premium_chicken' : self.premium_chicken,
            'bacon' : self.bacon,
            'salami' : self.salami,
            'philly_steak' : self.philly_steak,
            'pepperoni' : self.pepperoni,
            'hot_buffalo_sauce' : self.hot_buffalo_sauce,
            'jalapeno_pepper' : self.jalapeno_pepper,
            'onion' : self.onion,
            'banana_pepper' : self.banana_pepper,
            'diced_tomatoe' : self.diced_tomatoe,
            'black_olive' : self.black_olive,
            'mushroom' : self.mushroom,
            'pineapple' : self.pineapple,
            'cheddar_cheese' : self.cheddar_cheese,
            'green_pepper' : self.green_pepper,
            'spinach' : self.spinach,
            'roasted_red_pepper': self.roasted_red_pepper,
            'feta_cheese' : self.feta_cheese,
            'shredded_parmesan_asiago' : self.shredded_parmesan_asiago
        }
