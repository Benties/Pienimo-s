from app.models import db, User, environment, SCHEMA


def seed_users():
    demo = User(
        first_name='Demo',
        last_name='emod',
        email='demo@aa.io',
        password='password',
        phone_number='111-111-1111',
        reward_point=30)
    marnie = User(
        first_name='marnie',
        last_name='einram',
        email='marnie@aa.io',
        password='password',
        phone_number='222-222-2222',
        reward_point=10)
    bobbie = User(
        first_name='bobbie',
        last_name='eibbob',
        email='bobbie@aa.io',
        password='password',
        phone_number='333-333-3333',
        reward_point=40)

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
