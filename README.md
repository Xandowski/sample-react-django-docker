# Sample docker react and django project with postgres and adminer

clone the repository

```
git clone https://github.com/Xandowski/sample-react-django-docker.git
```

optional: create a viurtalenv

```
python3 -m venv .venv
source .venv/bin/activate
```

then generate the .env file

```
python3 backend/contrib/env_gen.py
```

define the postgres variables on .env file.:

```
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/NAME
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
DB_HOST=postgres
```
**obs:** if you are going to use other values, you need to change on docker-compose file:

```
services:
  db:
    image: postgres
    restart: always
    container_name: postgres
    environment:
      - POSTGRES_NAME=
      - POSTGRES_USER=
      - POSTGRES_PASSWORD=
```


the folder structure should be look like this:

```
├── README.md
├── backend
│   ├── Dockerfile
│   ├── backend
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── asgi.py
│   │   ├── core
│   │   │   ├── __init__.py
│   │   │   ├── __pycache__
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   ├── 0001_initial.py
│   │   │   │   ├── __init__.py
│   │   │   │   └── __pycache__
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── contrib
│   │   └── env_gen.py
│   ├── manage.py
│   └── requirements.txt
├── docker-compose.yml
└── frontend
    ├── Dockerfile
    ├── index.html
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── App.tsx
    │   ├── assets
    │   │   ├── docker.png
    │   │   ├── logo.svg
    │   │   └── reactjs.gif
    │   ├── main.tsx
    │   ├── styles
    │   │   └── App.css
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── yarn.lock
```

the run the docker command:

```
docker compose up
or
docker-compose up
```

this will bring up the api on localhost:8000/api/todos, the react app on localhost:3000, postgres and adminer on localhost:8080 

