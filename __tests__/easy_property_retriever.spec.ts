import EasyPropertyRetriever from "../dist/easy-property-retriever";

describe('easy-property-retriever', () => {
    class SomeOne {
        public propA: any = 1;
        public propB: any = 2;
    }
    Object.defineProperty(SomeOne.prototype, 'propC', {
        value: 5,
        enumerable: true
    });

    Object.defineProperty(SomeOne.prototype, 'propD', {
        value: 5,
        enumerable: false
    });

    const someOne = new SomeOne();
    Object.defineProperty(someOne, 'propB', {
        enumerable: false
    });

    let objectProperties: string[] = [];
    const filterObjectProperties = (keys: string[]) => {
        return keys.filter((val) => objectProperties.indexOf(val) === -1);
    };

    describe('getOwnAndPrototypeEnumerablesAndNonenumerables', () => {
        it('its all properties, include all properties on the prototype chain', () => {
            objectProperties = EasyPropertyRetriever.getOwnAndPrototypeEnumerablesAndNonenumerables(new Object());

            expect(
                EasyPropertyRetriever.getOwnAndPrototypeEnumerablesAndNonenumerables(someOne).filter((val) => objectProperties.indexOf(val) === -1)
            ).toEqual(['propA', 'propB', 'propC', 'propD']);
        });
    });

    describe('getOwnAndPrototypeEnumerables', () => {
        it('its all enumerable properties, include enumerable properties on the prototype chain', () => {
            expect(
                filterObjectProperties(EasyPropertyRetriever.getOwnAndPrototypeEnumerables(someOne))
            ).toEqual(['propA', 'propC']);
        });
    });

    describe('getOwnAndPrototypeNonenumerables', () => {
        it('its all nonenumerable properties, include nonenumerable properties on the prototype chain', () => {
            expect(
                filterObjectProperties(EasyPropertyRetriever.getOwnAndPrototypeNonenumerables(someOne))
            ).toEqual(['propB', 'propD']);
        });
    });

    describe('getOwnEnumerables', () => {
        it('only its own enumerable properties, no nonenumerable properties, no enumerable properties on the prototype chain', () => {
            expect(
                EasyPropertyRetriever.getOwnEnumerables(someOne)
            ).toEqual(['propA']);
        });
    });

    describe('getOwnNonenumerables', () => {
        it('only its own nonenumerable properties, no enumerable properties, no nonenumerable properties on the prototype chain', () => {
            expect(
                EasyPropertyRetriever.getOwnNonenumerables(someOne)
            ).toEqual(['propB']);
        });
    });

    describe('getOwnEnumerablesAndNonenumerables', () => {
        it('only its own properties, no any properties on the prototype chain', () => {
            expect(
                EasyPropertyRetriever.getOwnEnumerablesAndNonenumerables(someOne)
            ).toEqual(['propA', 'propB']);
        });
    });

    describe('getPrototypeEnumerables', () => {
        it('only its enumerable properties on the prototype chain, no any own enumerable properties', () => {
            expect(
                EasyPropertyRetriever.getPrototypeEnumerables(someOne)
            ).toEqual(['propC']);
        });
    });

    describe('getPrototypeNonenumerables', () => {
        it('only its nonenumerable properties on the prototype chain, no any own nonenumerable properties', () => {
            expect(
                filterObjectProperties(EasyPropertyRetriever.getPrototypeNonenumerables(someOne))
            ).toEqual(['propD']);
        });
    });

    describe('getPrototypeEnumerablesAndNonenumerables', () => {
        it('only its properties on the prototype chain, no any own properties', () => {
            expect(
                filterObjectProperties(EasyPropertyRetriever.getPrototypeEnumerablesAndNonenumerables(someOne))
            ).toEqual(['propC', 'propD']);
        });
    });
});