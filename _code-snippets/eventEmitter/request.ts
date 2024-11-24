import eventEmitter from './eventEmitter'

const errorHandler = (error: Error) => {

    if(error instanceof Error) {
       eventEmitter.emit('API:ERROR', error);
    }
}