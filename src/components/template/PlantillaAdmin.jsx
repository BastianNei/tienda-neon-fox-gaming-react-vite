import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/admin_style.css';

const PlantillaAdmin = ({ children }) => {
    const navigate = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);

    let sesion = null;
    try {
        sesion = JSON.parse(localStorage.getItem('user'));
    } catch {
        sesion = null;
    }

    const cerrarSesion = () => {
        localStorage.removeItem('user');
        navigate('/login', { replace: true });
    };

    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <div className="admin-layout">
            {/* Menú Lateral (Sidebar) */}
            <aside className={`menu-lateral${menuAbierto ? ' abierto' : ''}`}>
                <h2 className="admin-brand">Neon Fox Gaming</h2>
                <nav className="admin-nav" onClick={cerrarMenu}>
                    <Link to="/admin/dashboard">Dashboard</Link>
                    <Link to="/admin/ordenes">Órdenes</Link>
                    <Link to="/admin/productos">Productos</Link>
                    <Link to="/admin/categorias">Categorías</Link>
                    <Link to="/admin/usuarios">Usuarios</Link>
                    <Link to="/admin/reportes">Reportes</Link>
                    <hr className="admin-nav-sep" />
                    <Link to="/admin/perfil">Perfil</Link>
                    <Link to="/" className="admin-link-tienda">Tienda</Link>
                    <button className="admin-btn-salir" onClick={cerrarSesion}>
                        Cerrar Sesión
                    </button>
                </nav>
            </aside>

            {menuAbierto && <div className="admin-backdrop" onClick={cerrarMenu} />}

            {/* Contenido Principal */}
            <main className="admin-main">
                <header className="admin-header">
                    <div className="admin-header-izq">
                        <button
                            type="button"
                            className="admin-toggle"
                            aria-label="Abrir menú"
                            aria-expanded={menuAbierto}
                            onClick={() => setMenuAbierto((v) => !v)}
                        >
                            ☰
                        </button>
                        <span>Panel de administración</span>
                    </div>
                    {sesion?.nombre && <span>Hola, {sesion.nombre}</span>}
                </header>

                <section className="contenido">
                    {children}
                </section>
            </main>
        </div>
    );
};

export default PlantillaAdmin;
