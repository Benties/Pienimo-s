from app.models import db, Pie, environment, SCHEMA

def seed_pies():
    ExtravaganZZa = Pie(
        quantity=1,
        menu_item=True,
        name='ExtravaganZZa',
        price=17.99,
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=3,
        robust_inspired_tomato_sauce=2,
        ham=2,
        italian_sausage=2,
        beef=2,
        pepperoni=2,
        onion=2,
        green_pepper=2,
        black_olive=2,
        mushroom=2)

    MeatZZA = Pie(
        quantity=1,
        menu_item=True,
        name='MeatZZA',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=3,
        robust_inspired_tomato_sauce=2,
        ham=2,
        italian_sausage=2,
        beef=2,
        pepperoni=2)

    Philly_steak = Pie(
        quantity=1,
        menu_item=True,
        name='Philly Cheese Steak',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        philly_steak=2,
        onion=2,
        green_pepper=2,
        mushroom=2,
        american_cheese=2,
        shredded_provolone_cheese=2
    )

    Pacific_veggie = Pie(
        quantity=1,
        menu_item=True,
        name='Pacific Veggie',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=3,
        robust_inspired_tomato_sauce=2,
        shredded_provolone_cheese=2,
        onion=2,
        diced_tomato=2,
        roasted_red_pepper=2,
        black_olive=2,
        feta_cheese=2,
        mushroom=2
    )


    db.session.add_all([ExtravaganZZa, MeatZZA, Philly_steak, Pacific_veggie])
    db.session.commit()

def undo_pies():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.pies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pies")

    db.session.commit()
