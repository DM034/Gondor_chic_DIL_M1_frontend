# Gondor Chic Frontend

An Angular-based frontend application for "Gondor Chic" - the e-commerce platform for Minas Tirith's magical products.

## 📋 Requirements

- 🟢 Node.js 18.x or higher
- 📦 npm or yarn
- 🅰️ Angular CLI 20.x

---

## 💻 Development Guide

## 🛠️ Setup

1. **📥 Clone the repository**

   ```bash
   git clone <repository-url>
   cd Gondor_chic_DIL_M1_frontend
   ```

2. **📦 Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **📝 Environment configuration**

   ```bash
   # Configure API endpoints in src/environments/
   # Edit environment.ts for development
   # Edit environment.production.ts for production
   ```

## 🚀 Running the Application

### Development Server

```bash
npm run start
# or
npm run dev
# Application will be available at http://localhost:4200
```

### 🏗️ Building the Application

```bash
# Development build
npm run build

# Production build
npm run build --configuration production
```

<!-- ### 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm test -- --watch
``` -->

---

## 🚀 Deployment Guide

1. **🏗️ Build for Production**

   ```bash
   npm run build --configuration production
   ```

2. **🌐 Server-Side Rendering (SSR)**

   ```bash
   # Build with SSR
   npm run build --configuration production

   # Serve SSR application
   npm run serve:ssr:gondor-chic
   ```

3. **📦 Deploy Static Files**

   The built files will be in the `dist/gondor-chic/` directory.

---

## 🔧 Useful Commands

```bash
# Generate new component
ng generate component component-name

# Generate new service
ng generate service service-name

# Generate new module
ng generate module module-name

# Lint the code
ng lint

# Update Angular and dependencies
ng update

# Analyze bundle size
npm run build -- --stats-json
npx webpack-bundle-analyzer dist/gondor-chic/stats.json
```
