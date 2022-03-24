import {Promisify} from '../utils/common'

import stacks from '../utils/sample-data'

var myStacks = stacks

export const getStacks = async() => {
    const res = await Promisify(myStacks)
    return res
}