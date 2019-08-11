import storeProd from './store.prod';
import storeDev from './store.dev';

export default process.env.NODE_ENV === 'production' ? storeProd : storeDev;
