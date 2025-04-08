const API_URL = "https://pop-backend.onrender.com";

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    
    if (!response.ok) {
      throw new Error(`Signup failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Signup Error:", error);
    return { success: false, message: "Signup failed. Please try again." };
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login Response Data:", data);

    return data;
  } catch (error) {
    console.error("Login Error:", error);
    return { success: false, message: "Login failed due to server error." };
  }
};


export const submitFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${API_URL}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedbackData),
    });

    if (!response.ok) {
      throw new Error(`Feedback submission failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Feedback Error:", error);
    return { success: false, message: "Feedback submission failed. Please try again." };
  }
};
