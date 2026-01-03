import pino from "pino";
export const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true
    }
  }
});

import pinoHttp from "pino-http";
export const httpLogger = pinoHttp({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true
    }
  }
}); 