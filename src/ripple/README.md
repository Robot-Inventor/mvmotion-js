# Ripple

[日本語](README_ja.md)

![sample gif](ripple.gif)

## Example

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
                width: 80vmin;
                height: 80vmin;
            }
        </style>
        <script src="ripple.js"></script>
    </body>
</html>
```

### Tips

The width and height of the ``ripple-element`` will be the width and height at the end of the ripple animation.

## CSS Variables

|Name|Default|Description|
|--:|--:|--:|
|--begin-color|blue|Color of the ripples at the start.|
|--end-color|var(--begin-color)|Color of the ripples at the end.|
|--begin-thickness|0.5vw|Line thickness at the start.|
|--end-thickness|0px|Line thickness at the end.|
|--easing|ease|Type of easing.|
|--begin-opacity|1|Opacity of the ripples at the start.|
|--end-opacity|0|Opacity of the ripples at the end.|
