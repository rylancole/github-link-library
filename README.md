# Github Link Library

_Powered by [web-extension-starter](https://github.com/abhijithvijayan/web-extension-starter/tree/react-typescript) from @abhijithvijayan_

## Getting Started

### Install

```sh
git clone https://github.com/rylancole/github-link-library.git
cd github-link-library
yarn install
``` 

### Configure

```sh
echo {\"GITHUB_AUTH\":\"AUTH_KEY\"} > src/api/secret.json
```
Update `AUTH_KEY` in `src/api/secret.json` to be a personal access key for your Github account

### Develop or Build

For hot reloading when making code changes use one of the following:
```sh
yarn run dev:chrome
yarn run dev:firefox
yarn run dev:opera
```

To load and use
```sh
yarn run build
```
Go to the developer settings of your browser and load as a temporary extension from `/extension`

## Screenshots

![Screen Shot 2021-03-01 at 9 06 26 AM](https://user-images.githubusercontent.com/35235782/109531998-75203100-7a6d-11eb-930d-34f6d13f7238.png)

