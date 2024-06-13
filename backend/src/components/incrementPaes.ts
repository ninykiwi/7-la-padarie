import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
  async incrementarPaes(req: Request, res: Response) {
    try {
      const { nome } = req.params; 
      const { quant } = req.body; 

    
      const pessoa = await prisma.fila.update({
        where: { id: parseInt(nome) },
        data: {
          paes: {
            increment: quant,
          },
        },
      });

      res.status(200).json({ pessoa });
    } catch (error) {
      console.error("Erro ao incrementar quantidade de pães:", error);
      res.status(500).json({ error: "Erro ao incrementar quantidade de pães" });
    }
  }
};
