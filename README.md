<center>
# This is the OFficial Website of `FIT SIXES 2K23`.
Developed by <b>Batch 20</b>
</center>

## To configure the project...

### Configure Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Add following code to the `tailwind.config.js` file

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add main Tailwind bases to the `src/index.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now you can use Tailwind CSS in your project.
