import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DashboardPreview() {
  // Dados simulados (podem vir do backend futuramente)
  const data = [
    { name: 'Semana 1', performance: 45 },
    { name: 'Semana 2', performance: 52 },
    { name: 'Semana 3', performance: 60 },
    { name: 'Semana 4', performance: 68 },
    { name: 'Semana 5', performance: 75 },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-8">
          Preview do Seu Painel Exclusivo
        </h2>

        {/* Gráfico */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-10">
          <h3 className="text-xl font-semibold text-white mb-4">
            Sua evolução nas últimas semanas
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="#ec4899" 
                strokeWidth={3}
                dot={{ fill: '#ec4899', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#ec4899', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Progresso ao vivo',
              desc: 'Veja sua evolução física em tempo real diretamente no painel.'
            },
            {
              title: 'Metas personalizadas',
              desc: 'Objetivos definidos junto com a personal para cada etapa.'
            },
            {
              title: 'Histórico inteligente',
              desc: 'Todos os treinos e avanços salvos e organizados.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg p-6 shadow-md text-left hover:bg-gray-800 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
