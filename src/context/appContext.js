"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const url = "http://localhost:3000";
  const [brandData, setBrandData] = useState([]);
  const [influencerData, setInfluencerData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getBrandData();
    getInfluencerData();
  }, []);

  const registerInfluencer = async (formData) => {
    const response = await fetch(`${url}/influencersRegister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.status === 201) {
      toast.success(data.message);
    } else {
      toast.error("Something went wrong!");
    }
  };

  const getInfluencerData = async () => {
    const response = await fetch(`${url}/influencerData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.status === 200) {
      setInfluencerData(data.influencerData);
    }
  };

  const userLogin = async (formData) => {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.status === 200) {
      setUser(data.user);
    } else {
      toast.error("Something went wrong!");
    }
  };

  const regiterBrand = async (formData) => {
    const response = await fetch(`${url}/brandsRegister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.status === 201) {
      toast.success(data.message);
    } else {
      toast.error("Something went wrong!");
    }
  };

  const getBrandData = async () => {
    const response = await fetch(`${url}/brandData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.status === 200) {
      setBrandData(data.brandData);
    }
  };

  return (
    <AppContext.Provider
      value={{
        influencerData,
        brandData,
        user,
        regiterBrand,
        registerInfluencer,
        userLogin,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useContextApi = () => useContext(AppContext);
