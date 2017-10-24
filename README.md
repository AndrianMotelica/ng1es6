## About
Dockerized npm served with Apache,

onboard: Babel, Webpack, Angular 1.x written in ES2015 

## Installation
1. `docker build . -t node-service`
2. `docker run -d -p 4990:80 --name node-app -v $(pwd)/application:/var/www/node node-service`

(!note) $(pwd) is used as absolute path(if it's not working for you just use /path/to/container)

---
## Tips
Enter in container: docker exec -it node-app bash
to serve modified JS files hit: npm run webpack 
