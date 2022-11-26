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

    Honolulu_hawaiian = Pie(
        quantity=1,
        menu_item=True,
        name='Honolulu Hawaiian',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=2,
        robust_inspired_tomato_sauce=2,
        ham=2,
        bacon=2,
        shredded_provolone_cheese=2,
        pineapple=2,
        roasted_red_pepper=2
    )

    Deluxe = Pie(
        quantity=1,
        menu_item=True,
        name='Deluxe',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=2,
        robust_inspired_tomato_sauce=2,
        italian_sausage=2,
        pepperoni=2,
        onion=2,
        green_pepper=2,
        mushroom=2
    )

    Cali_chicken_bacon_ranch = Pie(
        quantity=1,
        menu_item=True,
        name='Cali Chicken Bacon Ranch',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=2,
        ranch=2,
        premium_chicken=2,
        bacon=2,
        shredded_provolone_cheese=2,
        diced_tomato=2
    )

    Buffalo_chicken = Pie(
        quantity=1,
        menu_item=True,
        name='Buffalo Chicken',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        premium_chicken=2,
        hot_buffalo_sauce=2,
        shredded_provolone_cheese=2,
        cheddar_cheese=2,
        onion=2,
        american_cheese=2
    )

    Ultimate_pepperoni = Pie(
        quantity=1,
        menu_item=True,
        name='Ultimate Pepperoni',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=2,
        robust_inspired_tomato_sauce=2,
        pepperoni=2,
        shredded_provolone_cheese=2,
        cheddar_cheese=2,
        shredded_parmesan_asiago=2
    )

    Memphis_bbq_chicken = Pie(
        quantity=1,
        menu_item=True,
        name='Memphis BBQ Chicken',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=2,
        honey_bbq_sauce=2,
        premium_chicken=2,
        onion=2,
        shredded_provolone_cheese=2,
        cheddar_cheese=2
    )

    Wisconsin_6_cheese = Pie(
        quantity=1,
        menu_item=True,
        name='Wisconsin 6 Cheese',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=2,
        robust_inspired_tomato_sauce=2,
        shredded_provolone_cheese=2,
        cheddar_cheese=2,
        feta_cheese=2,
        shredded_parmesan_asiago=2
    )

    Spinach_feta = Pie(
        quantity=1,
        menu_item=True,
        name='Spinach & Feta',
        price='17.99',
        bake='normal',
        cut='pie',
        size='large',
        style='hand',
        cheese=2,
        alfredo_sauce=2,
        onion=2,
        shredded_provolone_cheese=2,
        spinach=2,
        feta_cheese=2,
        shredded_parmesan_asiago=2
    )



    db.session.add_all([ExtravaganZZa, MeatZZA, Philly_steak, Pacific_veggie,
    Honolulu_hawaiian, Deluxe, Cali_chicken_bacon_ranch, Buffalo_chicken,
    Ultimate_pepperoni, Memphis_bbq_chicken, Wisconsin_6_cheese, Spinach_feta ])
    db.session.commit()

def undo_pies():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.pies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pies")

    db.session.commit()
