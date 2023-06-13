from app import db, app

with app.app_context():
    print('Creating tables...')
    db.create_all()
    print('Tables created.')
