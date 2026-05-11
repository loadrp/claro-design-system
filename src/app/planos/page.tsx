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
  ClaroTooltip,
  ClaroToggle,
} from "@/components/claro";

const planosInternet = [
  {
    id: "350",
    tag: "MAIS ECONÔMICO",
    tagVariant: "success" as const,
    name: "350 Mega",
    description: "Com Globoplay Incluso. Conecta até 10 dispositivos ao mesmo tempo.",
    fullPrice: "89,90",
    priceInteger: "54",
    priceCents: "90",
    features: ["Wi-Fi e instalação grátis", "Conexão estável para streaming"],
  },
  {
    id: "500",
    tag: "MAIS VENDIDO",
    tagVariant: "highlight" as const,
    name: "500 Mega",
    description: "Globoplay incluso Grátis. Wi-Fi e instalação grátis.",
    fullPrice: "129,90",
    priceInteger: "89",
    priceCents: "90",
    features: ["Wi-Fi 6 de alta performance", "Ideal para home office e gaming"],
  },
  {
    id: "1giga",
    tag: "MAIS COMPLETO",
    tagVariant: "primary" as const,
    name: "1 GIGA",
    description: "Globoplay incluso Grátis. Conexão mais rápida com Wi-Fi 6 grátis.",
    fullPrice: "199,90",
    priceInteger: "129",
    priceCents: "90",
    features: ["Wi-Fi 6 grátis", "Ponto Ultra e instalação grátis"],
  },
];

const planosTV = [
  {
    id: "tv-box",
    name: "Claro TV + Box",
    features: ["Globoplay", "Netflix (Padrão com anúncios)", "MAX", "Apple TV", "Disney+", "Amazon Prime"],
    priceInteger: "129",
    priceCents: "90",
  },
  {
    id: "tv-cabo",
    name: "Claro TV + Box Cabo",
    features: ["Globoplay", "Netflix (Padrão com anúncios)", "MAX", "Apple TV", "Disney+", "Amazon Prime"],
    priceInteger: "159",
    priceCents: "90",
  },
];

const planosCelular = [
  {
    id: "controle-40",
    tag: "MÊS DAS MÃES",
    tagVariant: "highlight" as const,
    name: "Claro Controle",
    data: "40 GB",
    description: "15GB Livres + 20GB Bônus Mês das Mães + 5GB Bônus para Redes Sociais e Apps",
    priceInteger: "59",
    priceCents: "90",
  },
  {
    id: "pos-50",
    tag: "MÊS DAS MÃES",
    tagVariant: "highlight" as const,
    name: "Claro Pós",
    data: "50 GB",
    description: "Armazenamento na nuvem: Google One ou iCloud, WhatsApp e ligações ilimitadas",
    priceInteger: "124",
    priceCents: "90",
  },
];

const faqItems = [
  {
    id: "1",
    title: "Como ligar no 1052 da Claro?",
    content:
      "O 1052 é o número de atendimento da Claro para clientes de telefonia móvel. Ligue gratuitamente de qualquer celular Claro.",
  },
  {
    id: "2",
    title: "Como ligar no 10621 da Claro?",
    content:
      "O 10621 é o número de atendimento da Claro para clientes de internet residencial e TV por assinatura.",
  },
  {
    id: "3",
    title: "Para que serve o código *1052?",
    content:
      "O código *1052 permite consultar saldo, pacotes de dados e realizar outras consultas diretamente pelo celular.",
  },
  {
    id: "4",
    title: "Qual é o 106 da Claro?",
    content:
      "O 106 é o número de suporte técnico da Claro para clientes de banda larga e TV.",
  },
];

export default function PlanosPage() {
  const [city, setCity] = useState("São Paulo - SP");

  return (
    <main className="min-h-screen bg-white">
      {/* Header simples */}
      <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-neutral-medium)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="text-2xl font-bold text-[var(--color-brand-primary-medium)]">
                Claro
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-neutral-dark)]">
                <ClaroLink href="#multi">Multi</ClaroLink>
                <ClaroLink href="#internet">Internet</ClaroLink>
                <ClaroLink href="#tv">TV</ClaroLink>
                <ClaroLink href="#movel">Móvel</ClaroLink>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <ClaroButton size="sm" variant="primary">
                0800 179 4545
              </ClaroButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ClaroBanner
          slides={[
            {
              id: "1",
              type: "custom",
              imageSrc:
                "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=420&fit=crop",
              imageAlt: "600 Mega com Globoplay incluso",
              title: "600 Mega com Globoplay incluso",
              subtitle: "+ Wi-Fi grátis",
              fullPrice: "99,90",
              priceInteger: "49",
              priceCents: "90",
              pricePeriod: "/mês",
              priceNote: "Por 6 meses. Após R$ 99,90 /mês",
              ctaText: "Assinar",
              href: "#",
            },
            {
              id: "2",
              type: "custom",
              imageSrc:
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=420&fit=crop",
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
              href: "#",
            },
            {
              id: "3",
              type: "basic",
              imageSrc:
                "https://images.unsplash.com/photo-1574375927938-d5a98e8efe85?w=1920&h=420&fit=crop",
              imageAlt: "Box Claro tv+ com 6 streamings inclusos",
              href: "#",
            },
            {
              id: "4",
              type: "basic",
              imageSrc:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&h=420&fit=crop",
              imageAlt: "Controle 35GB Mês das Mães",
              href: "#",
            },
            {
              id: "5",
              type: "basic",
              imageSrc:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&h=420&fit=crop",
              imageAlt: "Moto G35",
              href: "#",
            },
          ]}
        />
      </section>

      {/* Seletor de cidade */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <ClaroText variant="medium">Ofertas válidas para</ClaroText>
          <ClaroTooltip content="Selecione sua cidade para ver ofertas disponíveis">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-10 px-4 rounded-xl border border-[var(--color-neutral-medium)] bg-white text-sm font-medium text-[var(--color-neutral-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-medium)]"
            >
              <option>São Paulo - SP</option>
              <option>Rio de Janeiro - RJ</option>
              <option>Belo Horizonte - MG</option>
              <option>Curitiba - PR</option>
            </select>
          </ClaroTooltip>
        </div>
      </section>

      {/* Claro Multi */}
      <section id="multi" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ClaroHeading level={2} className="text-center mb-2">
          Claro Multi: TV, Internet e Telefone em um só plano
        </ClaroHeading>
        <ClaroText className="text-center max-w-3xl mx-auto mb-8">
          Descubra as vantagens do Claro Multi, que combina TV, internet e telefone em um só plano, com pagamento em uma única fatura e descontos incríveis!
        </ClaroText>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {planosInternet.slice(0, 3).map((plano) => (
            <ClaroCard key={plano.id} className="flex flex-col">
              <ClaroCardHeader>
                <ClaroTag variant={plano.tagVariant} size="sm">
                  {plano.tag}
                </ClaroTag>
              </ClaroCardHeader>
              <ClaroCardContent className="flex-1">
                <h3 className="text-xl font-bold text-[var(--color-brand-primary-medium)]">
                  {plano.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-neutral-dark)]">
                  {plano.description}
                </p>
                <ul className="mt-4 space-y-1">
                  {plano.features.map((f, i) => (
                    <li key={i} className="text-sm text-[var(--color-neutral-dark)] flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--color-support-success-dark)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </ClaroCardContent>
              <ClaroCardFooter className="flex flex-col gap-3">
                <ClaroPrice
                  integer={plano.priceInteger}
                  cents={plano.priceCents}
                  period="/mês"
                  size="md"
                />
                <ClaroButton block>Contrate online</ClaroButton>
                <ClaroLink href="#" underline className="text-xs text-center">
                  Mais detalhes
                </ClaroLink>
              </ClaroCardFooter>
            </ClaroCard>
          ))}

          {/* Monte seu Multi */}
          <ClaroCard className="flex flex-col justify-center items-center text-center border-2 border-dashed border-[var(--color-brand-primary-medium)]">
            <ClaroCardContent>
              <h3 className="text-2xl font-bold text-[var(--color-brand-primary-medium)]">
                Monte seu Multi
              </h3>
              <p className="mt-4 text-sm text-[var(--color-neutral-dark)]">
                Combine do jeito que você quiser e aproveite.
              </p>
              <div className="mt-6 space-y-2 text-sm text-[var(--color-neutral-dark)]">
                <p>Claro TV + Internet</p>
                <p>Claro Internet + Controle</p>
                <p>Claro Multi</p>
              </div>
            </ClaroCardContent>
            <ClaroCardFooter>
              <ClaroButton variant="secondary" block>
                0800 179 4545
              </ClaroButton>
            </ClaroCardFooter>
          </ClaroCard>
        </div>
      </section>

      <ClaroDivider className="max-w-7xl mx-auto" />

      {/* Internet Residencial */}
      <section id="internet" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ClaroHeading level={2}>Claro Internet Residencial</ClaroHeading>
        <ClaroText className="mt-2 mb-8 max-w-3xl">
          Consulte as opções de planos de internet banda larga da Claro, que te dá acesso gratuito a Globoplay e outros aplicativos.
        </ClaroText>

        <div className="grid gap-6 md:grid-cols-3">
          {planosInternet.map((plano) => (
            <ClaroCard key={plano.id} className="flex flex-col">
              <ClaroCardContent className="flex-1">
                <h3 className="text-lg font-bold text-[var(--color-neutral-darkest)]">
                  {plano.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-neutral-dark)]">
                  {plano.description}
                </p>
              </ClaroCardContent>
              <ClaroCardFooter className="flex flex-col gap-3">
                <ClaroPrice
                  integer={plano.priceInteger}
                  cents={plano.priceCents}
                  period="/mês"
                  size="md"
                />
                <ClaroButton size="sm" block>
                  0800 179 4545
                </ClaroButton>
                <ClaroButton size="sm" variant="secondary" block>
                  Contrate online
                </ClaroButton>
              </ClaroCardFooter>
            </ClaroCard>
          ))}
        </div>
      </section>

      <ClaroDivider className="max-w-7xl mx-auto" />

      {/* TV Residencial */}
      <section id="tv" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ClaroHeading level={2}>Claro TV Residencial</ClaroHeading>
        <ClaroText className="mt-2 mb-8 max-w-3xl">
          Consulte as opções de planos da Claro TV com programação completa com + de 100 canais!
        </ClaroText>

        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {planosTV.map((plano) => (
            <ClaroCard key={plano.id} className="flex flex-col">
              <ClaroCardContent className="flex-1">
                <h3 className="text-lg font-bold text-[var(--color-neutral-darkest)]">
                  {plano.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase text-[var(--color-neutral-dark)]">
                  Incluso Grátis:
                </p>
                <ul className="mt-2 space-y-1">
                  {plano.features.map((f, i) => (
                    <li key={i} className="text-sm text-[var(--color-neutral-dark)] flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--color-support-success-dark)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </ClaroCardContent>
              <ClaroCardFooter className="flex flex-col gap-3">
                <ClaroPrice
                  integer={plano.priceInteger}
                  cents={plano.priceCents}
                  period="/mês"
                  size="md"
                />
                <ClaroButton size="sm" block>
                  0800 179 4545
                </ClaroButton>
                <ClaroButton size="sm" variant="secondary" block>
                  Contrate online
                </ClaroButton>
              </ClaroCardFooter>
            </ClaroCard>
          ))}
        </div>
      </section>

      <ClaroDivider className="max-w-7xl mx-auto" />

      {/* Claro Celular */}
      <section id="movel" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ClaroHeading level={2}>Claro Celular</ClaroHeading>
        <ClaroText className="mt-2 mb-8 max-w-3xl">
          Consulte as opções de planos de celular da Claro com aplicativos ilimitados pra navegar à vontade.
        </ClaroText>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {planosCelular.map((plano) => (
            <ClaroCard key={plano.id} className="flex flex-col">
              <ClaroCardHeader>
                <ClaroTag variant={plano.tagVariant} size="sm">
                  {plano.tag}
                </ClaroTag>
              </ClaroCardHeader>
              <ClaroCardContent className="flex-1">
                <h3 className="text-lg font-bold text-[var(--color-neutral-darkest)]">
                  {plano.name}
                </h3>
                <p className="mt-1 text-2xl font-bold text-[var(--color-brand-primary-medium)]">
                  {plano.data}
                </p>
                <p className="mt-2 text-sm text-[var(--color-neutral-dark)]">
                  {plano.description}
                </p>
              </ClaroCardContent>
              <ClaroCardFooter className="flex flex-col gap-3">
                <ClaroPrice
                  integer={plano.priceInteger}
                  cents={plano.priceCents}
                  period="/mês"
                  size="md"
                />
                <ClaroButton size="sm" block>
                  Contrate online
                </ClaroButton>
                <ClaroLink href="#" underline className="text-xs text-center">
                  Mais detalhes
                </ClaroLink>
              </ClaroCardFooter>
            </ClaroCard>
          ))}

          {/* Cards extras */}
          <ClaroCard className="flex flex-col">
            <ClaroCardContent className="flex-1">
              <h3 className="text-lg font-bold text-[var(--color-neutral-darkest)]">Claro Pós</h3>
              <p className="mt-1 text-2xl font-bold text-[var(--color-brand-primary-medium)]">50 GB</p>
              <ul className="mt-4 space-y-1 text-sm text-[var(--color-neutral-dark)]">
                <li>• Armazenamento na nuvem</li>
                <li>• Google One ou iCloud</li>
                <li>• WhatsApp e ligações ilimitadas</li>
                <li>• Passaporte Américas e Europa</li>
              </ul>
            </ClaroCardContent>
            <ClaroCardFooter className="flex flex-col gap-3">
              <ClaroPrice integer="124" cents="90" period="/mês" size="md" />
              <ClaroButton size="sm" block>Contrate online</ClaroButton>
            </ClaroCardFooter>
          </ClaroCard>

          <ClaroCard className="flex flex-col">
            <ClaroCardContent className="flex-1">
              <h3 className="text-lg font-bold text-[var(--color-neutral-darkest)]">Claro Pós</h3>
              <p className="mt-1 text-2xl font-bold text-[var(--color-brand-primary-medium)]">150 GB</p>
              <ul className="mt-4 space-y-1 text-sm text-[var(--color-neutral-dark)]">
                <li>• Armazenamento na nuvem</li>
                <li>• Google One ou iCloud</li>
                <li>• WhatsApp e ligações ilimitadas</li>
                <li>• Passaporte Américas e Europa</li>
              </ul>
            </ClaroCardContent>
            <ClaroCardFooter className="flex flex-col gap-3">
              <ClaroPrice integer="239" cents="90" period="/mês" size="md" />
              <ClaroButton size="sm" block>Contrate online</ClaroButton>
            </ClaroCardFooter>
          </ClaroCard>
        </div>
      </section>

      {/* Banner Empresa */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ClaroBanner
          slides={[
            {
              id: "empresa",
              type: "custom",
              imageSrc:
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=420&fit=crop",
              imageAlt: "Oferta Relâmpago Claro Empresas",
              title: "Oferta Relâmpago Claro Empresas",
              subtitle: "400 Mega com proteção McAfee. Exclusivo no CNPJ.",
              priceInteger: "79",
              priceCents: "90",
              pricePeriod: "/mês",
              priceNote: "por apenas",
              ctaText: "Compre Online",
              href: "#",
            },
          ]}
        />
      </section>

      <ClaroDivider className="max-w-7xl mx-auto" />

      {/* Toggle demo */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-4">
          <ClaroToggle label="Receber ofertas por e-mail" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <ClaroHeading level={2} className="text-center mb-8">
          Perguntas frequentes
        </ClaroHeading>
        <ClaroAccordion items={faqItems} />
      </section>

      {/* Footer simples */}
      <footer className="bg-[var(--color-neutral-darkest)] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold mb-4">Central de Vendas</h3>
              <p className="text-2xl font-bold">0800 179 4545</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links úteis</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <ClaroLink href="#" external className="text-white/70 hover:text-white">
                    Minha Claro
                  </ClaroLink>
                </li>
                <li>
                  <ClaroLink href="#" external className="text-white/70 hover:text-white">
                    2ª via de fatura
                  </ClaroLink>
                </li>
                <li>
                  <ClaroLink href="#" external className="text-white/70 hover:text-white">
                    Suporte técnico
                  </ClaroLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Sobre</h3>
              <p className="text-sm text-white/70">
                Este é um projeto de demonstração do Design System Claro. Não é o site oficial.
              </p>
            </div>
          </div>
          <ClaroDivider className="my-8 bg-white/20" />
          <p className="text-center text-xs text-white/50">
            © 2025 Claro Design System — Projeto de demonstração
          </p>
        </div>
      </footer>
    </main>
  );
}
