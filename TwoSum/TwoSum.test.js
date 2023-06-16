import { twoSum } from ".";


describe('Return indices of the two numbers such that they add up to target', () => {
  test('[2,7,11,15] with target: 9', () => {
    expect(twoSum([2,7,11,15], 9).sort()).toEqual([0,1].sort())
  }),
  test('[3,2,4] with target: 6', () => {
    expect(twoSum([3,2,4], 6).sort()).toEqual([1,2].sort())
  }),
  test('[3,3] with target: 6', () => {
    expect(twoSum([3,3], 6).sort()).toEqual([0,1].sort())
  })
})
