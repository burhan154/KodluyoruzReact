import logo from '../assets/loading.gif'

function Loading () {
    return (
        <div className='loading'> 
            <img src={logo} alt="loading..." />
            <p>Loading...</p>
        </div>
    );
  };
  
  export default Loading;