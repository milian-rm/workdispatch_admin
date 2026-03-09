# ⚙️ WorkDispatch Admin - API de Gestión Administrativa

API RESTful para la gestión administrativa completa de la plataforma **WorkDispatch**. Sistema de control centralizado para administradores, gestión de reportes, monitoreo de actividades y configuración global del sistema.

---

## 📝 Descripción

Servicio backend robusto que proporciona endpoints para que los administradores del sistema gestionen usuarios con privilegios elevados, controlen reportes de actividad, configuración de parámetros globales, auditoría del sistema y estadísticas operacionales.

Incluye un sistema de autenticación avanzado con JWT, control de permisos granulares y logging detallado de todas las acciones administrativas.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js 18+ (ESM)  
- **Framework:** Express 5.x  
- **Base de Datos:** MongoDB 9.0+  
- **ODM:** Mongoose 9.x  
- **Autenticación:** JWT (jsonwebtoken)  
- **Validación:** express-validator  
- **Storage:** Cloudinary (reportes, gráficos, documentos)  
- **HTTP Client:** Axios  
- **Seguridad:** Helmet, CORS, Rate Limiting  
- **Logging:** Morgan  
- **Generador IDs:** UUID  
- **Gestión de Archivos:** Multer + Multer Storage Cloudinary
- **Gestión de Paquetes:** pnpm / npm

---

## 🚀 Instalación

```bash
# Desde la raíz del proyecto
pnpm install

# Instalar dependencias específicas
pnpm install express mongoose dotenv cors morgan helmet express-validator express-rate-limit jsonwebtoken axios cloudinary multer multer-storage-cloudinary uuid
```

---

## ⚙️ Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
# Server
NODE_ENV=development
PORT=3002

# MongoDB
URI_MONGODB=mongodb://localhost:27017/workdispatch_admin

# JWT
JWT_SECRET=tu_secret_key_muy_segura_aqui
JWT_EXPIRE=7d
JWT_REFRESH_EXPIRE=30d

# Cloudinary (Storage de reportes y documentos)
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
CLOUDINARY_FOLDER=workdispatch/admin

# CORS
CORS_ORIGIN=http://localhost:3000

# Servicios Externos
WORKDISPATCH_USER_API=http://localhost:3001
WORKDISPATCH_TASKS_API=http://localhost:3003

# Email para notificaciones administrativas
EMAIL_SERVICE=gmail
EMAIL_USER=admin@workdispatch.com
EMAIL_PASSWORD=tu_password_app

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100

# Logging
LOG_LEVEL=info
LOG_FILE=./logs/admin.log
```

---

## 📂 Estructura del Proyecto

```
workdispatch_admin/
├── configs/            # Configuración principal (App, DB, CORS, JWT)
├── src/                # Código fuente de la API
│   ├── Admin/          # Gestión de administradores
│   ├── Reports/        # Generación de reportes
│   ├── Analytics/      # Estadísticas y análisis
│   ├── Audit/          # Auditoría y logging
│   ├── Settings/       # Configuración del sistema
│   ├── Dashboard/      # Datos del panel de control
│   └── Notifications/  # Notificaciones administrativas
├── middlewares/        # Autenticación, autorización y validadores
├── models/             # Esquemas de MongoDB
├── controllers/        # Lógica de negocio
├── routes/             # Definición de endpoints
├── utils/              # Funciones auxiliares
├── logs/               # Archivos de registro
└── index.js            # Punto de entrada de la aplicación
```

---

# 🔌 Endpoints Principales

---

## 🔐 Autenticación Administrativa

| Método | Endpoint | Descripción |
|--------|----------|------------|
| POST | `/workDispatch/v1/admin/auth/login` | Login de administrador |
| POST | `/workDispatch/v1/admin/auth/logout` | Logout seguro |
| POST | `/workDispatch/v1/admin/auth/refresh-token` | Renovar token JWT |
| POST | `/workDispatch/v1/admin/auth/2fa/request` | Solicitar autenticación de dos factores |
| POST | `/workDispatch/v1/admin/auth/2fa/verify` | Verificar código 2FA |

---

## 👨‍💼 Gestión de Administradores

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/managers` | Listar administradores |
| GET | `/workDispatch/v1/admin/managers/:id` | Obtener detalle de administrador |
| POST | `/workDispatch/v1/admin/managers` | Crear nuevo administrador |
| PUT | `/workDispatch/v1/admin/managers/:id` | Actualizar administrador |
| DELETE | `/workDispatch/v1/admin/managers/:id` | Eliminar administrador |
| PUT | `/workDispatch/v1/admin/managers/:id/permissions` | Asignar permisos |
| PUT | `/workDispatch/v1/admin/managers/:id/status` | Cambiar estado de administrador |

---

## 📊 Reportes y Estadísticas

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/reports` | Listar reportes generados |
| POST | `/workDispatch/v1/admin/reports/generate` | Generar reporte personalizado |
| POST | `/workDispatch/v1/admin/reports/export` | Exportar reporte (PDF/Excel) |
| GET | `/workDispatch/v1/admin/reports/:id` | Obtener detalle de reporte |
| DELETE | `/workDispatch/v1/admin/reports/:id` | Eliminar reporte |
| GET | `/workDispatch/v1/admin/reports/schedule/list` | Listar reportes programados |
| POST | `/workDispatch/v1/admin/reports/schedule/create` | Programar reporte automático |

---

## 📈 Dashboard y Análitica

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/dashboard/summary` | Resumen general del sistema |
| GET | `/workDispatch/v1/admin/dashboard/metrics` | Métricas clave de desempeño (KPIs) |
| GET | `/workDispatch/v1/admin/dashboard/charts/users` | Datos de gráfico de usuarios |
| GET | `/workDispatch/v1/admin/dashboard/charts/activities` | Datos de gráfico de actividades |
| GET | `/workDispatch/v1/admin/dashboard/charts/performance` | Datos de desempeño |
| GET | `/workDispatch/v1/admin/analytics/trends` | Análisis de tendencias |

---

## 🔍 Auditoría y Registros

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/audit/log` | Ver registro de auditoría completo |
| GET | `/workDispatch/v1/admin/audit/log/:id` | Detalle de entrada de auditoría |
| GET | `/workDispatch/v1/admin/audit/filters` | Aplicar filtros a auditoría |
| POST | `/workDispatch/v1/admin/audit/export` | Exportar registro de auditoría |
| GET | `/workDispatch/v1/admin/activity-monitor` | Monitoreo de actividades en tiempo real |

---

## ⚙️ Configuración del Sistema

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/settings` | Obtener configuración global |
| PUT | `/workDispatch/v1/admin/settings` | Actualizar configuración global |
| GET | `/workDispatch/v1/admin/settings/security` | Obtener configuración de seguridad |
| PUT | `/workDispatch/v1/admin/settings/security` | Actualizar seguridad |
| GET | `/workDispatch/v1/admin/settings/backup` | Estado de copias de seguridad |
| POST | `/workDispatch/v1/admin/settings/backup/create` | Crear copia de seguridad |

---

## 🔔 Notificaciones

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/notifications` | Listar notificaciones administrativas |
| PUT | `/workDispatch/v1/admin/notifications/:id/read` | Marcar notificación como leída |
| DELETE | `/workDispatch/v1/admin/notifications/:id` | Eliminar notificación |
| GET | `/workDispatch/v1/admin/notifications/preferences` | Preferencias de notificaciones |
| PUT | `/workDispatch/v1/admin/notifications/preferences` | Actualizar preferencias |

---

## 🧑‍💻 Gestión de Usuarios (Desde Admin)

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/users/all` | Listar todos los usuarios con filtros |
| GET | `/workDispatch/v1/admin/users/:id/details` | Detalles completos de usuario |
| PUT | `/workDispatch/v1/admin/users/:id/suspend` | Suspender usuario |
| PUT | `/workDispatch/v1/admin/users/:id/restore` | Restaurar usuario |
| DELETE | `/workDispatch/v1/admin/users/:id/permanent-delete` | Eliminar permanentemente |
| POST | `/workDispatch/v1/admin/users/:id/reset-password` | Resetear contraseña de usuario |

---

## 🏢 Gestión Organizacional

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | `/workDispatch/v1/admin/org/departments` | Listar departamentos |
| POST | `/workDispatch/v1/admin/org/departments` | Crear departamento |
| PUT | `/workDispatch/v1/admin/org/departments/:id` | Actualizar departamento |
| DELETE | `/workDispatch/v1/admin/org/departments/:id` | Eliminar departamento |
| GET | `/workDispatch/v1/admin/org/structure` | Obtener estructura organizacional |

---

# 📊 Ejemplos de Petición (JSON)

Aquí encontrarás los cuerpos JSON (Body) necesarios para probar cada entidad en Postman.

---

## 🔐 1. Autenticación Administrativa

### Login de Administrador

**POST**  
`http://localhost:3002/workDispatch/v1/admin/auth/login`

```json
{
  "email": "admin@workdispatch.com",
  "password": "AdminSecure123!",
  "rememberMe": true
}
```

---

### Solicitar 2FA

**POST**  
`http://localhost:3002/workDispatch/v1/admin/auth/2fa/request`

```json
{
  "adminId": "507f1f77bcf86cd799439011",
  "method": "email"
}
```

---

### Verificar Código 2FA

**POST**  
`http://localhost:3002/workDispatch/v1/admin/auth/2fa/verify`

```json
{
  "adminId": "507f1f77bcf86cd799439011",
  "code": "123456",
  "token": "jwt_token_temporal"
}
```

---

## 👨‍💼 2. Gestión de Administradores

### Crear Nuevo Administrador

**POST**  
`http://localhost:3002/workDispatch/v1/admin/managers`

```json
{
  "firstName": "Roberto",
  "lastName": "Gutiérrez",
  "email": "roberto.gutierrez@workdispatch.com",
  "password": "SecureAdminPass123!",
  "phone": "+502 7845 9999",
  "role": "SUPER_ADMIN",
  "department": "ADMINISTRACIÓN",
  "permissions": [
    "users.manage",
    "reports.generate",
    "audit.view",
    "settings.edit",
    "admins.manage"
  ],
  "status": "ACTIVE"
}
```

---

### Actualizar Administrador

**PUT**  
`http://localhost:3002/workDispatch/v1/admin/managers/507f1f77bcf86cd799439011`

```json
{
  "firstName": "Roberto Alejandro",
  "lastName": "Gutiérrez López",
  "phone": "+502 7899 1234",
  "department": "DIRECCION GENERAL",
  "status": "ACTIVE"
}
```

---

### Asignar Permisos a Administrador

**PUT**  
`http://localhost:3002/workDispatch/v1/admin/managers/507f1f77bcf86cd799439011/permissions`

```json
{
  "permissions": [
    "users.view",
    "users.create",
    "users.edit",
    "reports.view",
    "reports.generate",
    "audit.view",
    "settings.view"
  ]
}
```

---

## 📊 3. Reportes y Estadísticas

### Generar Reporte Personalizado

**POST**  
`http://localhost:3002/workDispatch/v1/admin/reports/generate`

```json
{
  "title": "Reporte de Usuarios Activos - Marzo 2026",
  "type": "USER_ACTIVITY",
  "dateRange": {
    "startDate": "2026-03-01",
    "endDate": "2026-03-31"
  },
  "filters": {
    "department": "VENTAS",
    "status": "ACTIVE"
  },
  "format": "PDF",
  "includeCharts": true,
  "includeSummary": true
}
```

---

### Exportar Reporte

**POST**  
`http://localhost:3002/workDispatch/v1/admin/reports/export`

```json
{
  "reportId": "507f1f77bcf86cd799439011",
  "format": "EXCEL",
  "includeMetadata": true
}
```

---

### Programar Reporte Automático

**POST**  
`http://localhost:3002/workDispatch/v1/admin/reports/schedule/create`

```json
{
  "title": "Reporte Mensual de Actividades",
  "type": "ACTIVITY_SUMMARY",
  "frequency": "MONTHLY",
  "dayOfMonth": 1,
  "recipients": [
    "director@workdispatch.com",
    "gerente@workdispatch.com"
  ],
  "format": "PDF"
}
```

---

## 📈 4. Dashboard y Analítica

### Obtener Resumen del Dashboard

**GET**  
`http://localhost:3002/workDispatch/v1/admin/dashboard/summary`

```json
{
  "period": "monthly",
  "year": 2026,
  "month": 3
}
```

---

### Obtener Métricas Clave (KPIs)

**GET**  
`http://localhost:3002/workDispatch/v1/admin/dashboard/metrics?period=quarterly&compare=true`

---

### Análisis de Tendencias

**GET**  
`http://localhost:3002/workDispatch/v1/admin/analytics/trends?metric=user_growth&months=6`

---

## 🔍 5. Auditoría

### Ver Registro de Auditoría

**GET**  
`http://localhost:3002/workDispatch/v1/admin/audit/log?limit=50&page=1`

---

### Aplicar Filtros a Auditoría

**GET**  
`http://localhost:3002/workDispatch/v1/admin/audit/filters?action=DELETE&entity=User&dateFrom=2026-03-01&dateTo=2026-03-31`

---

### Exportar Registro de Auditoría

**POST**  
`http://localhost:3002/workDispatch/v1/admin/audit/export`

```json
{
  "dateRange": {
    "startDate": "2026-01-01",
    "endDate": "2026-03-31"
  },
  "actions": ["CREATE", "UPDATE", "DELETE"],
  "format": "CSV"
}
```

---

## ⚙️ 6. Configuración del Sistema

### Obtener Configuración Global

**GET**  
`http://localhost:3002/workDispatch/v1/admin/settings`

---

### Actualizar Configuración Global

**PUT**  
`http://localhost:3002/workDispatch/v1/admin/settings`

```json
{
  "appName": "WorkDispatch Platform",
  "timezone": "America/Guatemala",
  "dateFormat": "DD/MM/YYYY",
  "currency": "GTQ",
  "maintenanceMode": false,
  "maintenanceMessage": "Sistema en mantenimiento",
  "maxLoginAttempts": 5,
  "sessionTimeout": 3600,
  "passwordPolicy": {
    "minLength": 12,
    "requireSpecialChars": true,
    "requireNumbers": true,
    "requireUppercase": true,
    "expirationDays": 90
  }
}
```

---

### Actualizar Configuración de Seguridad

**PUT**  
`http://localhost:3002/workDispatch/v1/admin/settings/security`

```json
{
  "enableTwoFactor": true,
  "enableIPWhitelist": false,
  "enableSSL": true,
  "corsOrigins": ["http://localhost:3000", "https://app.workdispatch.com"],
  "rateLimitEnabled": true,
  "rateLimitWindow": 15,
  "rateLimitMaxRequests": 100,
  "enableAuditLogging": true,
  "logRetentionDays": 90
}
```

---

## 🔔 7. Notificaciones

### Actualizar Preferencias de Notificaciones

**PUT**  
`http://localhost:3002/workDispatch/v1/admin/notifications/preferences`

```json
{
  "emailNotifications": true,
  "pushNotifications": true,
  "smsNotifications": false,
  "notificationTypes": {
    "userActivity": true,
    "securityAlerts": true,
    "systemErrors": true,
    "reportCompleted": true,
    "maintenanceScheduled": true
  }
}
```

---

## 🧑‍💻 8. Gestión de Usuarios desde Admin

### Resetear Contraseña de Usuario

**POST**  
`http://localhost:3002/workDispatch/v1/admin/users/507f1f77bcf86cd799439011/reset-password`

```json
{
  "sendEmail": true,
  "temporaryPassword": "TempPass123!@"
}
```

---

### Suspender Usuario

**PUT**  
`http://localhost:3002/workDispatch/v1/admin/users/507f1f77bcf86cd799439011/suspend`

```json
{
  "reason": "Violación de políticas de seguridad",
  "suspensionDays": 30,
  "notifyUser": true
}
```

---

# 🗄️ Modelos de Base de Datos (Esquemas)

---

## 👨‍💼 Administrador (Admin)

Representa a los administradores del sistema con permisos elevados.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|------------|
| firstName | String | ✅ | Nombre del administrador |
| lastName | String | ✅ | Apellido del administrador |
| email | String | ✅ | Correo único para acceso |
| password | String | ✅ | Contraseña encriptada (bcrypt) |
| phone | String | ❌ | Teléfono de contacto |
| role | String | ✅ | Rol: ['SUPER_ADMIN', 'ADMIN', 'MANAGER'] |
| permissions | Array | ✅ | Array de permisos asignados |
| twoFactorEnabled | Boolean | ❌ | Si 2FA está activo (Default: true) |
| twoFactorSecret | String | ❌ | Secret para autenticación 2FA |
| status | String | ❌ | Estado: ['ACTIVE', 'INACTIVE', 'SUSPENDED'] |
| lastLogin | Date | ❌ | Último acceso |
| loginAttempts | Number | ❌ | Intentos fallidos consecutivos |
| createdAt | Date | ✅ | Fecha de creación |
| updatedAt | Date | ✅ | Última actualización |

---

## 📊 Reporte (Report)

Reportes generados manualmente o programados.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|------------|
| title | String | ✅ | Título del reporte |
| type | String | ✅ | Tipo: ['USER_ACTIVITY', 'FINANCIAL', 'PERFORMANCE', 'SECURITY'] |
| createdBy | ObjectId | ✅ | Administrador que generó el reporte |
| dateRange | Object | ✅ | { startDate, endDate } |
| filters | Object | ❌ | Filtros aplicados al reporte |
| fileUrl | String | ✅ | URL del archivo en Cloudinary |
| format | String | ✅ | Formato: ['PDF', 'EXCEL', 'CSV'] |
| status | String | ❌ | Estado: ['PENDING', 'COMPLETED', 'FAILED'] |
| recordCount | Number | ❌ | Cantidad de registros incluidos |
| createdAt | Date | ✅ | Fecha de creación |

---

## 📅 Reporte Programado (ScheduledReport)

Reportes configurados para generarse automáticamente.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|------------|
| title | String | ✅ | Nombre del reporte programado |
| type | String | ✅ | Tipo de reporte |
| frequency | String | ✅ | Frecuencia: ['DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY'] |
| dayOfWeek | Number | ❌ | Día de la semana (0-6) si aplica |
| dayOfMonth | Number | ❌ | Día del mes (1-31) si aplica |
| recipients | Array | ✅ | Emails que reciben el reporte |
| format | String | ✅ | Formato de entrega |
| isActive | Boolean | ❌ | Si está activo (Default: true) |
| lastGenerated | Date | ❌ | Última generación |
| nextScheduled | Date | ❌ | Próxima generación programada |

---

## 📈 Dashboard (Dashboard)

Configuración del panel de control administrativo.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|------------|
| adminId | ObjectId | ✅ | Administrador propietario |
| widgets | Array | ❌ | Widgets configurados del dashboard |
| refreshInterval | Number | ❌ | Intervalo de actualización en segundos |
| theme | String | ❌ | Tema visual (LIGHT/DARK) |
| layout | String | ❌ | Layout tipo (GRID_4, GRID_3, CUSTOM) |
| customization | Object | ❌ | Personalizaciones específicas |
| lastUpdated | Date | ✅ | Última actualización |

---

## 🔍 Auditoría (AuditLog)

Registro detallado de todas las acciones administrativas.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|------------|
| adminId | ObjectId | ✅ | Administrador que realizó la acción |
| action | String | ✅ | Acción: ['CREATE', 'READ', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT'] |
| entity | String | ✅ | Entidad afectada |
| entityId | ObjectId | ❌ | ID del recurso modificado |
| oldValue | Object | ❌ | Valores anteriores (si aplica) |
| newValue | Object | ❌ | Valores nuevos (si aplica) |
| ipAddress | String | ✅ | IP de origen |
| userAgent | String | ❌ | Navegador/cliente |
| status | String | ❌ | Estado: ['SUCCESS', 'FAILED', 'DENIED'] |
| timestamp | Date | ✅ | Fecha y hora de la acción |

---

## ⚙️ Configuración (SystemSettings)

Configuración global del sistema.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|------------|
| appName | String | ✅ | Nombre de la aplicación |
| timezone | String | ✅ | Zona horaria del sistema |
| dateFormat | String | ✅ | Formato de fecha |
| currency | String | ✅ | Moneda predeterminada |
| maintenanceMode | Boolean | ❌ | Si está en modo mantenimiento |
| passwordPolicy | Object | ❌ | Política de contraseñas |
| sessionTimeout | Number | ❌ | Tiempo de sesión en segundos |
| maxLoginAttempts | Number | ❌ | Intentos máximos de login |
| enableTwoFactor | Boolean | ❌ | 2FA habilitado globalmente |
| updatedBy | ObjectId | ❌ | Último administrador que editó |
| updatedAt | Date | ✅ | Fecha de última actualización |

---

## 🔔 Notificación (Notification)

Notificaciones del sistema para administradores.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|------------|
| adminId | ObjectId | ✅ | Administrador destinatario |
| type | String | ✅ | Tipo: ['USER_ACTION', 'SECURITY', 'SYSTEM', 'REPORT'] |
| title | String | ✅ | Título de notificación |
| message | String | ✅ | Contenido de notificación |
| actionUrl | String | ❌ | URL de acción relacionada |
| isRead | Boolean | ❌ | Si fue leída (Default: false) |
| priority | String | ❌ | Prioridad: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] |
| expiresAt | Date | ❌ | Fecha de expiración |
| createdAt | Date | ✅ | Fecha de creación |

---

# 🛠️ Scripts Disponibles

```bash
# Instalar dependencias
pnpm install

# Iniciar el servidor en modo desarrollo con nodemon
pnpm run dev

# Iniciar el servidor de forma normal
pnpm start

# Ejecutar tests (si aplica)
pnpm run test

# Linting y validación de código
pnpm run lint

# Build para producción
pnpm run build

# Generar reportes de auditoría
pnpm run audit:report

# Backup de base de datos
pnpm run db:backup
```

---

# 🔐 Características de Seguridad

✅ **Autenticación JWT** con tokens de corta y larga duración  
✅ **Autenticación de Dos Factores (2FA)** mediante email/SMS  
✅ **Encriptación de Contraseñas** con bcrypt  
✅ **Rate Limiting** para prevenir ataques de fuerza bruta  
✅ **CORS** configurado y restringido  
✅ **Helmet** para headers de seguridad  
✅ **Auditoría Completa** de todas las acciones  
✅ **Control de Permisos Granular**  
✅ **Validación de Entrada** con express-validator  
✅ **Protección contra SQL Injection** (MongoDB)  

---

# 📚 Documentación Adicional

- **API Documentation:** Se recomienda usar Swagger/OpenAPI para documentación interactiva
- **Postman Collection:** [Descargar](https://www.postman.com/)
- **Seguridad:** Revisar SECURITY.md para mejores prácticas
- **Contribuir:** Por favor lee CONTRIBUTING.md antes de hacer pull requests

---

## ✅ Checklist de Implementación

- [ ] Endpoints de autenticación administrativa (Login, 2FA)
- [ ] Gestión completa de administradores
- [ ] Generación de reportes personalizados
- [ ] Dashboard con métricas e indicadores
- [ ] Sistema de auditoría y logging
- [ ] Configuración global del sistema
- [ ] Notificaciones administrativas
- [ ] Gestión de usuarios desde panel admin
- [ ] Estructura organizacional
- [ ] Validación de entrada en todos los endpoints
- [ ] Manejo de errores centralizado
- [ ] Variables de entorno configuradas
- [ ] Tests unitarios e integración
- [ ] Documentación en Swagger
- [ ] Rate limiting y protección DDoS
- [ ] Deployment en producción

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👨‍💼 Autor

**milian-rm** - Desarrollador Backend  
GitHub: [@milian-rm](https://github.com/milian-rm)

---

## 📞 Soporte

Para reportar bugs o solicitar features, abre un [issue](https://github.com/milian-rm/workdispatch_admin/issues) en el repositorio.

---

**Última actualización:** 2026-03-09 | **Versión:** 1.0.0 | **Estatus:** En Desarrollo 🚀
