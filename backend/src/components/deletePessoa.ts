import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
    async deleteUser(req: Request, res: Response) {
        try {
            const pessoaId = parseInt(req.params.id, 10);
            
            const pessoa = await prisma.fila.findUnique({
                where: { id: pessoaId },
            });

            if (!pessoa) {
                return res.status(404).json({ error: 'Pessoa não encontrada' });
            }

            await prisma.historico.create({
                data: {
                    nome: pessoa.nome,  
                    paes: pessoa.paes,
                    valor: pessoa.valor,
                    createdAt: new Date(),
                },
            });

            await prisma.fila.delete({
                where: { id: pessoaId },
            });

            res.json({ message: 'Usuário excluído com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            res.status(500).json({ error: 'Erro ao excluir usuário' });
        } finally {
            await prisma.$disconnect(); 
        }
    }
};





