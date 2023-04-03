import './style.css';

/**
 * Heading component class
 */
export class HeandingComponent {
    private head = document.createElement('h1');
    /**
     * Initialize a new instance of HeadingComponent.
     * @param {string} title THe title of heading
     */
    constructor(title: string) {
        this.head.innerText = title;
        this.head.classList.add('title');
    }

    /**
     * Append head on dobument body.
     */
    create(): void {
        document.body.appendChild(this.head);
    }
}