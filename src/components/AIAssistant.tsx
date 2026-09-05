import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, X, Send, Mic, User, Bot, Settings as SettingsIcon, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, Modality } from "@google/genai";

type VoiceType = 'male' | 'female';

const avatars = {
  male: {
    key: 'oliver',
    url: 'https://picsum.photos/seed/oliver/100/100',
    voice: 'Puck'
  },
  female: {
    key: 'sophia',
    url: 'https://picsum.photos/seed/sophia/100/100',
    voice: 'Kore'
  }
};

export const AIAssistant: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'chat' | 'settings'>('chat');
  const [selectedVoice, setSelectedVoice] = useState<VoiceType>('female');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef(null);

  const assistant = avatars[selectedVoice];
  const hasSpokenWelcome = useRef(false);

  useEffect(() => {
    // Update welcome message when language changes, but only if it's the only message
    if (messages.length === 0 || (messages.length === 1 && messages[0].role === 'assistant')) {
      setMessages([{ role: 'assistant', content: t('ai_welcome') }]);
    }
  }, [t]);

  useEffect(() => {
    if (isOpen && messages.length === 1 && messages[0].role === 'assistant' && !hasSpokenWelcome.current) {
      speak(messages[0].content);
      hasSpokenWelcome.current = true;
    }
  }, [isOpen, messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, view]);

  const speak = async (text: string) => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say in ${i18n.language}: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: assistant.voice },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const binaryString = window.atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        // Convert PCM16 to Float32
        const pcm16 = new Int16Array(bytes.buffer);
        const float32 = new Float32Array(pcm16.length);
        for (let i = 0; i < pcm16.length; i++) {
          float32[i] = pcm16[i] / 32768;
        }

        const audioBuffer = audioContext.createBuffer(1, float32.length, 24000);
        audioBuffer.getChannelData(0).set(float32);

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
      }
    } catch (error) {
      console.error("TTS Error:", error);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: `You are ${t(assistant.key)}, a helpful payment assistant for PayMate AI. 
          Help users with billing, scheduling payments, and financial insights. 
          Keep responses concise and professional. Your voice profile is ${assistant.voice}.
          IMPORTANT: Always respond in the user's preferred language, which is currently: ${i18n.language}.`
        }
      });

      const assistantMessage = response.text || t('ai_error_process');
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
      speak(assistantMessage);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: t('ai_error_connect') }]);
    }
  };

  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert(t('ai_speech_unsupported'));
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    const langMap: Record<string, string> = {
      en: 'en-US',
      es: 'es-ES',
      zh: 'zh-CN',
      ja: 'ja-JP',
      ko: 'ko-KR',
      hi: 'hi-IN',
      ar: 'ar-SA',
      pt: 'pt-BR',
      de: 'de-DE',
      fr: 'fr-FR'
    };
    
    recognition.lang = langMap[i18n.language] || 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div ref={constraintsRef} className="absolute top-20 inset-x-0 bottom-0 pointer-events-none z-50 flex items-end justify-end p-4 sm:p-6 overflow-hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="pointer-events-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full sm:w-80 h-[calc(100dvh-6rem)] sm:h-[480px] max-h-[calc(100vh-4rem)] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 mb-20 sm:mb-24"
          >
            {/* Header - Drag Handle */}
            <motion.div 
              className="bg-slate-900 dark:bg-black text-white p-4 flex items-center justify-between cursor-move touch-none"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 pointer-events-none">
                {view === 'settings' && (
                  <button 
                    onClick={() => setView('chat')} 
                    className="p-1 hover:bg-white/10 rounded-lg"
                    aria-label={t('back_to_chat', { defaultValue: 'Back to chat' })}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                  <img src={assistant.url} alt={t(assistant.key)} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{view === 'settings' ? t('ai_assistant') : t(assistant.key)}</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">{t('ai_assistant')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pointer-events-auto">
                {view === 'chat' && (
                  <button 
                    onClick={() => setView('settings')} 
                    className="hover:bg-white/10 p-1 rounded-lg transition-colors" 
                    title={t('settings')}
                    aria-label={t('settings', { defaultValue: 'Settings' })}
                  >
                    <SettingsIcon className="w-5 h-5" />
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hover:bg-white/10 p-1 rounded-lg transition-colors" 
                  title={t('close')}
                  aria-label={t('close', { defaultValue: 'Close' })}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {view === 'chat' ? (
              <>
                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-emerald-600 text-white rounded-tr-none' 
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-tl-none'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl p-2">
                    <button 
                      onClick={toggleListening}
                      className={`p-2 rounded-lg transition-colors ${isListening ? 'bg-red-100 text-red-600' : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500'}`}
                      aria-label={t('voice_input', { defaultValue: 'Voice input' })}
                    >
                      <Mic className="w-5 h-5" />
                    </button>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder={t('ai_ask_placeholder')}
                      className="flex-1 bg-transparent border-none focus:ring-0 text-sm dark:text-white"
                    />
                    <button 
                      onClick={handleSend}
                      className="p-2 bg-slate-900 dark:bg-emerald-600 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-emerald-500 transition-colors"
                      aria-label={t('send_message', { defaultValue: 'Send message' })}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 p-6 space-y-6 bg-slate-50 dark:bg-slate-950 overflow-y-auto">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('voice_selection')}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {(['female', 'male'] as VoiceType[]).map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVoice(v)}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 ${
                          selectedVoice === v 
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' 
                            : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                          <img src={avatars[v].url} alt={t(avatars[v].key)} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="text-xs font-bold">{t(v === 'male' ? 'male_voice' : 'female_voice')}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('assistant_name')}</h4>
                  <input 
                    type="text" 
                    value={t(assistant.key)} 
                    readOnly
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm dark:text-white"
                  />
                  <p className="text-[10px] text-slate-400 italic">{t('assistant_name_desc')}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 bg-slate-900 dark:bg-emerald-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-slate-800 dark:hover:bg-emerald-500 transition-colors absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        aria-label={t('ai_assistant')}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};