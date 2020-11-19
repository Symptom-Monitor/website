import ky from 'ky/umd';
import {useState} from 'react';

export interface IAlgorithm {
	id: string;
	name: string;
}

export interface IProcessResponse {
	good?: boolean;
	str: string;
}

export class API {
	private readonly client: typeof ky;

	constructor() {
		this.client = ky.extend({
			prefixUrl: 'http://127.0.0.1:5000'
		});
	}

	async getAlgorithms() {
		return this.client.get('algorithms').json<IAlgorithm[]>();
	}

	async processVideo(algoId: string) {
		return this.client.post(`algorithms/${algoId}`).json<IProcessResponse>();
	}
}

export const useAPI = () => {
	const [api] = useState(new API());

	return api;
};
