# Web CV

This is my Web CV, developed in react. It was deployed on Netlify, and it is now deployed on Vercel.

You can access last version of the website directly on `https://janleo.fr` or on `https://leojan.fr`

## Run the project

First, you have to run `npm install`, in order to install the needed dependencies.   
Then, you have to run `npm run dev`, to start the development server. After a few minutes, you can access via your browser the page `http://localhost:3000`.

## Run the Backoffice

You need to have the back office running in order to serve the data to the front end.
You can find the back office on this repository : `https://github.com/TheTisiboth/WebCV_backend`

## React-Leaflet

I'm using React-Leaflet in order to display a map. I'm using geoJSON datas, given by `https://geojson-maps.ash.ms/`. It helps to build a custom geoJSON.   
The resulting JSON has to be converted, thanks to this website : `http://mapster.me/right-hand-rule-geojson-fixer/`, because it's not well formated.

## Technical details

The project used to be created with `create-react-app`. I then switched to vite, and eventually I migrated to Next.js.

### Copy types script

I'm using a script in order to copy the types from the backend to the frontend, in order to have a unique source of truth for the types.
I followed this [documentation](https://strapi.io/blog/improve-your-frontend-experience-with-strapi-types-and-type-script) to achieve this.
I only used the script to copy some files, and I adapted it to my needs.

#### How to use it

You first have to generate the types from the backend. You can do this by running the following command in the backend repository:
```
pnpm run generate-types
```

Then, you have to copy the generated types to the frontend. You can do this by running the following command in the frontend repository:
```
npm run copyTypes
```

And that's it! You can now use the types in the frontend.
