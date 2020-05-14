describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com/')
  })

  it('One', async () => {
    const title = await page.title()
    expect(title).toBe('Google')
    expect(browserName).toBe('firefox')
  })
})
