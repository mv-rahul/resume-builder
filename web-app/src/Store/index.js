import React, { Suspense } from "react";
import createStore from "react-evoke";
import {resumeActions} from "./Actions/resumeActions";
import {initialState} from "./initialState";
import {AppLoadingScreen} from "../Components/AppLoadingScreen"

const { Store, UseStore, useStore } = createStore();

export const AppStore = ({ children }) => (
    <>
      <Store
        actions={{
          ...resumeActions
        }}
        initialState={initialState}
        //initializers={initializers}
      
      >
        <Suspense fallback={<AppLoadingScreen />}>{children}</Suspense>
      </Store>
    </>
  );
  
  export { UseStore, useStore };
