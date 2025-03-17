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

export const login = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Login Error:", error);
    return { success: false, message: "Login failed. Please check your credentials." };
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
