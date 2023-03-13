import { lazy, LazyExoticComponent } from "react";
// import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";
type JSXComponent = () => JSX.Element;
interface Route {
    to:string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}

const lazy1 = lazy(()=> import(/* webpackChunkName: 'LazyPage1' */'../01-lazyload/pages/LazyPage01'));
const lazy2 = lazy(()=> import(/* webpackChunkName: 'LazyPage2 */'../01-lazyload/pages/LazyPage02'));
const lazy3 = lazy(()=> import(/* webpackChunkName: 'LazyPage3' */'../01-lazyload/pages/LazyPage03'));

export const routes: Route[] =[
    {
        to:'lazy1',
        path:'lazy1',
        Component:lazy1,
        name:'Lazy Page 1'
    },
    {
        to:'lazy2',
        path:'lazy2',
        Component:lazy2,
        name:'Lazy Page 2'
    },
    {
        to:'lazy3',
        path:'lazy3',
        Component:lazy3,
        name:'Lazy Page 3'
    },
]