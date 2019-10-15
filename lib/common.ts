export interface Test {
	name: string;
	test: boolean;
}

export function getTest(): Test {
	return {
		name: 'dummy',
		test: true,
	};
}