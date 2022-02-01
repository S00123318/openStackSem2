import { getCurrencies } from "./getCurrencies";

describe('getCurrencies',()=>{

    it('should return the supported currencies USD GDP EUR',() =>{

        const result = getCurrencies();

        expect(result).toContain('USD');
        expect(result).toContain('GDP');
        expect(result).toContain('EUR');
    });
});