const API_URL = "http://localhost:5000";

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    return response.json();
  } catch (error) {
    console.error("Signup Error:", error);
    return { success: false, message: "Signup failed" };
  }
};


export const login = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      return response.json();
    } catch (error) {
      console.error("Login Error:", error);
      return { success: false, message: "Login failed" };
    }
  };


  export const submitFeedback = async (feedbackData) => {
    try {
      const response = await fetch(`${API_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
  
      return response.json();
    } catch (error) {
      console.error("Feedback Error:", error);
      return { success: false, message: "Feedback submission failed" };
    }
  };