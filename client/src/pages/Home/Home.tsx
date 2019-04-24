import * as React from 'react';

import { responseResolver } from '../../utils/responseResolver/responseResolver';

import './home.scss';


// using class component

// interface State {
//   status: string
// }

// class Home extends React.Component {
//   readonly state: State = {
//     status: ''
//   };

//   componentDidMount() {
//     responseResolver('/api/thanos')
//       .then((res: string[]) => this.setState({ status: res }))
//       .catch((err: Error) => console.log(err));
//   }

//   render() {
//     return (
//       <div className="home">
//         <h1>{this.state.status}</h1>
//       </div>
//     );
//   }
// }


// using functional component

const Home: React.FC = () => {
  const [status, setStatus] = React.useState<string>('');

  React.useEffect(() => {
    responseResolver('/api/thanos')
      .then((res: string) => setStatus(res))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div className="home">
      <h1>{status}</h1>
    </div>
  );
}

export default Home;