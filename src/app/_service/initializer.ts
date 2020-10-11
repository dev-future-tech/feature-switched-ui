import { FlagrService } from '../_service/flagr.service';
import { environment as env } from '../../environments/environment';

export function initializer(flagr: FlagrService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await flagr.init({
          flagr_host: env.flagr_host,
        });
        resolve();
      } catch(error) {
        reject(error);
      }

    });
  }
}
