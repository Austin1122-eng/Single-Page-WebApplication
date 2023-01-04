import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome, User</h1>
            <p>
                This website was used to test the developer, Austin Lam, on how to apply his javascript, html, and css knowledge, as well as gain a better understanding in front end SPA
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}