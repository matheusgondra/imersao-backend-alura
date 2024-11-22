export const adaptRoute = (controller) => {
	return (req, res) => {
		new controller().handle(req, res);
	}
}