import { CorrectAnswersProvider } from '../CorrectAnswersContext.js';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CorrectAnswersProvider>
      <Component {...pageProps} />
    </CorrectAnswersProvider>
  );
}

