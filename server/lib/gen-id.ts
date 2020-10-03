// import uuid from 'uuid/v1';
const { v1: uuid } = require('uuid');


const genId = () => uuid();

export default genId;
