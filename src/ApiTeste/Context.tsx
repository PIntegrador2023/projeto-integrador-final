import React, { createContext, useContext, useState } from "react";
type AppPrevisaoTempoProviderProps = {
  children: React.ReactNode;
};
type AppFunctions = {
  location: { latitude: number; longitude: number };
  ApiTempoFunction: [];
  price?: number;
};
