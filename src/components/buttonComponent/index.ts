import './style.scss';

/**
 * ButtonComponent class
 */
export default class ButtonComponent {
    private button = document.createElement('button');

    /**
     * Initialize a new instance of ButtonComponent
     * @param {string} text Button text
     */
    constructor(text: string) {
        this.button.innerText = text;
        this.button.classList.add('btn');
    }

    /**
     *  Append child button on document.
     */
    public create(): void {
        document.body.appendChild(this.button);
    }
}