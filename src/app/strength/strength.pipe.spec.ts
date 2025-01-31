import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        let pipe = new StrengthPipe();

        let result = pipe.transform(5);

        expect(result).toEqual('5 (weak)');
    });

    it('should display strong if strength is 10', () => {
        let pipe = new StrengthPipe();

        let result = pipe.transform(10);

        expect(result).toEqual('10 (strong)');
    });

    it('should display unbelievable if strength is 21', () => {
        let pipe = new StrengthPipe();

        let result = pipe.transform(21);

        expect(result).toEqual('21 (unbelievable)');
    });
});