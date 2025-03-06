/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LOGIN_IMAGE: string;
    readonly VITE_COMPANY_NAME: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }