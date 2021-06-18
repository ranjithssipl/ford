# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration:

    Project setup
            Custom installation:
            Django:
                -> go into django dir
                -> virtualenv -p python3 indospace_env
                -> source indospace_env/bin/activate
                -> pip install -r requirements
                -> configure database name, user, password in indospace/settings.py
                    DATABASES = {
                        'default': {
                            'NAME': 'your database name',
                            'USER': 'your database username',
                            'PASSWORD': 'your database password',
                        }
                    }
                -> python manage.py migrate
                -> python manage.py runserver 8000

