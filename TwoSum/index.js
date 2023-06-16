export function twoSum (nums, target) {
  let mapper = new Map()
  
  for (let i = 0; i < nums.length; i++) {
    console.log(typeof i)
    let difference = target - nums[i]
    
    if (mapper.has(difference)) {
      return [i, mapper.get(difference)]
    }
    
    mapper.set(nums[i], i)
  }
}

