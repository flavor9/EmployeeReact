import './app-info.css';

const AppInfo = ({employees, increased}) => {
	return (
		<div className="app-info">
			<h1>Employee accounting in company Razer</h1>
			<h2>Total employee count: {employees}</h2>
			<h2>Awards recived: {increased}</h2>
		</div>
	)
}

export default AppInfo;