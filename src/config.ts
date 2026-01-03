import "dotenv/config";

export const APP_SERVER_PORT = process.env.PORT ? parseInt(process.env.PORT) : 41000;
export const APP_DEV_MODE = process.env.MODE && process.env.MODE === "development";