// COMMAND CLASS --------------------------------------------------------------

/**
 * Command abstract class.
 * @abstract
 */
class Command {

    // CONSTRUCTOR ------------------------------------------------------------

    /**
     * @throws {TypeError} Class constructor must not to be equal to abstract
     *                     class constructor
     * @throws {TypeError} Abstract method 'execute()' must be implemented in
     *                     child classes.
     * @throws {TypeError} Abstract method 'unExecute()' must be implemented in
     *                     child classes.
     */
    constructor() {

        //Check if constructor is equal to abstract class constructor.
        {

            if (this.constructor === Command) {
                throw new TypeError("Can not construct 'Command' abstract " +
                        "class.");
            }
        }

        //Check if all abstract methods were implemented in child classes.
        {

            //Check 'execute()' method implantation.
            if (this.execute === Command.prototype.execute) {
                throw new TypeError("Please implement abstract method " +
                        "'execute()'.");
            }

            //Check 'unExecute()' method implantation.
            if (this.unExecute === Command.prototype.unExecute) {
                throw new TypeError("Please implement abstract method " +
                    "'unExecute()'.");
            }
        }
    }

    //CLASS PUBLIC ABSTRACT STATIC METHODS ------------------------------------

    /**
     * Executes command.
     * @static
     * @abstract
     */
    static execute(){

        if (this === Command) {
            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                    "'execute()'.");
        } else {
            // Error Type: The child has implemented this method but also called
            // `super.execute()`.
            throw new TypeError("Do not call static abstract method " +
                    "'execute()' from child.");
        }
    }

    /**
     * Unexecutes command.
     * @static
     * @abstract
     */
   static unExecute() {

        if (this === Command) {
            // Error Type: Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method " +
                "'unExecute()'.");
        } else {
            // Error Type: The child has implemented this method but also called
            // `super.unExecute()`.
            throw new TypeError("Do not call static abstract method " +
                "'unExecute()' from child.");
        }
    }

    //PUBLIC ABSTRACT PROTOTYPE METHODS ---------------------------------

    /**
     * Executes command.
     * @abstract
     */
    execute(){

        // Error Type: The child has implemented this method but also called `
        // super.execute()`.
        throw new TypeError("Do not call abstract method 'execute()' from " +
                "child.");
    }

    /**
     * Unexecutes command.
     * @abstract
     */
    unExecute() {

        // Error Type: The child has implemented this method but also called `
        // super.execute()`.
        throw new TypeError("Do not call abstract method 'execute()' from " +
                "child.");
    }
}

export {Command}