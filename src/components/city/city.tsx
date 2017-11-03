import * as React from 'react';

interface Props extends React.Props<T> {
	getCities: Function;
}


export default class App extends React.Component<Props> {
  constructor(props: Props){
		super(props)
		this.state = {}
  }

  componentWillMount(){
    this.props.getCities();
  }

  render() {

    let cities: Array[] = this.props.

    let CityList = cities.map((city:Object, i: Number) =>
                    <li key={`city-${i}`}>{city.name}</li>
                 );

    return (
      <ul>{CityList}</ul>
    );
  }
}
