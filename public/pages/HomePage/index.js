export class HomePage {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        this.parent.innerHTML = "";

        const html = `
            <div class="p-3">
                <h1 class="mb-3">Электронная таможня</h1>
                <p class="fs-5">Региональная электронная таможня является специализированным таможенным органом, компетенция которого ограничивается исключительно совершением таможенных операций в электронной форме</p>
            </div>
        `
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}
