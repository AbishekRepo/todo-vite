import Form from "./components/Form";
import List from "./components/List";
import { useAppContext, AppProvider } from "./context/AppContext";

function App() {
  const { form, setForm, list, handleSumbit, close } = useAppContext();
  return (
    <div>
      <div className="container">
        <Form setForm={setForm} form={form} handleSumbit={handleSumbit} />
      </div>
      <div className="list-elements">
        {list.map((item, index) => {
          return <List key={index} list={item} close={close} />;
        })}
      </div>
    </div>
  );
}

function MainApp() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default MainApp;
