import { app } from "./app";

const PORT = process.env.PORT || 3333;

// Health Check (rota raiz)
app.get("/", (req, res) => {
  res.json({
    status: "NexaClients API running 🚀",
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});