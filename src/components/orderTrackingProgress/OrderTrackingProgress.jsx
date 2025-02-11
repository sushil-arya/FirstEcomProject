import { motion } from 'framer-motion';

const OrderTrackingProgress = ({ currentStatus = 'processing' }) => {
  const stages = [
    {
      id: 'ordered',
      label: 'Order Placed',
      date: 'March 21, 2024',
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  const currentStageIndex = stages.findIndex(stage => stage.id === currentStatus);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

        {/* Active Progress Bar */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-green-500 -translate-y-1/2"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStageIndex / (stages.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        {/* Stages */}
        <div className="relative flex justify-between">
          {stages.map((stage, index) => {
            const isCompleted = index <= currentStageIndex;
            const isCurrent = index === currentStageIndex;

            return (
              <div key={stage.id} className="flex flex-col items-center">
                {/* Icon Circle */}
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 
                    ${isCompleted ? 'bg-green-500 text-white' : 'bg-white border-2 border-gray-200 text-gray-400'}
                    ${isCurrent ? 'ring-4 ring-green-100' : ''}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {stage.icon}
                </motion.div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <div className={`font-medium ${isCompleted ? 'text-green-500' : 'text-gray-500'}`}>
                    {stage.label}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {stage.date}
                  </div>
                </div>

                {/* Check Mark for Completed Stages */}
                {isCompleted && index !== currentStageIndex && (
                  <motion.div
                    className="absolute top-0 right-0 -mr-2 -mt-2 bg-green-500 rounded-full p-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingProgress;