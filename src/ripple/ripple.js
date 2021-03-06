class RippleElement extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const div_element = document.createElement("div");
        div_element.setAttribute("id", "ripple");

        const style_element = document.createElement("style");
        style_element.textContent = `
:host {
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    --begin-color: blue;
    --end-color: var(--begin-color);
    --begin-thickness: 0.5vw;
    --end-thickness: 0px;
    --easing: ease;
    --begin-opacity: 1;
    --end-opacity: 0;
}

#ripple {
    border: solid var(--begin-thickness) var(--ripple-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: circle_animation 1s var(--easing) infinite;
}

@keyframes circle_animation {
    0% {
        width: 0;
        height: 0;
        opacity: var(--begin-opacity);
        border: solid var(--begin-thickness) var(--begin-color);
        border-radius: 100%;
    }
    100% {
        width: 100%;
        height: 100%;
        opacity: var(--end-opacity);
        border: solid var(--end-thickness) var(--end-color);
        border-radius: 100%;
    }
}
        `;

        shadow.appendChild(div_element);
        shadow.appendChild(style_element);
    }
}

customElements.define("ripple-element", RippleElement);
