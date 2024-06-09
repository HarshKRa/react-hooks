import './App.css';
import UseState from './hooks/useState/UseState';
import UseEffect from './hooks/useEffect/UseEffect';
import UseRef from './hooks/useRef/UseRef';
import UseMemo from './hooks/useMemo/UseMemo';
import UseCallBack from './hooks/useCallback/UseCallBack';
import UseContext from './hooks/useContext/UseContext';
import UseReducer from './hooks/useReducer/UseReducer';


function App() {
  return (
    <div className='main'>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      {/* <UseContext /> */}
      <UseReducer />
      
    </div>
  );
}

export default App;
