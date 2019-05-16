class Shape extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			bgColor: props.bgColor,
			size: props.size,
			perCent: props.perCent
			};

		
		this.timerTick = this.timerTick.bind(this);
	}
	

	componentDidMount() {
		setInterval(this.timerTick, 1000);
	}

	timerTick() {	

		var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552",
			"#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64",
			"#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];
				
	
		var newState = {
			bgColor: colors [Math.floor(Math.random() * colors.length)],
			size: Math.floor(Math.random() * 100),
			perCent: Math.floor(Math.random() * 50)
		}
	
		this.setState(newState);

	}
	
			
	
  render() {
	var shapeStyle = {
	  padding: 10,
	  margin: 20,
	  display: "inline-block",
	  backgroundColor: this.state.bgColor,
	  borderRadius: this.state.perCent,
	  width: this.state.size,
	  height: this.state.size
	};

	return (
	  <div style={shapeStyle}>
	  
	  </div>
	);
  }
}

var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552",
			"#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64",
			"#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];
		  
var renderData = [];


for (var i = 0; i < 60; i++) {
	var ranColor = Math.floor(Math.random() * colors.length);
	var ranSize = Math.floor(Math.random() * 100);
	var ranBorder = Math.floor(Math.random() * 50);
	
	renderData.push(<Shape key={i} bgColor={colors[ranColor]} size={ranSize} perCent={ranBorder}/>);
}


ReactDOM.render(
  <div>
  {renderData}
  </div>,
  document.querySelector("#root")
);