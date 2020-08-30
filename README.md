# Passnfly Tech Test

## run with docker in production mode

```bash
# build image
docker build --tag lbarone-passnfly-test:1.0 .

# run image
docker run -dp 3000:3000 lbarone-passnfly-test:1.0
```

## run development
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```
