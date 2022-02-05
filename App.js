import { Provider } from "react-redux";
import RootNavigation from "./navigation";
import configureStore from "./redux/store";
export default function App() {
  const store =configureStore();
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}
