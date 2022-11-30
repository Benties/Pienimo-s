from .db import db, environment, SCHEMA, add_prefix_for_prod



class Pie(db.Model):
    __tablename__ = 'pies'

    if environment == 'production':
        __table__args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    # order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), nullable=True)
    # easy_order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('easyorders.id')), nullable=True)
    menu_item = db.Column(db.Boolean, default=False)
    name = db.Column(db.String(20))
    price = db.Column(db.Float, nullable=False)
    bake = db.Column(db.String, nullable=False)
    seasoning = db.Column(db.Boolean, default=True)
    cut = db.Column(db.String, nullable=False)
    size = db.Column(db.String, nullable=False)
    style = db.Column(db.String, nullable=False)
    cheese = db.Column(db.Integer, default=0)
    robust_inspired_tomato_sauce = db.Column(db.Integer, default=0)
    hearty_marinara_sauce = db.Column(db.Integer, default=0)
    honey_bbq_sauce = db.Column(db.Integer, default=0)
    garlic_parmesan_sauce = db.Column(db.Integer, default=0)
    alfredo_sauce = db.Column(db.Integer, default=0)
    ranch = db.Column(db.Integer, default=0)
    ham = db.Column(db.Integer, default=0)
    italian_sausage = db.Column(db.Integer, default=0)
    beef = db.Column(db.Integer, default=0)
    premium_chicken = db.Column(db.Integer, default=0)
    bacon = db.Column(db.Integer, default=0)
    salami = db.Column(db.Integer, default=0)
    philly_steak = db.Column(db.Integer, default=0)
    pepperoni = db.Column(db.Integer, default=0)
    hot_buffalo_sauce = db.Column(db.Integer, default=0)
    jalapeno_pepper = db.Column(db.Integer, default=0)
    onion = db.Column(db.Integer, default=0)
    banana_pepper = db.Column(db.Integer, default=0)
    diced_tomato = db.Column(db.Integer, default=0)
    black_olive = db.Column(db.Integer, default=0)
    mushroom = db.Column(db.Integer, default=0)
    pineapple = db.Column(db.Integer, default=0)
    cheddar_cheese = db.Column(db.Integer, default=0)
    green_pepper = db.Column(db.Integer, default=0)
    spinach = db.Column(db.Integer, default=0)
    roasted_red_pepper = db.Column(db.Integer, default=0)
    feta_cheese = db.Column(db.Integer, default=0)
    shredded_parmesan_asiago = db.Column(db.Integer, default=0)
    american_cheese = db.Column(db.Integer, default=0)
    shredded_provolone_cheese = db.Column(db.Integer, default=0)


    def to_dict(self):
        return {
            'id' : self.id,
            'quantity' : self.quantity,
            # 'order_id' : self.order_id,
            # 'easy_order_id' : self.easy_order_id,
            'menu_item': self.menu_item,
            'name' : self.name,
            'price': self.price,
            'bake': self.bake,
            'cut' : self.cut,
            'size' : self.size,
            'style' : self.style,
            'seasoning': self.seasoning,
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
            'diced_tomato' : self.diced_tomato,
            'black_olive' : self.black_olive,
            'mushroom' : self.mushroom,
            'pineapple' : self.pineapple,
            'cheddar_cheese' : self.cheddar_cheese,
            'green_pepper' : self.green_pepper,
            'spinach' : self.spinach,
            'roasted_red_pepper': self.roasted_red_pepper,
            'feta_cheese' : self.feta_cheese,
            'shredded_parmesan_asiago' : self.shredded_parmesan_asiago,
            'american_cheese' : self.american_cheese,
            'shredded_provolone_cheese' : self.shredded_provolone_cheese
        }
