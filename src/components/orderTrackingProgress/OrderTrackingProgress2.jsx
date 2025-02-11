import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderTrackingProgress2 = ({ 
  currentStatus = 'processing',
  orderNumber = "ORD-2024-3847",
  carrier = "FedEx",
  trackingNumber = "FX123456789"
}) => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stages = [
    {
      id: 'ordered',
      label: 'Order Placed',
      date: 'March 21, 2024',
      time: '14:30',
      estimatedDate: null,
      location: 'Online',
      details: 'Order confirmed and payment received',
      subStages: [
        { time: '14:30', text: 'Payment confirmed' },
        { time: '14:31', text: 'Order confirmation email sent' }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 'processing',
      label: 'Processing',
      date: 'March 22, 2024',
      time: '09:15',
      estimatedDate: 'March 22, 2024',
      location: 'Regional Warehouse',
      details: 'Order is being prepared for shipping',
      subStages: [
        { time: '09:15', text: 'Order picked from warehouse' },
        { time: '10:30', text: 'Quality check completed' },
        { time: '11:45', text: 'Package prepared for shipping' }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'shipped',
      label: 'Shipped',
      date: 'March 23, 2024',
      time: '08:00',
      estimatedDate: 'March 23, 2024',
      location: 'Distribution Center',
      details: 'Package is in transit',
      subStages: [
        { time: '08:00', text: 'Picked up by carrier' },
        { time: '10:15', text: 'Departed sorting facility' },
        { time: '15:30', text: 'In transit to destination' }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      id: 'delivered',
      label: 'Delivered',
      date: 'March 24, 2024',
      time: '16:00',
      estimatedDate: 'March 24, 2024',
      location: 'Destination Address',
      details: 'Package has been delivered',
      subStages: [
        { time: '14:30', text: 'Out for delivery' },
        { time: '16:00', text: 'Delivered to recipient' }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  const currentStageIndex = stages.findIndex(stage => stage.id === currentStatus);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Order Info Banner */}
      <div className="bg-gray-50 rounded-lg p-4 mb-8">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div>
            <span className="text-gray-500">Order Number:</span>
            <span className="ml-2 font-medium">{orderNumber}</span>
          </div>
          <div>
            <span className="text-gray-500">Carrier:</span>
            <span className="ml-2 font-medium">{carrier}</span>
          </div>
          <div>
            <span className="text-gray-500">Tracking Number:</span>
            <span className="ml-2 font-medium">{trackingNumber}</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />

        {/* Active Progress Bar */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-green-500 -translate-y-1/2 hidden md:block"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStageIndex / (stages.length - 1)) * 100}%` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Stages */}
        <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          {stages.map((stage, index) => {
            const isCompleted = index <= currentStageIndex;
            const isCurrent = index === currentStageIndex;

            return (
              <div key={stage.id} className="flex md:flex-col items-start md:items-center gap-4 md:gap-0">
                {/* Mobile Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden">
                  {isCompleted && (
                    <motion.div
                      className="absolute left-0 top-0 w-full bg-green-500"
                      initial={{ height: '0%' }}
                      animate={{ height: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>

                {/* Icon Circle */}
                <motion.button
                  onClick={() => {
                    setSelectedStage(stage);
                    setIsModalOpen(true);
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 
                    ${isCompleted ? 'bg-green-500 text-white' : 'bg-white border-2 border-gray-200 text-gray-400'}
                    ${isCurrent ? 'ring-4 ring-green-100' : ''}
                    hover:scale-110 transition-transform duration-200`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stage.icon}
                </motion.button>

                {/* Label and Details */}
                <div className="md:mt-4 text-left md:text-center flex-1 md:flex-initial">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                  >
                    <div className={`font-medium ${isCompleted ? 'text-green-500' : 'text-gray-500'}`}>
                      {stage.label}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stage.date}
                    </div>
                    {stage.estimatedDate && (
                      <div className="text-sm text-gray-400 mt-1">
                        Est: {stage.estimatedDate}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedStage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">{selectedStage.label}</h3>
                  <p className="text-gray-500">{selectedStage.location}</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {selectedStage.subStages.map((subStage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-sm text-gray-500 w-16">{subStage.time}</div>
                    <div className="flex-1">{subStage.text}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderTrackingProgress2;