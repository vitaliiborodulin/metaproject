module.exports = {
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1170px",
		fields: "30px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		lg: {
			width: "900px"
		},
		md: {
			width: "768px",
			fields: "24px"
		},
		sm: {
			width: "576px",
		},
		xs: {
			width: "320px",
			fields: "15px"
		}
	}
}