// CLASS ----------------------------------------------------------------------

/**
 * Manager class.
 * @abstract
 */
class AbstractManager {

    // CONSTRUCTOR ------------------------------------------------------------

    /**
     * @throws {TypeError} Abstract class can not be constructed
     * @throws {TypeError} Please implement abstract method 'run'.
     * @throws {TypeError} The child  called `super.run().
     */
    constructor(){

        if (this.constructor === AbstractManager) {
            // Error Type: Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }

        // Check if all instance methods are implemented.
        if (this.run === AbstractManager.prototype.run) {
            // Error Type: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method 'run'.");
        }
    }
    // PUBLIC ABSTRACT STATIC CLASS METHODS -----------------------------------------------------

    static run(){
        if (this === AbstractManager) {
            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method 'run'.");
        } else {
            // Error Type: The child has implemented this method but also called `super.run()`.
            throw new TypeError("Do not call static abstract method 'run' from child.");
        }
    }

    // PUBLIC ABSTRACT CLASS METHODS ------------------------------------------------------------

    /**
     * @abstract
     */
    run(){
        // Error Type: The child has implemented this method but also called `super.run()`.
        throw new TypeError("Do not call abstract method run from child.");
    }

}

// EXPORT ---------------------------------------------------------------------

export {AbstractManager};