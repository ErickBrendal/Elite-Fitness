import { motion } from 'framer-motion';
import { Target, Zap, Crown, Heart, Trophy, Star } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: 'Treino Personalizado',
      description: 'Programa exclusivo desenvolvido especificamente para seus objetivos e biotipo.',
      features: ['Avaliação física completa', 'Plano nutricional', 'Acompanhamento semanal'],
      price: 'R$ 299/mês'
    },
    {
      icon: Zap,
      title: 'Coaching Intensivo',
      description: 'Transformação acelerada com acompanhamento diário e suporte 24/7.',
      features: ['WhatsApp exclusivo', 'Vídeo-chamadas semanais', 'Ajustes em tempo real'],
      price: 'R$ 599/mês'
    },
    {
      icon: Crown,
      title: 'Elite VIP',
      description: 'O máximo em exclusividade: treinos presenciais e acompanhamento total.',
      features: ['Treinos presenciais', 'Nutricionista inclusa', 'Acesso prioritário'],
      price: 'R$ 1.299/mês'
    }
  ];

  const benefits = [
    { icon: Heart, text: 'Saúde e bem-estar' },
    { icon: Trophy, text: 'Resultados garantidos' },
    { icon: Star, text: 'Experiência premium' }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Escolha Sua <span className="text-gradient">Jornada</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada mulher é única. Por isso, oferecemos diferentes níveis de acompanhamento 
            para atender exatamente o que você precisa para alcançar seus objetivos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover-glow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-pink-500 rounded-full mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-center mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <a
                  href="https://wa.me/5511954004713?text=Olá%20Brenda!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${service.title}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                >
                  Consulte Aqui
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-500/30"
            >
              <benefit.icon className="h-5 w-5 text-pink-400" />
              <span className="text-white font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
