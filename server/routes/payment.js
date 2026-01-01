import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/chapa", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount: "100",
        currency: "ETB",
        email: req.body.email,
        first_name: "Addis",
        last_name: "Pet",
        tx_ref: `addispet-${Date.now()}`,
        callback_url: "http://localhost:3000",
        return_url: "http://localhost:3000/cart",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
});

export default router;
