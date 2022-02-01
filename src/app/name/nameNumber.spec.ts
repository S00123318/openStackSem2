import {nameNumber} from './nameNumber';

describe ('nameNumber', () => {
    it('Dale Duncan - S00123318', () => {
        expect(nameNumber('Dale Duncan - S00123318')).toContain('Dale Duncan - S00123318');

    });
});