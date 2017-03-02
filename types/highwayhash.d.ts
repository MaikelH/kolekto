declare module highwayhash {
	export function asString(key: Buffer, input: string) : string
	export function asHexString(key: Buffer, input: string) : string
	export function asUInt32Low(key: Buffer, input: string) : number
	export function hashAsUInt32Low(key: Buffer, input: string) : number
	export function hashAsUInt32High(key: Buffer, input: string) : number
	export function hashAsBuffer(key: Buffer, input: string) : Buffer
}