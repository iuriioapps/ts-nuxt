export class Department {
    constructor(public readonly name: string) {
    }

    print(): void {
        // eslint-disable-next-line
        console.log(this.name);
    }
}
