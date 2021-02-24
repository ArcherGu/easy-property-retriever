/**
 * A little to get enumerable and nonenumerable properties
 *
 * @class EasyPropertyRetriever
 */
class EasyPropertyRetriever {
    /**
     * Get own enumerable properties, exclude properties on the prototype chain.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getOwnEnumerables(obj: object) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
    }

    /**
     * Get own nonenumerable properties, exclude properties on the prototype chain.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getOwnNonenumerables(obj: object) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    }

    /**
     * Get own enumerable and nonenumerable properties, exclude properties on the prototype chain.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getOwnEnumerablesAndNonenumerables(obj: object) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
    }

    /**
     * Get enumerable properties on the prototype chain, exclude own properties.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getPrototypeEnumerables(obj: object) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    }

    /**
     * Get nonenumerable properties on the prototype chain, exclude own properties.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getPrototypeNonenumerables(obj: object) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    }

    /**
     * Get enumerable and nonenumerable properties on the prototype chain, exclude own properties.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getPrototypeEnumerablesAndNonenumerables(obj: object) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    }

    /**
     * Get enumerable properties, include properties on the prototype chain.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getOwnAndPrototypeEnumerables(obj: object) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
    }

    /**
     * Get nonenumerable properties, include properties on the prototype chain.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getOwnAndPrototypeNonenumerables(obj: object) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    }

    /**
     * Get enumerable and nonenumerable properties, include properties on the prototype chain.
     *
     * @static
     * @param {object} obj
     * @returns
     * @memberof EasyPropertyRetriever
     */
    public static getOwnAndPrototypeEnumerablesAndNonenumerables(obj: object) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    }

    private static _enumerable(obj: object, prop: string) {
        return obj.propertyIsEnumerable(prop);
    }

    private static _notEnumerable(obj: object, prop: string) {
        return !obj.propertyIsEnumerable(prop);
    }

    private static _enumerableAndNotEnumerable(obj: object, prop: string) {
        return true;
    }

    private static _getPropertyNames(obj: object, iterateSelfBool: boolean, iteratePrototypeBool: boolean, includePropCb: (obj: object, prop: string) => boolean) {
        const props: string[] = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach((prop) => {
                    if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
            // tslint:disable-next-line:no-conditional-assignment
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
}

export default EasyPropertyRetriever;