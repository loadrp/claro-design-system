"use client";

import { useState } from "react";
import {
  ClaroBanner,
  ClaroButton,
  ClaroCard,
  ClaroCardContent,
  ClaroCardFooter,
  ClaroCardHeader,
  ClaroTag,
  ClaroPrice,
  ClaroAccordion,
  ClaroDivider,
  ClaroLink,
  ClaroHeading,
  ClaroText,
  ClaroToggle,
  ClaroDrawer,
} from "@/components/claro";

const planos = [
  {
    id: "350",
    name: "350 Mega",
    tag: null,
    download: "350",
    upload: "175",
    beneficios: [
      "Globoplay incluso",
      "Conecta até 10 dispositivos",
      "Wi-Fi Plus Grátis",
    ],
    precoDebito: "84",
    precoDebitoCents: "90",
    precoBoleto: "89",
    precoBoletoCents: "90",
    destaque: false,
  },
  {
    id: "500",
    name: "500 Mega",
    tag: "MAIS ESCOLHIDO",
    tagVariant: "highlight" as const,
    download: "500",
    upload: "250",
    beneficios: [
      "Globoplay incluso",
      "Wi-Fi Plus Grátis",
      "Instalação Grátis",
    ],
    precoPromoInt: "54",
    precoPromoCents: "90",
    precoDebito: "94",
    precoDebitoCents: "90",
    precoBoleto: "99",
    precoBoletoCents: "90",
    notaPromo: "Por 6 meses. Após R$ 94,90/mês",
    destaque: true,
  },
  {
    id: "750",
    name: "750 Mega",
    tag: null,
    download: "750",
    upload: "375",
    beneficios: [
      "Globoplay incluso",
      "Wi-Fi 6 Grátis",
      "Instalação Grátis",
    ],
    precoDebito: "149",
    precoDebitoCents: "90",
    precoBoleto: "149",
    precoBoletoCents: "90",
    destaque: false,
  },
  {
    id: "1giga",
    name: "1 Giga",
    tag: "MAIS COMPLETO",
    tagVariant: "primary" as const,
    download: "1000",
    upload: "500",
    beneficios: [
      "Globoplay incluso",
      "Wi-Fi 6 Grátis",
      "Ponto Ultra + Instalação Grátis",
    ],
    precoDebito: "194",
    precoDebitoCents: "90",
    precoBoleto: "199",
    precoBoletoCents: "90",
    destaque: false,
  },
];

const beneficios = [
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--color-brand-primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
      </svg>
    ),
    title: "Wi-Fi de Alta Performance",
    desc: "Wi-Fi Plus ou Wi-Fi 6 incluso para navegação sem interrupções em todos os cômodos.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--color-brand-primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "McAfee Proteção Total",
    desc: "Proteja todos os dispositivos da sua família contra ameaças digitais.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--color-brand-primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    title: "Globoplay Incluso",
    desc: "Assista a conteúdos exclusivos da TV Globo com até 2 acessos simultâneos.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--color-brand-primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Skeelo Audiobooks",
    desc: "Milhares de audiobooks e resumos de livros para você ouvir quando quiser.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--color-brand-primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Ponto Ultra (1 Giga)",
    desc: "Conexão via cabo de rede para máxima estabilidade em jogos e streams.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--color-brand-primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Claro Video",
    desc: "Canais ao vivo e conteúdo on demand gratuito para assinantes Claro.",
  },
];

const faqItems = [
  {
    id: "1",
    title: "Qual o prazo de fidelidade?",
    content:
      "Os planos têm fidelidade de 12 meses. Em caso de cancelamento antecipado, há multa de R$ 300,00. Sem fidelidade, a taxa de instalação é de R$ 540,00 (em até 6x no cartão).",
  },
  {
    id: "2",
    title: "O que está incluso no Globoplay?",
    content:
      "O Globoplay permite acesso a conteúdos exclusivos da TV Globo, novelas, séries, programas de variedades e esportes. Inclui até 2 acessos simultâneos.",
  },
  {
    id: "3",
    title: "Quais são os serviços digitais inclusos?",
    content:
      "Além do Globoplay, você tem acesso ao Claro Video, McAfee Proteção Total, Skeelo Audiobooks, Claro Banca e Busuu (idiomas).",
  },
  {
    id: "4",
    title: "Qual a diferença entre Wi-Fi Plus e Wi-Fi 6?",
    content:
      "O Wi-Fi Plus oferece boa cobertura para residências pequenas. O Wi-Fi 6 é a tecnologia mais recente, com maior velocidade, capacidade e cobertura para residências maiores e mais dispositivos conectados.",
  },
  {
    id: "5",
    title: "Como funciona o Ponto Ultra?",
    content:
      "O Ponto Ultra é uma conexão via cabo de rede (Ethernet) que oferece máxima estabilidade e velocidade, ideal para jogos online, streams em 4K e home office. Disponível no plano de 1 Giga.",
  },
];

export default function PlanosPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPlano, setSelectedPlano] = useState<any>(null);

  const openDrawer = (plano: any) => {
    setSelectedPlano(plano);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F4F4F4]">
      {/* Header fixo */}
      <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-neutral-medium)] shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span
                className="text-3xl font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-family-highlight), sans-serif",
                  color: "#DA291C",
                }}
              >
                Claro
              </span>
            </div>
            <a
              href="tel:08001794545"
              className="hidden sm:inline-flex items-center gap-2 bg-[#DA291C] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#B41E13] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              0800 179 4545
            </a>
          </div>
        </div>
      </header>

      {/* Hero Carousel — Full Width */}
      <section className="w-full">
        <ClaroBanner
          slides={[
            {
              id: "1",
              type: "custom",
              imageSrc:
                "https://www.claro.com.br/files/104379/1920x420/3faccb15f9/img-banner-custom-relampago-novo-kv-350-500mega-desk-1.jpg?sq=100",
              imageAlt: "600 Mega com Globoplay incluso",
              title: "600 Mega com Globoplay incluso",
              subtitle: "+ Wi-Fi grátis",
              fullPrice: "99,90",
              priceInteger: "49",
              priceCents: "90",
              pricePeriod: "/mês",
              priceNote: "Por 6 meses. Após R$ 99,90 /mês",
              ctaText: "Assinar",
              href: "#planos",
            },
            {
              id: "2",
              type: "custom",
              imageSrc:
                "https://www.claro.com.br/files/104379/1920x420/6b8663ba0d/img-banner-custom-basic-torcida-gm-md-desk.jpg?sq=100",
              imageAlt: "600 Mega + Pós 60GB",
              title: "600 Mega + Pós 60GB",
              subtitle: "com Globoplay incluso e Passaporte Américas",
              subtitleColor: "highlight",
              fullPrice: "129,90",
              priceInteger: "99",
              priceCents: "90",
              pricePeriod: "/mês",
              priceNote: "Por 6 meses. Após R$ 129,90 /mês",
              ctaText: "Assinar",
              href: "#planos",
            },
            {
              id: "3",
              type: "basic",
              imageSrc:
                "https://www.claro.com.br/files/104379/1920x420/db57ccec0d/img-banner-basic-torcida-wi-fi-saiba-mais-desk.jpg?sq=100",
              imageAlt: "Wi-Fi Saiba Mais",
              href: "#planos",
            },
            {
              id: "4",
              type: "basic",
              imageSrc:
                "https://www.claro.com.br/files/104379/1920x420/9ccf2ab181/img-banner-basic-torcida-streamings-desk-2-2-1.jpg?sq=75",
              imageAlt: "Box Claro tv+ com 6 streamings inclusos",
              href: "#planos",
            },
            {
              id: "5",
              type: "basic",
              imageSrc:
                "https://www.claro.com.br/files/104379/1920x420/3b76c5ae0e/site-controle-40gb-maes-banner-desk.jpg?sq=75",
              imageAlt: "Controle 40GB Mês das Mães",
              href: "#planos",
            },
          ]}
        />
      </section>

      {/* Planos */}
      <section id="planos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1F1D1D]"
            style={{ fontFamily: "var(--font-family-highlight), sans-serif" }}
          >
            Internet Banda Larga com Globoplay Incluso
          </h2>
          <p className="mt-3 text-lg text-[#525252] max-w-2xl mx-auto">
            Escolha o plano ideal para sua casa e aproveite Wi-Fi grátis, instalação grátis e velocidades de até 1 Giga.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {planos.map((plano) => (
            <ClaroCard
              key={plano.id}
              className={`flex flex-col h-full transition-shadow hover:shadow-lg ${
                plano.destaque
                  ? "ring-2 ring-[var(--color-support-highlight-medium)] relative"
                  : ""
              }`}
            >
              {plano.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <ClaroTag variant="highlight" size="sm">
                    MAIS ESCOLHIDO
                  </ClaroTag>
                </div>
              )}
              {plano.tag && !plano.destaque && (
                <ClaroCardHeader>
                  <ClaroTag variant={plano.tagVariant} size="sm">
                    {plano.tag}
                  </ClaroTag>
                </ClaroCardHeader>
              )}
              <ClaroCardContent className="flex-1 pt-6">
                <h3
                  className="text-2xl font-bold text-[#1F1D1D]"
                  style={{ fontFamily: "var(--font-family-highlight), sans-serif" }}
                >
                  {plano.name}
                </h3>
                <p className="mt-1 text-sm text-[#525252]">
                  {plano.download} Mbps / {plano.upload} Mbps
                </p>
                <ul className="mt-4 space-y-2">
                  {plano.beneficios.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#525252] flex items-start gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-[var(--color-support-success-dark)] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </ClaroCardContent>
              <ClaroCardFooter className="flex flex-col gap-3">
                {plano.notaPromo && (
                  <>
                    <p className="text-xs text-[#525252]">
                      De: <s>R$ {plano.precoBoleto},{plano.precoBoletoCents}</s>
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold text-[#1F1D1D]">R$</span>
                      <span
                        className="text-4xl font-bold text-[#1F1D1D] leading-none"
                        style={{ fontFamily: "var(--font-family-highlight), sans-serif" }}
                      >
                        {plano.precoPromoInt}
                      </span>
                      <span className="text-lg font-bold text-[#1F1D1D]">
                        ,{plano.precoPromoCents}
                      </span>
                    </div>
                    <p className="text-xs text-[#525252]">{plano.notaPromo}</p>
                  </>
                )}
                {!plano.notaPromo && (
                  <ClaroPrice
                    integer={plano.precoDebito}
                    cents={plano.precoDebitoCents}
                    period="/mês"
                    size="md"
                  />
                )}
                <ClaroButton
                  block
                  variant={plano.destaque ? "primary" : "secondary"}
                >
                  Assinar
                </ClaroButton>
                <button
                  onClick={() => openDrawer(plano)}
                  className="text-xs text-center text-[var(--color-brand-primary-medium)] underline hover:no-underline"
                >
                  Mais detalhes
                </button>
              </ClaroCardFooter>
            </ClaroCard>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#525252]">
          Preços no débito em conta ou fatura digital. No boleto, acrescente R$ 5,00. Consulte disponibilidade e oferta para a sua região.
        </p>
      </section>

      {/* Benefícios */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1F1D1D] text-center mb-12"
            style={{ fontFamily: "var(--font-family-highlight), sans-serif" }}
          >
            Tudo isso você leva de brinde
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8F8F8] hover:shadow-md transition-shadow"
              >
                {b.icon}
                <h3 className="mt-4 text-lg font-bold text-[#1F1D1D]">{b.title}</h3>
                <p className="mt-2 text-sm text-[#525252]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toggle */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-4">
          <ClaroToggle label="Receber ofertas por e-mail" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1F1D1D] text-center mb-8"
          style={{ fontFamily: "var(--font-family-highlight), sans-serif" }}
        >
          Perguntas frequentes
        </h2>
        <ClaroAccordion items={faqItems} />
      </section>

      {/* Footer */}
      <footer className="bg-[#1F1D1D] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold mb-4">Central de Vendas</h3>
              <a
                href="tel:08001794545"
                className="text-2xl font-bold text-white hover:text-[var(--color-brand-primary-light)] transition-colors"
              >
                0800 179 4545
              </a>
              <p className="mt-2 text-sm text-white/60">
                Atendimento para novas assinaturas
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Suporte ao Cliente</h3>
              <p className="text-2xl font-bold">106 21</p>
              <p className="mt-2 text-sm text-white/60">
                Para clientes Claro
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Sobre</h3>
              <p className="text-sm text-white/60">
                Este é um projeto de demonstração do Design System Claro. Não é o site oficial.
              </p>
            </div>
          </div>
          <ClaroDivider className="my-8 bg-white/20" />
          <p className="text-center text-xs text-white/40">
            © 2025 Claro Design System — Projeto de demonstração. Preços e condições sujeitos a alteração.
          </p>
        </div>
      </footer>

      {/* Drawer */}
      <ClaroDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={selectedPlano?.name}
        sections={[
          {
            id: "internet",
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
              </svg>
            ),
            title: selectedPlano?.name || "Plano",
            content: (
              <div className="space-y-2">
                <p className="text-sm text-[#525252]">
                  <strong>Velocidade:</strong> {selectedPlano?.download} Mbps download /{" "}
                  {selectedPlano?.upload} Mbps upload
                </p>
                <ul className="space-y-1">
                  {selectedPlano?.beneficios?.map((b: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#525252]">
                      <svg className="w-4 h-4 text-[var(--color-support-success-dark)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            id: "regulamentos",
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ),
            title: "Regulamentos",
            content: (
              <div className="space-y-2 text-sm text-[#525252]">
                <p>• Fidelidade de 12 meses.</p>
                <p>• Multa de R$ 300,00 em caso de cancelamento antecipado.</p>
                <p>• Sem fidelidade: taxa de instalação de R$ 540,00.</p>
                <p>• Preços no débito em conta ou fatura digital.</p>
                <p>• No boleto: acrescente R$ 5,00.</p>
              </div>
            ),
          },
        ]}
        footer={
          selectedPlano && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#525252]">Valor mensal</span>
                <div className="text-right">
                  {selectedPlano.notaPromo && (
                    <p className="text-xs text-[#525252]">
                      De: <s>R$ {selectedPlano.precoBoleto},{selectedPlano.precoBoletoCents}</s>
                    </p>
                  )}
                  <ClaroPrice
                    integer={selectedPlano.precoPromoInt || selectedPlano.precoDebito}
                    cents={selectedPlano.precoPromoCents || selectedPlano.precoDebitoCents}
                    period="/mês"
                    size="md"
                  />
                </div>
              </div>
              <ClaroButton block>Assinar</ClaroButton>
            </div>
          )
        }
      />
    </main>
  );
}
