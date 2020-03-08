import winston from 'winston';

const { NODE_ENV } = process.env;

const opts = {
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'App' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
};

export const logger = winston.createLogger(opts);

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}
