import axiosInstance from "./axiosInstance";

export async function fetchUserProfile(token) {
  const response = await axiosInstance.get("/api/user/profile", {
    headers: {
      token: `Bearer ${token}`,
    },
  });
    return response.data;
}


// http://localhost:8080

// all apis working fine with local host but the live apis are not working expect this api
// get :- https://seizuredetectionbackend-api.onrender.com
// post :- https://seizuredetectionbackend-api.onrender.com/api/auth/login
// post :- https://seizuredetectionbackend-api.onrender.com/api/user/history
// get :- https://seizuredetectionbackend-api.onrender.com/api/user/profile