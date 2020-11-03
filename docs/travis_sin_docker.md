# Configuración de travis sin docker
language: node_js
node_js:
    - "11"
    - "12"
    - "13"
    - "14"
    - "15"
before_install:
    - npm install
    - npm install -g grunt
    - npm install -g jest
script: grunt test