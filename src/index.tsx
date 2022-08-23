import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./routes/Main";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { UsecasesProvider } from "./presentation/contexts";
import { makeUsecases } from "./main/factories/usecases-factory";
import { GlobalStyles } from "./styles/globalStyles";
import { MainContainer } from "./styles/containers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UsecasesProvider usecases={makeUsecases()}>
          <GlobalStyles />
          <MainContainer>
            <Main />
          </MainContainer>
        </UsecasesProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
