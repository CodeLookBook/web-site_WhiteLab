// CLASS DECLARATION ----------------------------------------------------------

/**
 * Abstract class.
 */
class ButtonsAbstractFactory{

    // CONSTRUCTOR ------------------------------------------------------------

    constructor() {

        //Check if constructor was invoked.
        (function () {
            if (this.constructor === ButtonsAbstractFactory) {

                // Error Type: ButtonsAbstractFactory class can not be
                // constructed.
                throw new TypeError("Can not construct abstract class.");
            }
        }());

        // Check if all instance methods are implemented.
        (function () {

            if (!this.createContactButton === ButtonsAbstractFactory.prototype.
                    createContactButton) {

                // Error Type: Child has not implemented by this abstract method.
                throw new TypeError("Please implement abstract method " +
                    "'createContactButton()'.");
            }

            if (!this.createFbGroupButton === ButtonsAbstractFactory.prototype.
                    createFbGroupButton) {

                // Error Type: Child has not implemented by this abstract method.
                throw new TypeError("Please implement abstract method " +
                    "'createFbGroupButton()'.");
            }

            if (!this.createFbShareButton === ButtonsAbstractFactory.prototype.
                    createFbShareButton) {

                // Error Type: Child has not implemented by this abstract method.
                throw new TypeError("Please implement abstract method " +
                    "'createFbShareButton()'.");
            }

            if (!this.createInGroupButton === ButtonsAbstractFactory.prototype.
                    createInGroupButton) {

                // Error Type: Child has not implemented by this abstract method.
                throw new TypeError("Please implement abstract method " +
                    "'createInGroupButton()'.");
            }

            if (!this.createOrderButton === ButtonsAbstractFactory.prototype.
                    createOrderButton) {

                // Error Type: Child has not implemented by this abstract method.
                throw new TypeError("Please implement abstract method " +
                    "'createOrderButton()'.");
            }

            if (!this.createPriceButton === ButtonsAbstractFactory.prototype.
                    createPriceButton) {

                // Error Type: Child has not implemented by this abstract method.
                throw new TypeError("Please implement abstract method " +
                    "'createPriceButton()'.");
            }

            if (!this.createVacanciesButton === ButtonsAbstractFactory.prototype.
                    createVacanciesButton) {

                // Error Type: Child has not implemented by this abstract method.
                throw new TypeError("Please implement abstract method " +
                    "'createVacanciesButton()'.");
            }
        }());

    }

    // STATIC PUBLIC METHODS --------------------------------------------------

    /**
     * @static
     */
    static createContactButton(){

        //Check if current instance method was invoked.
        if (this === ButtonsAbstractFactory) {

            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'createContactButton()'.");
        } else {

            // Error Type: The child has implemented this method but also
            // called `super.createContactButton()`.
            throw new TypeError("Do not call static abstract method " +
                "'createContactButton()' from child.");
        }
    }

    /**
     * @static
     */
    static createFbGroupButton(){

        //Check if current instance method was invoked.
        if (this === ButtonsAbstractFactory) {

            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'createFbGroupButton()'.");
        } else {

            // Error Type: The child has implemented this method but also
            // called `super.createFbGroupButton()`.
            throw new TypeError("Do not call static abstract method " +
                "'createFbGroupButton()' from child.");
        }
    }

    /**
     * @static
     */
    static createFbShareButton(){

        //Check if current instance method was invoked.
        if (this === ButtonsAbstractFactory) {

            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'createFbShareButton()'.");
        } else {

            // Error Type: The child has implemented this method but also
            // called `super.createFbShareButton()`.
            throw new TypeError("Do not call static abstract method " +
                "'createFbShareButton()' from child.");
        }
    }

    /**
     * @static
     */
    static createInGroupButton(){

        //Check if current instance method was invoked.
        if (this === ButtonsAbstractFactory) {

            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'createInGroupButton()'.");
        } else {

            // Error Type: The child has implemented this method but also
            // called `super.createInGroupButton()`.
            throw new TypeError("Do not call static abstract method " +
                "'createInGroupButton()' from child.");
        }
    }

    /**
     * @static
     */
    static createOrderButton(){

        //Check if current instance method was invoked.
        if (this === ButtonsAbstractFactory) {

            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'createOrderButton()'.");
        } else {

            // Error Type: The child has implemented this method but also
            // called `super.createOrderButton()`.
            throw new TypeError("Do not call static abstract method " +
                "'createOrderButton()' from child.");
        }
    }

    /**
     * @static
     */
    static createPriceButton(){

        //Check if current instance method was invoked.
        if (this === ButtonsAbstractFactory) {

            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'createPriceButton()'.");
        } else {

            // Error Type: The child has implemented this method but also
            // called `super.createPriceButton()`.
            throw new TypeError("Do not call static abstract method " +
                "'createPriceButton()' from child.");
        }
    }

    /**
     * @static
     */
    static createVacanciesButton(){

        //Check if current instance method was invoked.
        if (this === ButtonsAbstractFactory) {

            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'createVacanciesButton()'.");
        } else {

            // Error Type: The child has implemented this method but also
            // called `super.createVacanciesButton()`.
            throw new TypeError("Do not call static abstract method " +
                "'createVacanciesButton()' from child.");
        }
    }

    // ABSTRACT PUBLIC METHODS ------------------------------------------------

    /**
     * Abstract method.
     * @abstract
     */
    createContactButton(){

        /*
         * Error Type: The child has implemented this method but also called `
         * super.createContactButton()`.
         */
        throw new TypeError("Do not call abstract method " +
            "'createContactButton()' from child.");
    }

    /**
     * Abstract method.
     * @abstract
     */
    createFbGroupButton(){

        /*
         * Error Type: The child has implemented this method but also called `
         * super.createFbGroupButton()`.
         */
        throw new TypeError("Do not call abstract method " +
            "'createFbGroupButton()' from child.");
    }

    /**
     * Abstract method.
     * @abstract
     */
    createFbShareButton(){

        /*
         * Error Type: The child has implemented this method but also called `
         * super.createFbShareButton()`.
         */
        throw new TypeError("Do not call abstract method " +
            "'createFbShareButton()' from child.");
    }

    /**
     * Abstract method.
     * @abstract
     */
    createInGroupButton(){

        /*
         * Error Type: The child has implemented this method but also called `
         * super.createInGroupButton()`.
         */
        throw new TypeError("Do not call abstract method " +
            "'createInGroupButton()' from child.");
    }

    /**
     * Abstract method.
     * @abstract
     */
    createOrderButton(){

        /*
         * Error Type: The child has implemented this method but also called `
         * super.createOrderButton()`.
         */
        throw new TypeError("Do not call abstract method " +
            "'createOrderButton()' from child.");
    }

    /**
     * Abstract method.
     * @abstract
     */
    createPriceButton(){

        /*
         * Error Type: The child has implemented this method but also called `
         * super.createPriceButton()`.
         */
        throw new TypeError("Do not call abstract method " +
            "'createPriceButton()' from child.");
    }

    /**
     * Abstract method.
     * @abstract
     */
    createVacanciesButton(){

        /*
         * Error Type: The child has implemented this method but also called `
         * super.createVacanciesButton()`.
         */
        throw new TypeError("Do not call abstract method " +
            "'createVacanciesButton()' from child.");
    }
}

export {ButtonsAbstractFactory}
