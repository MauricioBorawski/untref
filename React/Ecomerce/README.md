## Requerimientos
* Algun manejador de paqutes (npm, yarn o pnpm)

## Pasos
### Librerias
1. npm init (inicializar el proyecto)
2. npm install react react-dom
3. npm install -D vite @vitejs/plugin-react
4. npm install -D typescript @types/node @types/react @types/react-dom (opcional)

### Configuraciones
1. Crear un vite.config.ts (o.js)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
});
```

2. Crear una configuracion de Typescript, crear un `tsconfig.json`
```json
{
    "compilerOptions": {
    "target": "ESNext",
        "useDefineForClassFields": true,
        "lib": ["DOM", "DOM.Iterable", "ESNext"],
        "allowJs": false,
        "skipLibCheck": true,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
},
    "include": ["src"]
}
```

### Crear la App
1. Crear un HTML con un `<div id="root">`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React - Ecomerce UNTREF</title>
</head>
<body>
<div id="root"></div>
<script type="module" src="src/main.tsx"></script>
</body>
</html>
```
2. Crear el punto de entrada de la app, crear un `main.tsx`

