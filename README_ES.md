## Español

### Descripción del proyecto

Expense Tracker es un pequeño planificador de presupuesto hecho con React, TypeScript y Vite. Permite definir un presupuesto, registrar gastos, filtrarlos por categoría y visualizar cuánto se ha utilizado del presupuesto. Los datos se guardan en el navegador con localStorage.

### Funcionalidades

- Definir y reiniciar presupuesto.
- Agregar, editar y eliminar gastos.
- Filtrar gastos por categoría.
- Indicador visual de uso del presupuesto.
- Persistencia local mediante localStorage.

### Stack tecnológico

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Headless UI
- Heroicons
- date-fns
- react-date-picker
- react-swipeable-list
- react-circular-progressbar

### Instalación y ejecución

1. Instalar dependencias:
   - npm install
2. Iniciar servidor de desarrollo:
   - npm run dev

### Variables de entorno

No se requieren variables de entorno.

### Scripts

- npm run dev — iniciar entorno de desarrollo
- npm run build — build de producción
- npm run preview — previsualizar build
- npm run lint — ejecutar ESLint

### Estructura del proyecto

```
src/
  components/        Componentes de UI
  context/           Provider de Context API
  data/              Datos estáticos (categorías)
  helpers/           Utilidades de formato
  hook/              Hooks personalizados
  reducers/          Reducer de estado
  types/             Tipos TypeScript compartidos
```

### Mejoras futuras

- Agregar tests (unitarios e integración).
- Mejorar validaciones y manejo de errores.
- Extraer la lógica de localStorage a una capa dedicada.
- Agregar i18n para unificar el idioma.
- Mejorar accesibilidad y navegación por teclado.
