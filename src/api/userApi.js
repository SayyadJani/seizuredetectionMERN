import axiosInstance from "./axiosInstance";

export async function fetchUserProfile(token) {
  const response = await axiosInstance.get("/api/user/profile", {
    headers: {
      token: `Bearer ${token}`,
    },
  });
    return response.data;
}
