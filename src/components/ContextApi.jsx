import { useContext } from 'react';
import { MyContext } from './MyContext';
// import { MyContext } from './MyContext';

function ContextApi() {
  const { text, setText } = useContext(MyContext);

  return (
    <div className="container mx-auto w-50 my-5">
      <h1>{text}</h1>
      <button className="btn btn-warning" onClick={() => setText('Menyala Abangku')}>
        Click me
      </button>
    </div>
  );
}

export default ContextApi;