from app.models import db, Address, environment, SCHEMA

def seed_addresses():
    address1 = Address(
        user_id = 1,
        street_address = '85 10th Ave',
        city = 'New York',
        state = 'NY',
        zipcode = '10011'
    )
    address2 = Address(
        user_id = 2,
        street_address = '500 W 2nd St',
        city = 'Austin',
        state = 'TX',
        zipcode = '78701'
    )
    address3 = Address(
        user_id = 3,
        street_address = '1600 Amphitheatre Pkwy',
        city = 'Mountain View',
        state = 'CA',
        zipcode = '94043'
    )

    db.session.add(address1)
    db.session.add(address2)
    db.session.add(address3)

    db.session.commit()


def undo_addresses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.addresses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM addresses")

    db.session.commit()
