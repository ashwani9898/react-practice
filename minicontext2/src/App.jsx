import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="text-center flex flex-col items-center gap-14">
          <h1 className="p-4 bg-gray-600 text-white text-center w-full">
            Context API
          </h1>
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
