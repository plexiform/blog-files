import React from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

require("prismjs/themes/prism-twilight.css");
require("katex/dist/katex.min.css");
require('./src/styles/global.css');

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)