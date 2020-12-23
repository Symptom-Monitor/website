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
			prefixUrl: process.env.NEXT_PUBLIC_ENDPOINT
		});
	}

	async getAlgorithms() {
		return this.client.get('algorithms').json<IAlgorithm[]>();
	}

	async processVideo(algoId: string, file: File) {
		const form = new FormData();
		form.append('file', file);

		return this.client.post(`algorithms/${algoId}`, {body: form}).json<IProcessResponse>();
	}

	async getSimulatedSpread({x, y, alpha, beta, gamma}: {x: number; y: number; alpha: number; beta: number; gamma: number}) {
		const response = await this.client.get('map', {
			searchParams: {
				x,
				y,
				alpha,
				beta,
				gamma
			}
		});

		const blob = await response.blob();

		return blob;
	}
}

export const useAPI = () => {
	const [api] = useState(new API());

	return api;
};
