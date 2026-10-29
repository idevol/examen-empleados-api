import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const inicio = Date.now();
    const { method, originalUrl } = req;

    res.on('finish', () => {
      const duracion = Date.now() - inicio;
      const { statusCode } = res;
      console.log(`${method} ${originalUrl} ${statusCode} - ${duracion}ms`);
    });

    next();
  }
}