# 🚀 Prueba Técnica: Frontend Engineer (Next.js + React + TypeScript)

## 📖 Descripción
Aplicación desarrollada como parte de la prueba técnica para el rol de **Frontend Engineer**.  
La aplicación utiliza **Next.js 13+ con App Router**, **React**, **TypeScript**, **MUI** (Material UI) y **Capacitor**.

---

## ⚙️ **Tecnologías Utilizadas**
- ⚛️ **React**  
- 🚀 **Next.js** (App Router)  
- 🛠️ **TypeScript**  
- 🎨 **Material UI (MUI)**  
- 📡 **Capacitor**  
- 🔍 **Axios** para llamadas a APIs  

---

## 📂 **Estructura del Proyecto**
test-nextjs-lafuente/
 └── src/
     ├── app/
     │    └-- page.tsx                     // Página principal (opcional)
          └-- exercises/
     │    ├── exercise-1/                  // Ejercicio 1: Next.js + MUI + API
     │    │    ├── page.tsx                // Página principal del ejercicio 1
     │    │    ├── UserList.tsx            // Componente reutilizable
     │    │    ├── theme.ts                // Tema MUI personalizado
     │    │    └── api.ts                  // Llamada a la API
     │    ├── exercise-2/                  // Ejercicio 2: Capacitor
     │    │    ├── page.tsx                // Página principal del ejercicio 2
     │    │    └── capacitorService.ts     // Lógica Capacitor
     │    └── exercise-3/                  // Ejercicio 3: React Hooks + Context
     │         ├── page.tsx                // Página principal del ejercicio 3
     │         ├── AnalyticsContext.tsx    // Context para analytics
     │         └── components/             // Subcarpeta para componentes
     ├── components/
     │    └── CommonButton.tsx             // Componente común reutilizable
     ├── theme/
     │    └── customTheme.ts               // Tema global MUI
     ├── utils/
     │    └── types.ts                     // Definiciones de tipos globales
     └── hooks/
          └── useFetch.ts                  // Hook personalizado para APIs


## 🛠️ **Instrucciones para Ejecutar el Proyecto**

1. Clonar el repositorio:  
    ```bash
    git clone https://github.com/tu-usuario/test-nextjs-lafuente.git
    cd test-nextjs-lafuente
    ```

2. Instalar dependencias:  
    ```bash
    npm install
    ```

3. Iniciar el servidor de desarrollo:  
    ```bash
    npm run dev
    ```

4. Abrir en el navegador:  
    - 🌐 **http://localhost:3000**

---

## 📲 **Configuración de Capacitor**

1. Inicializar Capacitor (si no se ha hecho):  
    ```bash
    npx cap init
    ```

2. Agregar plataforma (Android):  
    ```bash
    npx cap add android
    ```

3. Sincronizar cambios con Capacitor:  
    ```bash
    npx cap sync