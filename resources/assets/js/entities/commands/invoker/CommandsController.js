//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// COMMANDS CONTROLLER CLASS DECLARATION
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import {Command} from "../commands/Command";

//-----------------------------------------------------------------------------
// UTILITIES
//-----------------------------------------------------------------------------

const set = WeakMap.prototype.set;
const get = WeakMap.prototype.get;

//-----------------------------------------------------------------------------
// COMMAND CONTROLLER CLASS PRIVATE PROPERTIES
//-----------------------------------------------------------------------------

const _commands         = new WeakMap();
let   _currentCommandId = new WeakMap();
let   _canBeRedone      = new WeakMap();

//-----------------------------------------------------------------------------
// COMMAND CONTROLLER CLASS
//-----------------------------------------------------------------------------

class CommandsController {

    constructor(){

        //Private variable init
        {
            set.call(_commands        , this, []);
            set.call(_currentCommandId, this, 0 );
            set.call(_canBeRedone     , this, 0 );
        }
    }

    /**
     * @param {Command} command
     */
    storeCommand(command){

        // 'command' argument validation
        {
            if (command === null) {
                throw new ReferenceError(
                    "Constructor argument - 'command' is undefined.");
            }

            if (!(command instanceof Command)) {
                throw new TypeError(
                    "Constructor argument - 'command', has wrong type.");
            }
        }

        //Initialize private variables
        {
            let commands = get.call(_commands, this);

            commands.push(command);
            set.call(_commands, this, commands);
            set.call(_canBeRedone, this, 0);
        }
    }

    executeCommand(){

        //Retrieve class private variables from WeakMap-s
        let commands          = get.call(_commands        , this),
            currentCommandId  = get.call(_currentCommandId, this),
            command           = commands[currentCommandId];

        command.execute();

        currentCommandId++;
        set.call(_currentCommandId, this, currentCommandId);

    }

    /**
     * @param {Number} undoSteps
     */
    undo(undoSteps = 1){

        //Retrieve class private variables from WeakMap-s
        let commands          = get.call(_commands        , this),
            currentCommandId  = get.call(_currentCommandId, this),
            canBeRedone       = 0;

        //undo 'n' number of commands
        for(let i = 0; i < undoSteps; ++i){

            if(currentCommandId > 0){
                commands[--currentCommandId].unExecute();
                ++canBeRedone;
            }
        }

        //Save changes to class private variables.
        set.call(_commands        , this, commands        );
        set.call(_currentCommandId, this, currentCommandId);
        set.call(_canBeRedone     , this, canBeRedone     );
    }

    /**
     * @param {Number} redoSteps
     */
    redo(redoSteps = 1){

        // Retrieve from the WeakMap the number of commands that can be redo.
        let canBeRedone = get.call(_canBeRedone, this),
            counter = canBeRedone;

        // Exit method if number of commands that can be redo = 0.
        if(!canBeRedone) return;

        //Retrieve class private variables from WeakMap-s.
        let commands          = get.call(_commands        , this),
            currentCommandId  = get.call(_currentCommandId, this);

        //redo last 'n' commands.
        for(let i = 0; i < redoSteps; ++i){

            if(i < canBeRedone){
                commands[++currentCommandId].execute();
                --counter;
            }
        }

        // Save new number of commands that can be redo.
        set.call(_canBeRedone , this, counter);
    }

}


export {CommandsController};

