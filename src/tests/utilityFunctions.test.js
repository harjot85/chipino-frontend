import { getElementsPerScreen } from "../utilities/functions"

describe("should return a number between 0 and 6", () => {
  test("testing getElementsPerScreen()", () => {
    const value = getElementsPerScreen()
    expect(value).toBeGreaterThan(0)
    expect(value).toBeLessThan(6)
  })
})
