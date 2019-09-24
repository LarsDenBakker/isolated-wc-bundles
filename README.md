Basic setup for bundling isolated components, and adding them to an existing index.html page.

Each component has it's own rollup config and reuse a shared rollup config. `index.html` shows how the components can be used development-time without a build (use `npm start`).

`index-build.html` shows how the components should be included on an existing page, and which polyfills should be loaded. Use `npm run build` and `npm run start:build`.

This is far from perfect, but shows the basic ideas. Some things to do:
- We bundle everything to es5 now. We should set up a es5 and es-current build.
- All dependencies are built into each bundle. We should look into adding patterns for sharing dependencies between builds.