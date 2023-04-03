import './style.css'

/**
 * TitleComponent class
 */
export default class TitleComponent {
    /**
     * Get title element
     */
    private title = document.createElement("h2");

    /**
     * Create a new instance of TitleComponent.
     * @param {string} text string The text of title.
     */
    public constructor(text: string) {
        this.title.textContent = text;
        this.title.innerText = text;
        this.title.classList.add("main-title");
    }

    /**
     * Append title component in body document
     */
    create(): void {
        document.body.appendChild(this.title);
    }
}