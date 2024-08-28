import {privateRoutes} from './privatesRoutes'
import MainLayout from '../../layout/MainLayout'
export const getRoutes = ()=>{
    return {
        path : '/',
        element: <MainLayout/>,
        children : privateRoutes

    }
}