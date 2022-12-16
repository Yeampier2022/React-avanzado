import React from "react";
import { ListOfCategories } from "./components/ListOfCategory";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCart";
import { Logo } from "./components/logo";


export const App = () =>(  
  <div>
  <GlobalStyles />
  <Logo />
  <ListOfCategories />
  <ListOfPhotoCards />
  </div>
  )
