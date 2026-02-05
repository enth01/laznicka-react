export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 navbar bg-base-100 shadow-sm">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Products</a></li>
                <li><a>Profile</a></li>
                <li><a>Cart</a></li>
                <li><a>Dashboard</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}