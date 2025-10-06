import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Como funciona o acompanhamento personalizado?',
      answer: 'Cada cliente recebe um plano único baseado em avaliação física completa, objetivos pessoais e estilo de vida. O acompanhamento inclui ajustes semanais, suporte via WhatsApp e monitoramento de progresso através do nosso app exclusivo.'
    },
    {
      question: 'Preciso ter experiência prévia com exercícios?',
      answer: 'Não! Nosso método é adaptado para todos os níveis, desde iniciantes até atletas avançadas. Começamos sempre respeitando seu condicionamento atual e evoluímos gradualmente para garantir segurança e resultados sustentáveis.'
    },
    {
      question: 'Quanto tempo leva para ver os primeiros resultados?',
      answer: 'Os primeiros resultados aparecem já nas primeiras 2-3 semanas, principalmente em energia e disposição. Mudanças físicas visíveis começam a partir da 4ª semana, com resultados significativos em 8-12 semanas de acompanhamento consistente.'
    },
    {
      question: 'O que está incluído no plano nutricional?',
      answer: 'Cardápio personalizado baseado em suas preferências e restrições, lista de compras organizada, receitas práticas e saudáveis, orientações sobre timing de refeições e suplementação quando necessário.'
    },
    {
      question: 'Posso cancelar ou pausar meu plano?',
      answer: 'Sim, oferecemos total flexibilidade. Você pode pausar por até 30 dias ou cancelar com 7 dias de antecedência. Nosso objetivo é que você se sinta confortável e confiante em sua jornada.'
    },
    {
      question: 'Como funciona o suporte 24/7?',
      answer: 'Tenha acesso direto via WhatsApp para tirar dúvidas sobre treinos, alimentação ou motivação. Respondemos em até 2 horas durante dias úteis e até 4 horas nos finais de semana. Para emergências, temos plantão 24h.'
    },
    {
      question: 'O app funciona offline?',
      answer: 'Sim! Você pode baixar seus treinos e acessá-los mesmo sem internet. Quando reconectar, todos os dados são sincronizados automaticamente, garantindo que seu progresso nunca seja perdido.'
    },
    {
      question: 'Há garantia de resultados?',
      answer: 'Oferecemos garantia de 30 dias. Se não estiver satisfeita com o acompanhamento ou metodologia, devolvemos 100% do valor investido. Nosso compromisso é com sua transformação e satisfação.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-pink-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Dúvidas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esclarecemos as principais questões sobre nosso método, acompanhamento 
            e como podemos ajudar você a alcançar seus objetivos.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-pink-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-pink-500" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
            Falar com Especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
}
