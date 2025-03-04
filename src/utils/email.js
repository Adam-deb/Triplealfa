import axios from "axios";
import qs from "qs";

export async function getAccessToken() {
  const url = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;

  const data = qs.stringify({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.access_token;
  } catch (err) {
    console.error("Token Error:", err.response?.data);
    throw new Error("Failed to generate access token");
  }
}

export async function sendEmail(to, subject, message) {
  const token = await getAccessToken();

  const email = {
    message: {
      subject: subject,
      body: {
        contentType: "Text",
        content: message,
      },
      toRecipients: [
        {
          emailAddress: {
            address: to,
          },
        },
      ],
    },
    saveToSentItems: "false",
  };

  try {
    await axios.post(
      `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_USER}/sendMail`,
      email,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email Sent!");
  } catch (err) {
    console.error("Email Error:", err.response?.data);
    throw new Error("Failed to send email");
  }
}