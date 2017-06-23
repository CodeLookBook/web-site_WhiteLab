import HomePage      from '../components/pages/home/page.vue';
import VacanciesPage from '../components/pages/vacancies/page.vue';
import PricePage     from '../components/pages/price/page.vue';

export default [
    { path: '/',             name: 'app',        component: HomePage      },
    { path: '/home',         name: 'home',       component: HomePage      },
    { path: '/price',        name: 'price',      component: PricePage     },
    { path: '/vacancies',    name: 'vacancies',  component: VacanciesPage },
];

