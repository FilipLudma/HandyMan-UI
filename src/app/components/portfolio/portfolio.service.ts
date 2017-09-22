import { Injectable } from '@angular/core';
import { IMAGES } from './mock-portfolio-images'

@Injectable()
export class PortfolioService {
    getPortfolioImages():  Promise<string[]> {
        return Promise.resolve(IMAGES);
    }
}