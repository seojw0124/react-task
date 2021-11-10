import Home from './pages/Home';
import Introduce from './pages/Introduce';
import Joinus from './pages/Joinus';
import CodeofConduct from './pages/CodeofConduct';
import Question from './pages/Question';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/introduce',
        component: Introduce
    },
    {
        path: '/joinus',
        component: Joinus
    },
    {
        path: '/conduct',
        component: CodeofConduct
    },
    {
        path: '/question',
        component: Question
    }
];