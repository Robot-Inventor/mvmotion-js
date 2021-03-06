# Ripple

[English](README.md)

![sample gif](ripple.gif)

## 例

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ripple Example</title>
    </head>
    <body>
        <ripple-element></ripple-element>
        <style>
            ripple-element {
                position: absolute;
                top: 50vh;
                left: 50vw;
                transform: translate(-50%, -50%);
                --begin-color: red;
                width: 100vw;
                height: 100vw;
            }
        </style>
        <script src="ripple.js"></script>
    </body>
</html>
```

### ポイント

``ripple-element``の幅と高さは、それぞれ波紋のアニメーション終了時の幅と高さになります。

## CSS変数

|Name|Default|Description|
|--:|--:|--:|
|--begin-color|blue|開始時の波紋の色|
|--end-color|var(--begin-color)|終了時の波紋の色|
|--begin-thickness|0.5vw|開始時の線の太さ|
|--end-thickness|0px|終了時の線の太さ|
|--easing|ease|イージングの種類|
|--begin-opacity|1|開始時の波紋の不透明度|
|--end-opacity|0|終了時の波紋の不透明度|
