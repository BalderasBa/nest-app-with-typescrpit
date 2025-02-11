import { allowedOrigins } from './allowedOrigins';

const configCors = {
  origin: (
    origin: string,
    callback: (err: Error | null, allow?: boolean) => void,
  ) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
  credentials: true,
};

export default configCors;
