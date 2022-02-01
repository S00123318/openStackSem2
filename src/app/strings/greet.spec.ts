import {greet} from './greet';

describe ('greet', () => {
    it('it should include the name in the message,,, Dale Duncan - S00123318', () => {
        expect(greet('Frank')).toContain('Frank');

    });
});