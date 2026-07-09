import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, 
  Truck, 
  ShieldCheck, 
  Leaf, 
  Star, 
  ChevronDown, 
  Phone, 
  Clock, 
  Lock, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Interfaces for structured data
interface Testimonial {
  name: string;
  location: string;
  initials: string;
  text: string;
  bgColor: string;
  textColor: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function App() {
  // States for FAQ interactive elements
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // State for sticky buy bar on scroll
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Dynamic countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 34,
    seconds: 12
  });

  // Track scroll position to show/hide sticky buy bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown timer logic (restarts or ticks down realistically)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer to keep the FOMO active and reliable
          return { hours: 2, minutes: 45, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Checkout URL
  const checkoutUrl = 'https://pay.kaiross.com.br/By5kJlF2d66Y';

  // Toggle FAQ items
  const toggleFaq = (id: number) => {
    setActiveFaq(prev => (prev === id ? null : id));
  };

  const testimonials: Testimonial[] = [
    {
      name: 'Ricardo M.',
      location: 'São Paulo - SP',
      initials: 'RM',
      text: '"Melhor investimento que fiz para meu café. O sabor é muito mais rico e parei de gastar com filtros de papel todo mês."',
      bgColor: 'bg-primary-fixed',
      textColor: 'text-on-primary-fixed'
    },
    {
      name: 'Luciana A.',
      location: 'Curitiba - PR',
      initials: 'LA',
      text: '"A qualidade do aço é impressionante. É super fácil de limpar, só passar uma água e tá pronto pra outra."',
      bgColor: 'bg-secondary-fixed',
      textColor: 'text-on-secondary-fixed'
    },
    {
      name: 'Felipe B.',
      location: 'Belo Horizonte - MG',
      initials: 'FB',
      text: '"Comprei pela sustentabilidade, mas fiquei pelo sabor. A filtragem é perfeita, não passa nem um grão de pó."',
      bgColor: 'bg-primary',
      textColor: 'text-pure-white'
    }
  ];

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: 'Como devo limpar o filtro?',
      answer: 'A limpeza é instantânea. Basta descartar o pó usado e enxaguar em água corrente. Para uma limpeza profunda ocasional, pode ser colocado na lava-louças.'
    },
    {
      id: 2,
      question: 'Serve em qualquer jarra ou xícara?',
      answer: 'Sim! A base do FILTROINOX foi desenhada universalmente para se apoiar com segurança em jarras de café padrão, garrafas térmicas e xícaras individuais.'
    },
    {
      id: 3,
      question: 'O material enferruja com o tempo?',
      answer: 'Não. Utilizamos Aço Inoxidável 304 de alta qualidade, resistente à corrosão e ao calor, garantindo anos de uso impecável.'
    }
  ];

  return (
    <div className="bg-surface-bright text-on-background font-body select-none overflow-x-hidden min-h-screen pb-12 md:pb-0">
      
      {/* Promotional Top Banner */}
      <div className="w-full bg-secondary text-on-secondary py-3 px-6 text-center font-bold relative overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 relative z-10">
          <Sparkles className="w-5 h-5 animate-pulse text-secondary-container" />
          <p className="text-sm md:text-base uppercase tracking-wider font-semibold">
            Oferta Exclusiva: 25% de Desconto + Frete Grátis Hoje!
          </p>
          <Sparkles className="w-5 h-5 animate-pulse text-secondary-container" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-container-lowest py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Hero text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
              Sustentabilidade Premium
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6 leading-tight tracking-tight">
              O Café Perfeito, Sem Desperdício e com Sabor Profissional.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed max-w-xl">
              O Filtro Reutilizável de Aço Inox que economiza seu dinheiro e preserva o meio ambiente enquanto entrega o sabor mais puro.
            </p>

            {/* Pricing Card */}
            <div className="flex flex-col gap-3 mb-8 bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 max-w-sm">
              <div className="flex items-baseline gap-2">
                <span className="text-on-surface-variant line-through text-sm">R$ 149,90</span>
                <span className="text-primary font-bold text-3xl">R$ 80,53</span>
              </div>
              <div className="flex items-center gap-2 text-success-green">
                <CheckCircle className="w-5 h-5 fill-current" />
                <span className="font-semibold text-sm">Em estoque - Envio Imediato</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a 
                href={checkoutUrl}
                className="bg-secondary-container text-on-secondary-container text-center px-8 py-4.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98] uppercase tracking-wide hover:bg-secondary hover:text-white flex items-center justify-center gap-2 text-base md:text-lg"
              >
                Comprar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center justify-center gap-3 px-5 py-4 border border-outline-variant rounded-xl bg-white/50">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-xs md:text-sm font-semibold text-on-surface-variant">
                  Frete Grátis para todo Brasil
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hero image container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-secondary-fixed opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary-fixed opacity-10 rounded-full blur-3xl"></div>
            
            {/* Main Product Image */}
            <img 
              id="hero-product-image"
              alt="FILTROINOX Filter" 
              referrerPolicy="no-referrer"
              className="w-full max-w-md h-auto object-contain relative z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 ease-out" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLskz6KTS6yJol8YG7oP7L1PK1Pa3O8za5xWqcZeQFJvLg5lFf6yG2yE-0P-RcS_gDot3n_7UqLvZxnTTmkIjJ25TKAMMRUlkjuomq4nAGOVvDUDViL8Eu8000lGVc2Fc6fHdd1F4rAOo6Zwzcbggs6FWgFaeH3ZllFO-AKboEdpTYyzIFynqPaLlhaViZyACaFQhbjZ1ivQhxUfT7oxSp1mdMIZLq6Asemh3uCAXRb1Hcao_mq_TdfY0ek"
            />
          </motion.div>

        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-6 border-y border-outline/30 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-6">
          <div className="flex items-center gap-3 text-pure-white/90">
            <ShieldCheck className="w-5 h-5 text-secondary-container" />
            <span className="font-semibold tracking-wider text-xs md:text-sm uppercase">Compra Segura</span>
          </div>
          <div className="flex items-center gap-3 text-pure-white/90">
            <Leaf className="w-5 h-5 text-success-green" />
            <span className="font-semibold tracking-wider text-xs md:text-sm uppercase">Ecológico</span>
          </div>
          <div className="flex items-center gap-3 text-pure-white/90">
            <Lock className="w-5 h-5 text-secondary-container" />
            <span className="font-semibold tracking-wider text-xs md:text-sm uppercase">Parcelamento s/ Juros</span>
          </div>
          <div className="flex items-center gap-3 text-pure-white/90">
            <RotateCcw className="w-5 h-5 text-secondary-container" />
            <span className="font-semibold tracking-wider text-xs md:text-sm uppercase">Qualidade Pro</span>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-surface-bright" id="beneficios">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">
              Por que escolher o FILTROINOX?
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Sabor Puro */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-pure-white p-6 rounded-2xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-surface-container-low">
                <img 
                  alt="Sabor Puro" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu1ALr_hHuT11gczdiUAxQUJIQEN8G0zk6wAlI3OtAf8sCoB6yk4fuDgw0bhbg71DCJYHgNIuMShKlssHZeLgARASP2K1LhyT_S1MwHF9mSO_yDaZyOt_-mooEKW_eFiSAA3u_QHWkyYgQekrtoRJxeFzwklsTUyu8s9-y2llD9TA669AWj_LIbgci7ZOs4KFshzNs-KNTsVnLp3ebcb-dZjYe-Vq8H1Z6O1uZOVqRbNW1dFlhizh4VkjoC"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-primary">
                <span className="material-symbols-outlined text-secondary text-2xl">coffee</span>
                <h3 className="text-xl font-bold">Sabor Puro</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Sinta a nota verdadeira de cada grão. Sem interferência química de filtros de papel branqueados.
              </p>
            </motion.div>

            {/* Durabilidade */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-pure-white p-6 rounded-2xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-surface-container-low">
                <img 
                  alt="Durabilidade Excepcional" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtInrWutbKx6OTKFY3QAZe8wV895E3v0dmu1J6kfSbdTJVvcuGTewr8u1h95NrWGtU3BmpDpF-7bfFu1B6Q5uiVMVZrx5-FAJQRdAG9FmGJpstpqeCob0l03hV-8p-A1dVCZUFvCYvDD6BK1isM-LangFYRW6oljXyOMaXw3sNHIfYcrI9sioC_PBG09YzIqoDaxUCpSf_TOBvoHPzfi0HY4u5vIMAfXg_p3TZDYgzogFc-8N4XPa9lv52t"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-primary">
                <span className="material-symbols-outlined text-secondary text-2xl">shield</span>
                <h3 className="text-xl font-bold">Durabilidade</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Construído em Aço Inox 304 de grau cirúrgico. Um investimento para a vida toda, sem ferrugem.
              </p>
            </motion.div>

            {/* Sustentabilidade */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-pure-white p-6 rounded-2xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-surface-container-low">
                <img 
                  alt="Sustentabilidade Inteligente" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsbXOe3iC_nXyF2nNvK_cosVcsoSrE-QjHfRQdvgP-67SSHEDuyJwnV22vOKw9lvJ6X4upXx-bIZn1eckO1jp3bdG-O1aZlA3abaLp6rRTWEbMOfgC7sO6uXX3VQvkEI8vdZOMU2n3ns-dgqmNF-uqIFlIqvR3KWrcr1QOpqiZA7F1Nl1g8QRfEkxmVwMTJu-y58C8fM0yPJ6bGiXjTgHlN-0L3UOAnN193nfeWHE5oY97pbM8k0CPmRlg"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-primary">
                <span className="material-symbols-outlined text-secondary text-2xl">recycling</span>
                <h3 className="text-xl font-bold">Sustentabilidade</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Elimine centenas de filtros de papel anualmente. Reduza sua pegada ambiental com elegância.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Specs / Precision Engineering Section */}
      <section className="py-16 md:py-24 bg-primary text-pure-white" id="especificacoes">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Engenharia de Precisão</h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Adquira hoje o FILTROINOX pelo valor promocional.
            </p>
            
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="bg-secondary-container text-on-secondary-container p-1.5 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary fill-transparent" />
                </div>
                <span className="text-base md:text-lg">Dupla camada de filtragem ultra-fina</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-secondary-container text-on-secondary-container p-1.5 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary fill-transparent" />
                </div>
                <span className="text-base md:text-lg">Base universal compatível com canecas e jarras</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-secondary-container text-on-secondary-container p-1.5 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary fill-transparent" />
                </div>
                <span className="text-base md:text-lg">Fácil limpeza (enxágue em segundos)</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-container relative">
              <img 
                alt="Specs Detail FILTROINOX" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLtz1Sb2F0iVeBh9WzuRGvBQZB93McXgf8qd11Qvx3KYOjDlA18aNTKLnibNvAP0mTy_4dMyxWlvmatdYdLwdRZQmtxcLbSuAwv8rarxtlMCQkgclkLMGC0RCfKoYaBkmQPtIxOKfXbzNAtg4hWGmeCx3GCnoJU7GIoh_vz3_Dwio09baZVUPKgLCYseHMLweexrDFdeG-J5jNXVHVezCGfnkW9Br48yCa3CLvO-Jr_R9Y6J2BbcLqh6ENQ"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Special Offer Section (Limited Offer Card) */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center bg-surface-container-low py-16 px-8 md:p-20 rounded-[2.5rem] border border-outline-variant/40 relative overflow-hidden shadow-lg">
          
          {/* Offer Banner Badge */}
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-error text-on-error px-4 py-2 font-bold text-xs uppercase rounded-full animate-pulse tracking-widest shadow">
              Oferta Limitada
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">
            Transforme sua Rotina Matinal
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant mb-8">
            Adquira hoje o FILTROINOX pelo valor promocional.
          </p>

          <div className="bg-pure-white inline-flex flex-col items-center px-8 py-5 rounded-2xl shadow-sm border border-outline-variant/40 mb-8">
            <div className="text-4xl font-bold text-primary mb-1">R$ 80,53</div>
            <div className="text-success-green font-bold text-xs uppercase tracking-wider">
              Frete Grátis Incluso
            </div>
          </div>

          {/* Persistent Urgency Banner instead of the deleted Sweepstakes Bonus */}
          <div className="mb-10 max-w-md mx-auto bg-white/70 backdrop-blur p-4 rounded-xl border border-secondary/20 shadow-sm flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-secondary font-bold">
              <Clock className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-sm tracking-wider uppercase">ESSA OFERTA EXPIRA EM:</span>
            </div>
            <div className="flex gap-2 text-primary font-mono text-xl font-bold">
              <span className="bg-primary text-white py-1 px-2 rounded">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span className="py-1">:</span>
              <span className="bg-primary text-white py-1 px-2 rounded">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span className="py-1">:</span>
              <span className="bg-secondary text-white py-1 px-2 rounded">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Garantia de 30 dias com devolução 100% grátis.</p>
          </div>

          {/* Updated CTA Button */}
          <a 
            href={checkoutUrl}
            className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-xl text-lg md:text-xl font-bold shadow-xl hover:scale-105 hover:bg-secondary hover:text-white transition-all block w-full md:w-max mx-auto uppercase tracking-wide"
          >
            Comprar Agora
          </a>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-surface-bright border-t border-outline-variant/30" id="avaliacoes">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl text-primary font-bold mb-3">
                O que dizem nossos clientes
              </h2>
              <div className="flex items-center gap-1 text-secondary-container">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-secondary" />
                ))}
                <span className="material-symbols-outlined text-secondary text-xl">star_half</span>
                <span className="text-on-surface ml-3 font-bold text-lg">4.94 / 5</span>
              </div>
            </div>
            <div className="text-on-surface-variant font-medium text-sm md:text-base">
              + de 1.200 clientes satisfeitos em todo o Brasil
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-pure-white p-8 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col justify-between"
              >
                <p className="italic text-on-surface leading-relaxed text-base mb-6">
                  {item.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 ${item.bgColor} ${item.textColor} rounded-full flex items-center justify-center font-bold text-sm shadow-inner`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{item.name}</div>
                    <div className="text-xs text-on-surface-variant font-medium">{item.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section with interactive accordion */}
      <section className="py-16 md:py-24" id="duvidas">
        <div className="max-w-3xl mx-auto px-6">
          
          <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-pure-white border border-outline-variant/50 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-primary hover:bg-surface-container-lowest transition-colors gap-4"
                  >
                    <span className="text-base md:text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary/70"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 text-on-surface-variant text-base border-t border-outline-variant/30 pt-3 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-pure-white pt-16 pb-12 mt-12 border-t border-outline/30">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-outline/30 gap-8">
            <div>
              <div className="text-2xl font-bold tracking-wider mb-2">FILTROINOX</div>
              <p className="text-sm opacity-70">Excelência em Preparo Sustentável.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              <a href="#" className="text-sm text-outline-variant hover:text-secondary transition-colors font-medium">Política de Privacidade</a>
              <a href="#" className="text-sm text-outline-variant hover:text-secondary transition-colors font-medium">Termos de Serviço</a>
              <a href="#" className="text-sm text-outline-variant hover:text-secondary transition-colors font-medium">Informações de Envio</a>
              <a href="#" className="text-sm text-outline-variant hover:text-secondary transition-colors font-medium">Fale Conosco</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 bg-primary-container py-3 px-5 rounded-xl border border-on-primary-container/20">
              <Phone className="w-5 h-5 text-secondary-container" />
              <span className="font-bold text-sm md:text-base text-white">WhatsApp: (19) 99933-0462</span>
            </div>
            <div className="text-xs md:text-sm opacity-60 text-center md:text-right">
              © 2026 FILTROINOX. Todos os direitos reservados.
            </div>
          </div>

        </div>
      </footer>

      {/* Desktop Sticky Quick-Buy Banner */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-outline-variant/50 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] py-4 px-6 z-50"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              
              <div className="flex items-center gap-3">
                <img 
                  alt="FILTROINOX Mini" 
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 object-contain bg-surface-container-low rounded p-1 hidden sm:block"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLskz6KTS6yJol8YG7oP7L1PK1Pa3O8za5xWqcZeQFJvLg5lFf6yG2yE-0P-RcS_gDot3n_7UqLvZxnTTmkIjJ25TKAMMRUlkjuomq4nAGOVvDUDViL8Eu8000lGVc2Fc6fHdd1F4rAOo6Zwzcbggs6FWgFaeH3ZllFO-AKboEdpTYyzIFynqPaLlhaViZyACaFQhbjZ1ivQhxUfT7oxSp1mdMIZLq6Asemh3uCAXRb1Hcao_mq_TdfY0ek"
                />
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base">FILTROINOX</h4>
                  <p className="text-xs text-success-green font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-success-green animate-ping"></span>
                    Frete Grátis Ativo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-on-surface-variant line-through block leading-none">R$ 149,90</span>
                  <span className="text-primary font-bold text-lg md:text-xl">R$ 80,53</span>
                </div>
                <a 
                  href={checkoutUrl}
                  className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-bold text-sm hover:bg-secondary hover:text-white transition-all uppercase tracking-wide shadow active:scale-95"
                >
                  Comprar Agora
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
