import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PathDictionary } from './models/utils/PathType';

const App = () => {
  const dictionary = PathDictionary.toArray();
  return (
    <BrowserRouter>
      <Routes>
        {dictionary.map((x, i) => {
          const { key, value } = x;
          return <Route key={"Page" + i} path={key} element={value} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
