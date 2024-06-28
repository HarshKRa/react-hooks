// 1: Always write it inside the component or function
// 2: Component name must be PascalCase (first letter should be uppercase)
// 3: we can directly import or we can directly write it using React.hookName
// 4: Don't call Hooks inside loops, conditions, or nested functions.


import './App.css';
import UseState from './hooks/useState/UseState';
import UseEffect from './hooks/useEffect/UseEffect';
import UseRef from './hooks/useRef/UseRef';
import UseMemo from './hooks/useMemo/UseMemo';
import UseCallBack from './hooks/useCallback/UseCallBack';
import UseContext from './hooks/useContext/UseContext';
import UseReducer from './hooks/useReducer/UseReducer';
import UseLayoutEffect from './hooks/useLayoutEffect/UseLayoutEffect';
import Todo from './component/Todo';


function App() {
  return (
    <div className='main'>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      {/* <UseContext /> */}
      {/* <UseReducer />   Again revise */}
      {/* <UseLayoutEffect /> */}


      <Todo />
    </div>
  );
}

export default App;
