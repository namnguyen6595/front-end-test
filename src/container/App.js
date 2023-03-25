import logo from '../assets/images/logo.svg';
import '../assets/styles/_index.scss';
import HorizontalSlideShow from '../components/HorizontalSlideShow';
import { DATA_IMAGES } from '../constant/images';
function App() {
  return (
    <div className="App">
      <HorizontalSlideShow data={DATA_IMAGES}/>
    </div>
  );
}

export default App;
