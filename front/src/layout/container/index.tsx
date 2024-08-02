import { Outlet } from 'react-router-dom'
import Header from './header'

export default function Container() {
    return (
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}