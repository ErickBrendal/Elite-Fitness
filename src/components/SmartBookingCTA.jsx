import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SmartBookingCTA() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');

  const availableHours = [
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '17:00',
    '18:00',
    '19:00'
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedHour) {
      alert('Escolha uma data e horário para continuar.');
      return;
    }
    const message = `Olá Brenda! Gostaria de agendar uma sessão para ${selectedDate} às ${selectedHour}.`;
    const whatsappUrl = `https://wa.me/5511954004713?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-b from-pink-600 via-pink-800 to-black py-16 px-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Reserve Sua Sessão Exclusiva
        </h2>
        <p className="text-lg text-pink-100 mb-10">
          Agendamento inteligente e rápido para garantir seu horário premium com
          a personal.
        </p>

        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
          {/* Date Picker */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-left">Escolha a data:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-black font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Hour Picker */}
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-left">
              Escolha o horário:
            </label>
            <select
              value={selectedHour}
              onChange={(e) => setSelectedHour(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-black font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Selecione um horário</option>
              {availableHours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleBooking}
            className="w-full px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg transition-all duration-300"
          >
            CONFIRMAR VIA WHATSAPP
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-sm text-pink-200"
        >
          ✨ Vagas limitadas • Confirmação imediata • Cancelamento flexível
        </motion.p>
      </motion.div>
    </section>
  );
}
