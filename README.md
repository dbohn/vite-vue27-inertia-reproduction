# Vite build issue reproduction

This reproduces an issue when using Vite 3 to bundle a Vue 2.7 app, that uses [Inertia JS](https://inertiajs.com).

To reduce the dependencies needed, this ships without the server side, that inertia would connect to, but fakes a response, that might be generated by this library.

## Install

Install npm dependencies:

```
npm install
```

## Steps to reproduce

To see the issue, first of all, see the result of the dev mode:

```
npm run dev
```

And open your browser at `http://localhost:5173`. You should see a form with a text input, a check box and a save button.
If you hit the save button, the contents of the form object will be logged to the console.

Now build the production version using `npm run build` and view the page using any server.
You will see a blank page, that contains errors similar to this:

```
TypeError: Wu.observable is not a function
    ...
```

Now downgrade your vite dependency to 2.9.14 and repeat the process. You will now see the form in the built version as well.