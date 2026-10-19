import React from 'react';
import { Link } from 'react-router-dom';
import PlantillaAdmin from '../../components/template/PlantillaAdmin';
import { getProductos, getUsuarios, getOrdenes, clp, STOCK_CRITICO } from '../../services/adminData';
import '../../styles/pages/admin-dashboard.css';

const accesos = [
    { titulo: 'Ordenes', descripcion: 'Gestión y seguimiento de todas las órdenes', to: '/admin/ordenes' },
    { titulo: 'Productos', descripcion: 'Administrar inventario y detalles', to: '/admin/productos' },
    { titulo: 'Categorías', descripcion: 'Organizar productos en categorías', to: '/admin/categorias' },
    { titulo: 'Usuarios', descripcion: 'Gestión de cuentas de usuario', to: '/admin/usuarios' },
    { titulo: 'Reportes', descripcion: 'Ventas y productos más vendidos', to: '/admin/reportes' },
    { titulo: 'Stock critico', descripcion: 'Productos que se están agotando', to: '/admin/productos-criticos' },
    { titulo: 'Perfil', descripcion: 'Tus datos y contraseña', to: '/admin/perfil' },
    { titulo: 'Tienda', descripcion: 'Visualiza tu tienda', to: '/' }
];

const AdminDashboard = () => {
    const productos = getProductos();
    const usuarios = getUsuarios();
    const ordenes = getOrdenes();

    const ingresos = ordenes.filter((o) => o.estado !== 'Cancelada').reduce((s, o) => s + o.total, 0);
    const criticos = productos.filter((p) => p.stock <= STOCK_CRITICO).length;
    const admins = usuarios.filter((u) => u.role === 'Admin').length;

    const tarjetas = [
        { titulo: 'Ordenes', valor: ordenes.length, detalle: `Ingresos: ${clp(ingresos)}`, variante: 'primary' },
        { titulo: 'Productos', valor: productos.length, detalle: `Con stock crítico: ${criticos}`, variante: 'success' },
        { titulo: 'Usuarios', valor: usuarios.length, detalle: `Administradores: ${admins}`, variante: 'warning' }
    ];

    return (
        <PlantillaAdmin>
            <div>
                <h1>Dashboard</h1>
                <p>Resumen de las actividades diarias</p>
            </div>

            <div className="admin-resumen">
                {tarjetas.map((t) => (
                    <div key={t.titulo} className={`admin-resumen-card admin-resumen-card--${t.variante}`}>
                        <h3>{t.titulo}</h3>
                        <h2>{t.valor}</h2>
                        <p className="admin-resumen-detalle">{t.detalle}</p>
                    </div>
                ))}
            </div>

            <div className="admin-accesos">
                {accesos.map((a) => (
                    <Link key={a.titulo} to={a.to} className="admin-acceso">
                        <h4>{a.titulo}</h4>
                        <p>{a.descripcion}</p>
                    </Link>
                ))}
            </div>
        </PlantillaAdmin>
    );
};

export default AdminDashboard;
