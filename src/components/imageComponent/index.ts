/**
 * ImageComponent class
 */
export default class ImageComponent {
    /**
     * Get image element
     */
    private image = document.createElement("img");

    /**
     * Initialize a new instance of ImageComponent.
     * @param {string} path string The path of file.
     */
    constructor(path: string) {
        this.image.src = path;
        this.image.width = 200;
    }

    /**
     * Append image in body document.
     */
    create(): void {
        document.body.appendChild(this.image);
    }
}