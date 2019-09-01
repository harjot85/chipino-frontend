import { getElementsPerScreen } from '../utilities/functions'

test('should return a number when getElementsPerScreen() is called', () => {
    const value = getElementsPerScreen()
    expect(value).toBeGreaterThan(0)
    expect(value).toBeLessThan(6)
})
