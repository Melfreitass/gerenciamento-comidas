import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed...');

    await prisma.food.createMany({
        data: [
            {
                name: 'Strogonoff',
                description: 'Prato com arroz, strogonoff, batata frita e salada',
                price: 25.0,
                category: 'prato principal',
                available: true,
            },
            {
                name: 'Bruschetta Italiana',
                description: 'Pão italiano tostado com tomates, manjericão e azeite',
                price: 18.5,
                category: 'entrada',
                available: true,
            },
            {
                name: 'Coxinhas Gourmet',
                description: 'Mini coxinhas de frango com catupiry (6 unidades)',
                price: 22.0,
                category: 'entrada',
                available: true,
            },
            {
                name: 'Feijoada Completa',
                description: 'Feijão preto com carnes nobres, arroz, couve e farofa',
                price: 45.0,
                category: 'prato principal',
                available: true,
            },
            {
                name: 'Lasanha à Bolonhesa',
                description: 'Massa artesanal com molho de carne e muito queijo',
                price: 38.9,
                category: 'prato principal',
                available: true,
            },
            {
                name: 'Salmão Grelhado',
                description: 'Filé de salmão com purê de mandioquinha e aspargos',
                price: 62.0,
                category: 'prato principal',
                available: true,
            },
            {
                name: 'Pudim de Leite',
                description: 'Pudim clássico com calda de caramelo artesanal',
                price: 12.0,
                category: 'sobremesa',
                available: true,
            },
            {
                name: 'Petit Gâteau',
                description: 'Bolinho de chocolate com recheio cremoso e sorvete de baunilha',
                price: 24.5,
                category: 'sobremesa',
                available: true,
            },
            {
                name: 'Suco de Laranja Natural',
                description: 'Copo de 400ml feito na hora',
                price: 9.0,
                category: 'bebida',
                available: true,
            },
            {
                name: 'Soda Italiana de Maçã Verde',
                description: 'Refresco gaseificado com xarope de maçã verde e gelo',
                price: 14.0,
                category: 'bebida',
                available: true,
            },
        ],
    });

    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
