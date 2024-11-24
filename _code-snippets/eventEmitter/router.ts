


import eventEmitter from "./eventEmitter";

const router = ()=>{
    // ...
};

eventEmitter.on('API:UN_AUTH', (data) => {
  router.push('/login');
});