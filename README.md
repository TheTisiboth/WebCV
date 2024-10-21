# Web CV

This is my Web CV, developped in react. It is deployed on Netlify. here is a deployement status :

[![Netlify Status](https://api.netlify.com/api/v1/badges/00a29a99-777f-4bc8-8e9d-8476e89adccf/deploy-status)](https://app.netlify.com/sites/janleo/deploys)

If the status is `success`, you can access last version of the website directly on `https://janleo.fr`.

## Run the project

First, you have to run `npm install`, in order to install the needed dependencies.   
Then, you have to run `npm start`, to start the development server. After a few minutes, you can acces via your browser the page `http://localhost:3000`.


## React-Leaflet

I'm using React-Leaflet in order to display a map. I'm using geoJSON datas, given by `https://geojson-maps.ash.ms/`. It helps to build a custom geoJSON.   
The resulting JSON has to be converted, thanks to this website : `http://mapster.me/right-hand-rule-geojson-fixer/`, because it's not well formated.

## Technical details

The project used to be created with `create-react-app`. We now switched to vite, in order to have a faster build.
