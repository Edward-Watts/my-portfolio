import {Promisify} from '../utils/common'

import stacks from '../utils/sample-data'

var myStacks = stacks

export const getStacks = async() => {
    const res = await Promisify(myStacks)
    console.log(res)
    return res
}