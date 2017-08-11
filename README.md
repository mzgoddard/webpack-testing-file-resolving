# Module Bundler + Testing: File Resolving

```js
resolve: {
  extensions: ['.js', '.json', '.jsx'],
  modules: ['node_modules', join(__dirname, 'vendor')],
},
```

```json
"moduleDirectories": [
  "node_modules",
  "vendor"
],
"moduleFileExtensions": [
  "js",
  "json",
  "jsx"
]
```
