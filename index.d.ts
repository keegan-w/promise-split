export type split = <T>(promise: Promise<T>) => Promise<[null, unknown] | [T, null]>

export default split;