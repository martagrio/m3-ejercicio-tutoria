![Loh();](assets/img/loh.png)

---

# Brecha de seguridad

Sois miembros de un nuevo grupo de hackers y el pasado fin de semana entrásteis en varios equipos consiguiendo datos sensibles de algunos de los usuarios, entre los cuales se encuentran algunos personajes famosos.

Vuestro grupo, **Legion of Hell**, o "loh();", ahora necesita publicar los datos para que todo el mundo pueda acceder a ellos y completar así su venganza.

Como hay un poco de prisa os van a facilitar instrucciones para crear, de manera incremental, una web-app donde consultar los datos:

## Fase 1

Vais a pintar una primera versión de los datos, sin filtrado ni nada, lo importante es que la información esté fuera.

Como el equipo de back tiene que preparar el siguiente ataque os han proporcionado un mock de los datos finales para que podáis ir avanzado:

```json
[
  {
    "name": "Francisco Molina",
    "email": "paco.molina@gmail.com",
    "passwords": ["redbull", "contraseña", "god"],
    "bank": {
      "iban": "ES57 3919 3283 8402 7522 0643",
      "pin": "8970"
    }
  },
  {
    "name": "Bruno Díaz",
    "email": "bruno.diaz@aol.com",
    "passwords": ["bruno-y-ricardo", "thebatrocks", "BB"],
    "bank": {
      "iban": "US24 0776 0001 0000 0000 0001",
      "pin": "0228"
    }
  },
  {
    "name": "Angeles Iglesias",
    "email": "angeles.iglesias@hotmail.com",
    "passwords": ["sword", "0000", "123"],
    "bank": {
      "iban": "ES39 2002 4104 2471 4443 4466",
      "pin": "6732"
    }
  },
  {
    "name": "Lourdes Parra",
    "email": "lourdes.parra@gmail.com",
    "passwords": ["bonnie", "123", "0000"],
    "bank": {
      "iban": "ES23 9636 3150 7215 8752 3353",
      "pin": "3127"
    }
  }
]
```

De cada usuario habéis conseguido:

- nombre
- email
- las 3 últimas contraseñas

 y a partir de estos datos:

 - el IBAN del banco
 - su PIN para la oficina online.

Piden que la aplicación esté hecha con React y que pinte estos datos con estilo espartano, en el componente `App.js`.

## Fase 2

La **Tech lead** de **loh();** os pide ahora que organicéis un poco el proyecto para que no parezca esto un grupo de hacking de cuenca, que se vea que aquí hay nivel.

Debéis usar al menos 5 componentes nuevos:

1. `Page.js`, que se cargará desde `App.js` y mostrará nuestra página principal.
1. `Header.js`, que en un futuro contendrá nuestro logo pero nadie está muy seguro de ello porque la gente de programación no encuentra a un diseñador al que chantajear para que haga el logo, por ahora tendrá el título "Legion of Hell".
1. `DataList.js`, con la lista de datos.
1. `DataCard`, con la tarjeta de datos de cada usuario hackeado.
1. `Footer.js`, con el texto "loh();" y un pequeño reloj con la hora local del usuario, que funcionará con su estado propio, independiente del estado del componente `App.js`.

## Fase 3

Parece que la api se le está atragantando al equipo de back porque en los registros hay personajes importantes y las autoridades están intentando localizar el origen del problema (vosotros).

Os piden que vayáis avanzado con los datos del mock y creéis un componente `Filters.js` con un filtro por el email, de manera que cualquiera pueda consultar si su email ha sido comprometido.

> Este es un buen momento para añadir un id único a cada registro ;)

La UX Lead Engineer no quiere que se filtre con un botón, sino que tal como el usuario escriba en el campo se vayan filtrando los datos.

## Fase 4

Parece que es necesario mostrar cuántos registros habéis conseguido así que nos piden un componente `Status.js` localizado entre los filtros y el listado, que mostrará en todo momento los datos mostrados. Si al filtrar hay 3 registros, tendrá que decir "Mostrando 3 registros", si solo hay uno "Mostrando 1 registro", y así.

Todavía no se sabe cuántos datos se han recogido.

## Fase 5

Vale, el grupo del back ha repelido el ataque del gobierno y por fin ha tenido tiempo de preparar el backend para la api final, y este es nuestro endpoint: [https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json](https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json).

> Os avisan de que el formato final puede diferir del que enviaron para los datos iniciales.

Todo debería seguir igual salvo que hay que usar [la fuente `Ubuntu Mono`](https://fonts.google.com/specimen/Ubuntu+Mono), y bajo el nombre del equipo debe aparecer la fecha del ataque que debe estar incluída en los datos que devuelve el servidor.

## Fase 6

Una vez completado todo esto os piden darle un aspecto muy hacker, os dan libertar, pero quieren ver qué sois capaces de hacer.

**¡Al turrón!**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
