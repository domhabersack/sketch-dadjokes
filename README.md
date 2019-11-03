# Sketch Dad Jokes

This plugin for [Sketch](https://sketchapp.com/) adds a Data Supplier that replaces your texts with dad jokes.

The jokes are provided by [icanhazdadjoke.com](https://icanhazdadjoke.com/).

## Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
