## 加载css文件
```
npm install css-loader style-loader --save-dev
```

```
{
  test:/\.css$/,
  loader:'style!css'
}
```

## 加载图标文件
```
npm install url-loader file-loader --save-dev
```
```
{
  test:/(\.eot|svg|ttf|woff|woff2$)/,
  loader:'url'
}
```