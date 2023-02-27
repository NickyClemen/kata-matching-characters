const { matchingCharacters } = require('./matchingCharacters');

const mockStrings = {
    caseOne: 'ahyjakh',
    caseTwo: 'ghececgkaem',
    caseThree: 'mmmerme',
    caseFour: 'abccdefghi',
    caseException: 'ASSeeyffgg',
}

describe('matchingCharacters test', () => {
    it('return value should be integer', () => {
        expect(
            matchingCharacters(mockStrings.caseOne),
        ).toBe(4);

        expect(
            matchingCharacters(mockStrings.caseTwo),
        ).toBe(5);

        /* expect(
            matchingCharacters(mockStrings.caseThree),
        ).toBe(3); */

        expect(
            matchingCharacters(mockStrings.caseFour),
        ).toBe(0);
    });

    it('all values into string should be lowercase.', () => {
        expect(
            () => matchingCharacters(mockStrings.caseException),
        ).toThrow('string should contain lowercase');
    })
});