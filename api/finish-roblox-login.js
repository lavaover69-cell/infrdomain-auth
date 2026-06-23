export default function handler(req, res) {
  const redirectUri = "https://infrdomain-verification.vercel.app/api/finish-roblox-login";

  // TEMP: we simulate OAuth-style redirect initiation
  const robloxLoginUrl = `https://www.roblox.com/login?returnUrl=${encodeURIComponent(redirectUri)}`;

  res.status(200).json({
    success: true,
    redirect: robloxLoginUrl
  });
}
