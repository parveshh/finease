"use client";

import { motion } from "framer-motion";

export default function Rain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut"}}
       className="absolute inset-0 w-full h-full"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 800"
      >
        <motion.g
          fill="none"
          strokeWidth="2"
          stroke="hsl(28, 100%, 71%)"
          strokeLinecap="square"
        >
          <motion.line
            x1="706.5"
            y1="400"
            x2="93.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(0, 400, 400)"
            opacity="0.86"
          ></motion.line>
          <motion.line
            x1="-24"
            y1="400"
            x2="824"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(8, 400, 400)"
            opacity="0.13"
          ></motion.line>
          <motion.line
            x1="269"
            y1="400"
            x2="531"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(16, 400, 400)"
            opacity="0.25"
          ></motion.line>
          <motion.line
            x1="495.5"
            y1="400"
            x2="304.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(24, 400, 400)"
            opacity="0.44"
          ></motion.line>
          <motion.line
            x1="623.5"
            y1="400"
            x2="176.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(32, 400, 400)"
            opacity="0.29"
          ></motion.line>
          <motion.line
            x1="338.5"
            y1="400"
            x2="461.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(40, 400, 400)"
            opacity="0.91"
          ></motion.line>
          <motion.line
            x1="638"
            y1="400"
            x2="162"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(48, 400, 400)"
            opacity="0.75"
          ></motion.line>
          <motion.line
            x1="-57.5"
            y1="400"
            x2="857.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatDelay: 1, repeatType: "loop"   }}
            transform="rotate(56, 400, 400)"
            opacity="0.44"
          ></motion.line>
          <motion.line
            x1="286.5"
            y1="400"
            x2="513.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(64, 400, 400)"
            opacity="0.48"
          ></motion.line>
          <motion.line
            x1="718"
            y1="400"
            x2="82"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(72, 400, 400)"
            opacity="0.92"
          ></motion.line>
          <motion.line
            x1="660"
            y1="400"
            x2="140"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(80, 400, 400)"
            opacity="0.83"
          ></motion.line>
          <motion.line
            x1="403.5"
            y1="400"
            x2="396.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(88, 400, 400)"
            opacity="0.24"
          ></motion.line>
          <motion.line
            x1="490"
            y1="400"
            x2="310"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(96, 400, 400)"
            opacity="0.66"
          ></motion.line>
          <motion.line
            x1="588.5"
            y1="400"
            x2="211.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(104, 400, 400)"
            opacity="0.15"
          ></motion.line>
          <motion.line
            x1="737"
            y1="400"
            x2="63"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(112, 400, 400)"
            opacity="0.82"
          ></motion.line>
          <motion.line
            x1="-69"
            y1="400"
            x2="869"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(120, 400, 400)"
            opacity="0.96"
          ></motion.line>
          <motion.line
            x1="-63"
            y1="400"
            x2="863"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(128, 400, 400)"
            opacity="0.76"
          ></motion.line>
          <motion.line
            x1="589"
            y1="400"
            x2="211"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(136, 400, 400)"
            opacity="0.23"
          ></motion.line>
          <motion.line
            x1="556.5"
            y1="400"
            x2="243.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(144, 400, 400)"
            opacity="0.43"
          ></motion.line>
          <motion.line
            x1="240"
            y1="400"
            x2="560"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(152, 400, 400)"
            opacity="0.54"
          ></motion.line>
          <motion.line
            x1="-116"
            y1="400"
            x2="916"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(160, 400, 400)"
            opacity="0.18"
          ></motion.line>
          <motion.line
            x1="375"
            y1="400"
            x2="425"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(168, 400, 400)"
            opacity="0.66"
          ></motion.line>
          <motion.line
            x1="52"
            y1="400"
            x2="748"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(176, 400, 400)"
            opacity="0.93"
          ></motion.line>
          <motion.line
            x1="569.5"
            y1="400"
            x2="230.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(184, 400, 400)"
            opacity="0.92"
          ></motion.line>
          <motion.line
            x1="313"
            y1="400"
            x2="487"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(192, 400, 400)"
            opacity="0.82"
          ></motion.line>
          <motion.line
            x1="603.5"
            y1="400"
            x2="196.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(200, 400, 400)"
            opacity="0.72"
          ></motion.line>
          <motion.line
            x1="249.5"
            y1="400"
            x2="550.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(208, 400, 400)"
            opacity="0.38"
          ></motion.line>
          <motion.line
            x1="543.5"
            y1="400"
            x2="256.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(216, 400, 400)"
            opacity="0.41"
          ></motion.line>
          <motion.line
            x1="336"
            y1="400"
            x2="464"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(224, 400, 400)"
            opacity="0.58"
          ></motion.line>
          <motion.line
            x1="556.5"
            y1="400"
            x2="243.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(232, 400, 400)"
            opacity="0.88"
          ></motion.line>
          <motion.line
            x1="492.5"
            y1="400"
            x2="307.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(240, 400, 400)"
            opacity="0.21"
          ></motion.line>
          <motion.line
            x1="190.5"
            y1="400"
            x2="609.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(248, 400, 400)"
            opacity="0.59"
          ></motion.line>
          <motion.line
            x1="702.5"
            y1="400"
            x2="97.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(256, 400, 400)"
            opacity="0.49"
          ></motion.line>
          <motion.line
            x1="89.5"
            y1="400"
            x2="710.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(264, 400, 400)"
            opacity="0.17"
          ></motion.line>
          <motion.line
            x1="129.5"
            y1="400"
            x2="670.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(272, 400, 400)"
            opacity="0.57"
          ></motion.line>
          <motion.line
            x1="37"
            y1="400"
            x2="763"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(280, 400, 400)"
            opacity="0.54"
          ></motion.line>
          <motion.line
            x1="-92"
            y1="400"
            x2="892"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(288, 400, 400)"
            opacity="0.28"
          ></motion.line>
          <motion.line
            x1="232"
            y1="400"
            x2="568"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(296, 400, 400)"
            opacity="0.95"
          ></motion.line>
          <motion.line
            x1="40"
            y1="400"
            x2="760"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(304, 400, 400)"
            opacity="0.95"
          ></motion.line>
          <motion.line
            x1="212"
            y1="400"
            x2="588"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(312, 400, 400)"
            opacity="0.94"
          ></motion.line>
          <motion.line
            x1="145.5"
            y1="400"
            x2="654.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(320, 400, 400)"
            opacity="0.27"
          ></motion.line>
          <motion.line
            x1="424"
            y1="400"
            x2="376"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(328, 400, 400)"
            opacity="0.18"
          ></motion.line>
          <motion.line
            x1="512.5"
            y1="400"
            x2="287.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(336, 400, 400)"
            opacity="0.17"
          ></motion.line>
          <motion.line
            x1="-81.5"
            y1="400"
            x2="881.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(344, 400, 400)"
            opacity="0.13"
          ></motion.line>
          <motion.line
            x1="422.5"
            y1="400"
            x2="377.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(352, 400, 400)"
            opacity="0.19"
          ></motion.line>
          <motion.line
            x1="471.5"
            y1="400"
            x2="328.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(360, 400, 400)"
            opacity="0.65"
          ></motion.line>
          <motion.line
            x1="220.5"
            y1="400"
            x2="579.5"
            y2="400"
            initial={{ strokeDashoffset: 200, opacity:0,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(368, 400, 400)"
            opacity="0.49"
          ></motion.line>
          <motion.line
            x1="580.5"
            y1="400"
            x2="219.5"
            y2="400"
            initial={{ strokeDashoffset: 200,  }}
            animate={{ strokeDashoffset: 0, opacity: [0.2, 0.49, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity,  repeatType: "loop"  , repeatDelay: 1 }}
            transform="rotate(376, 400, 400)"
            opacity="0.88"
          ></motion.line>
        </motion.g>
      </motion.svg>
    </div>
  );
}
