import axios from 'axios';
import * as React from 'react';

import { responseResolver } from '../../utils/responseResolver/responseResolver';

import './home.scss';


// using class component

// interface State {
//   reconsidering: boolean;
//   reconsiderStatus: string;
//   status: string,
// }

// class Home extends React.Component {
//   readonly state: State = {
//     reconsidering: false,
//     reconsiderStatus: 'Will I reconsider?',
//     status: ''
//   };

//   componentDidMount() {
//     responseResolver('/api/thanos/decimate')
//       .then((res: string[]) => this.setState({ status: res }))
//       .catch((err: Error) => console.log(err));
//   }

//   render() {
//     const { reconsidering, reconsiderStatus, status } = this.state;
//     return (
//       <div className="home">
//         <h1>{status}</h1>
//         <h2>Thanos: {reconsiderStatus}</h2>
//         <button onClick={this.reconsider} disabled={reconsidering}>
//           {reconsidering ? 'Reconsidering...' : 'Pls reconsider'}
//         </button>
//       </div>
//     );
//   }

//   reconsider = async () => {
//     this.setState({ reconsidering: true });
//     try {
//       const response = await axios.post('api/thanos/reconsider', { reconsider: Math.floor(Math.random() * 100) < 50 ? true : false });
//       this.setState({ reconsidering: false });
//       this.setState({ reconsiderStatus: response.data});
//     } catch (e) {
//       console.log(`Axios request failed: ${e}`);
//     }
//   }
// }


// using functional component

const Home: React.FC = () => {
  const [status, setStatus] = React.useState<string>('');
  const [reconsiderStatus, setReconsiderStatus] = React.useState<string>('Will I reconsider?');
  const [reconsidering, setReconsidering] = React.useState<boolean>(false);

  React.useEffect(() => {
    responseResolver('/api/thanos/decimate')
      .then((res: string) => setStatus(res))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div className="home">
      <h1>{status}</h1>
      <h2>Thanos: {reconsiderStatus}</h2>
      <button onClick={reconsider}>{reconsidering ? 'Reconsidering...' : 'Pls reconsider'}</button>
    </div>
  );

  async function reconsider() {
    setReconsidering(true);
    try {
      const response = await axios.post('api/thanos/reconsider', { reconsider: Math.floor(Math.random() * 100) < 50 ? true : false });
      setReconsidering(false);
      setReconsiderStatus(response.data);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  }
}

export default Home;