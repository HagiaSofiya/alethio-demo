export default {
	bigStat: [
		{
			product: "Mainnet API",
			total: {
				monthly: 4232,
				weekly: 1465,
				daily: 199,
				percent: { value: 3.7, profit: false }
			},
			color: "primary",
			alpha: {
				monthly: { value: 830, profit: false },
				weekly: { value: 215, profit: true },
				daily: { value: 33, profit: true }
			},
			beta: {
				monthly: { value: 4.5, profit: false },
				weekly: { value: 3, profit: true },
				daily: { value: 3.25, profit: true }
			}
		},
		{
			product: "Kovan API",
			total: {
				monthly: 754,
				weekly: 180,
				daily: 27,
				percent: { value: 2.5, profit: true }
			},
			color: "warning",
			alpha: {
				monthly: { value: 32, profit: true },
				weekly: { value: 8, profit: true },
				daily: { value: 2, profit: false }
			},
			beta: {
				monthly: { value: 2.5, profit: true },
				weekly: { value: 4, profit: false },
				daily: { value: 4.5, profit: false }
			}
		},
		{
			product: "Rinkeby API",
			total: {
				monthly: 1025,
				weekly: 301,
				daily: 44,
				percent: { value: 3.1, profit: true }
			},
			color: "secondary",
			alpha: {
				monthly: { value: 230, profit: true },
				weekly: { value: 58, profit: false },
				daily: { value: 15, profit: false }
			},
			beta: {
				monthly: { value: 21.5, profit: false },
				weekly: { value: 19.35, profit: false },
				daily: { value: 10.1, profit: true }
			}
		}
	],
	table: [
		{
			id: 0,
			target: "MCH Daily Action",
			metric: "16 calls / 15m",
			condition: "Threshold",
			date: "1:23:45PM",
			block: "#8341693"
		},
		{
			id: 1,
			target: "MCH Daily Action",
			metric: "16 calls / 15m",
			condition: "Threshold",
			date: "1:23:45PM",
			block: "#8341693"
		},
		{
			id: 2,
			target: "MCH Daily Action",
			metric: "16 calls / 15m",
			condition: "Threshold",
			date: "1:23:45PM",
			block: "#8341693"
		},
		{
			id: 3,
			target: "MCH Daily Action",
			metric: "16 calls / 15m",
			condition: "Threshold",
			date: "1:23:45PM",
			block: "#8341693"
		},
		{
			id: 4,
			target: "MCH Daily Action",
			metric: "16 calls / 15m",
			condition: "Threshold",
			date: "1:23:45PM",
			block: "#8341693"
		}
	]
};
