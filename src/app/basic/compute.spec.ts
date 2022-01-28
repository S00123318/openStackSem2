import {compute} from './compute';

describe ('compute',() =>{
    it('should return 0 if the onput is negative',() =>{
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should return 1 if the inout is positive',() => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});
