"use client";

import { useState } from "react";
import {
  ClaroButton,
  ClaroInput,
  ClaroCard,
  ClaroCardHeader,
  ClaroCardContent,
  ClaroCardFooter,
  ClaroTag,
  ClaroSpinner,
  ClaroModal,
  ClaroAccordion,
  ClaroAlert,
  ClaroCheckbox,
  ClaroRadio,
  ClaroTooltip,
  ClaroBreadcrumb,
  ClaroProgressBar,
  ClaroToggle,
  ClaroStepper,
  ClaroDivider,
  ClaroPrice,
  ClaroPagination,
  ClaroLink,
  ClaroRating,
  ClaroCollapse,
  ClaroCountdown,
  ClaroSpinBox,
  ClaroTabSelect,
  ClaroText,
  ClaroHeading,
  ClaroImage,
  ClaroLinkList,
  ClaroTopic,
  ClaroFooter,
} from "@/components/claro";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [toggleChecked, setToggleChecked] = useState(true);
  const [currentPage, setCurrentPage] = useState(3);
  const [ratingValue, setRatingValue] = useState(3.5);
  const [activeTab, setActiveTab] = useState("planos");

  return (
    <main className="min-h-screen bg-[var(--color-neutral-light)] p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-brand-primary-medium)] font-[var(--font-family-highlight)]">
            Claro Components
          </h1>
          <p className="mt-2 text-lg text-[var(--color-neutral-dark)]">
            Réplica dos componentes do Design System Mondrian
          </p>
        </div>

        {/* Breadcrumb */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Breadcrumb
          </h2>
          <ClaroBreadcrumb
            items={[
              { label: "Home", href: "#" },
              { label: "Categoria", href: "#" },
              { label: "Subcategoria", href: "#" },
              { label: "Página atual" },
            ]}
          />
        </section>

        {/* Stepper */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Stepper
          </h2>
          <ClaroStepper
            steps={[
              { label: "Dados pessoais" },
              { label: "Endereço" },
              { label: "Pagamento" },
              { label: "Confirmação" },
            ]}
            currentStep={1}
          />
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Button
          </h2>
          <div className="flex flex-wrap gap-4">
            <ClaroButton>Primary</ClaroButton>
            <ClaroButton variant="secondary">Secondary</ClaroButton>
            <ClaroButton variant="primaryInverse">
              Primary Inverse
            </ClaroButton>
            <ClaroButton variant="global">Global</ClaroButton>
            <ClaroButton variant="ghost">Ghost</ClaroButton>
          </div>
          <div className="flex flex-wrap gap-4">
            <ClaroButton size="sm">Small</ClaroButton>
            <ClaroButton size="default">Default</ClaroButton>
            <ClaroButton size="lg">Large</ClaroButton>
            <ClaroButton size="icon">+</ClaroButton>
          </div>
          <div className="flex flex-wrap gap-4">
            <ClaroButton loading>Loading</ClaroButton>
            <ClaroButton disabled>Disabled</ClaroButton>
          </div>
          <ClaroButton block>Block Button</ClaroButton>
        </section>

        {/* Inputs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Input
          </h2>
          <div className="grid gap-4 max-w-md">
            <ClaroInput placeholder="Placeholder padrão" />
            <ClaroInput label="Com label" placeholder="Digite algo..." />
            <ClaroInput
              label="Com helper"
              placeholder="Digite algo..."
              helperText="Texto auxiliar para o usuário"
            />
            <ClaroInput
              label="Com erro"
              placeholder="Digite algo..."
              state="error"
              errorText="Campo obrigatório"
            />
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Card
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ClaroCard>
              <ClaroCardHeader>
                <ClaroTag variant="primary">Novo</ClaroTag>
              </ClaroCardHeader>
              <ClaroCardContent>
                <h3 className="text-xl font-bold text-[var(--color-neutral-darkest)]">
                  Título do Card
                </h3>
                <p className="mt-2 text-[var(--color-neutral-dark)]">
                  Conteúdo do card com descrição e informações relevantes para
                  o usuário.
                </p>
              </ClaroCardContent>
              <ClaroCardFooter>
                <ClaroButton size="sm">Ação</ClaroButton>
              </ClaroCardFooter>
            </ClaroCard>

            <ClaroCard>
              <ClaroCardContent>
                <h3 className="text-xl font-bold text-[var(--color-neutral-darkest)]">
                  Card Simples
                </h3>
                <p className="mt-2 text-[var(--color-neutral-dark)]">
                  Apenas conteúdo sem header ou footer definidos.
                </p>
              </ClaroCardContent>
            </ClaroCard>
          </div>
        </section>

        {/* Link */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Link
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            <ClaroLink href="#">Link padrão</ClaroLink>
            <ClaroLink href="#" variant="secondary">Link secondary</ClaroLink>
            <ClaroLink href="#" external>Link externo</ClaroLink>
            <ClaroLink href="#" underline>Link sublinhado</ClaroLink>
          </div>
        </section>

        {/* Tags */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Tag
          </h2>
          <div className="flex flex-wrap gap-3">
            <ClaroTag>Default</ClaroTag>
            <ClaroTag variant="primary">Primary</ClaroTag>
            <ClaroTag variant="secondary">Secondary</ClaroTag>
            <ClaroTag variant="highlight">Highlight</ClaroTag>
            <ClaroTag variant="success">Success</ClaroTag>
            <ClaroTag variant="danger">Danger</ClaroTag>
          </div>
          <div className="flex flex-wrap gap-3">
            <ClaroTag size="sm">Small</ClaroTag>
            <ClaroTag size="default">Default</ClaroTag>
            <ClaroTag size="lg">Large</ClaroTag>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Alert
          </h2>
          {alertVisible && (
            <ClaroAlert
              variant="primary"
              onClose={() => setAlertVisible(false)}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              Este é um alerta informativo que pode ser fechado.
            </ClaroAlert>
          )}
          <ClaroAlert variant="success">
            Operação realizada com sucesso!
          </ClaroAlert>
          <ClaroAlert variant="danger">
            Erro ao processar sua solicitação.
          </ClaroAlert>
          <ClaroAlert variant="highlight">
            Atenção: verifique os dados antes de continuar.
          </ClaroAlert>
        </section>

        {/* Accordion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Accordion
          </h2>
          <ClaroAccordion
            items={[
              {
                id: "1",
                title: "Como funciona o serviço?",
                content: "Nosso serviço oferece internet banda larga de alta velocidade para sua residência ou empresa, com planos flexíveis e suporte 24h.",
              },
              {
                id: "2",
                title: "Quais são as formas de pagamento?",
                content: "Aceitamos cartão de crédito, débito automático, boleto bancário e PIX. Você pode alterar a forma de pagamento a qualquer momento.",
              },
              {
                id: "3",
                title: "Posso cancelar a qualquer momento?",
                content: "Sim, você pode solicitar o cancelamento sem multa após o período de fidelidade. Entre em contato com nossa central de atendimento.",
              },
            ]}
          />
        </section>

        {/* Checkbox & Radio */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Checkbox & Radio
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <ClaroCheckbox
                label="Aceito os termos e condições"
                helperText="Leia os termos antes de continuar"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <ClaroCheckbox label="Receber newsletter" defaultChecked />
              <ClaroCheckbox label="Opção desabilitada" disabled />
            </div>
            <div className="space-y-3">
              <ClaroRadio
                name="options"
                value="option1"
                label="Opção 1"
                checked={radioValue === "option1"}
                onChange={() => setRadioValue("option1")}
              />
              <ClaroRadio
                name="options"
                value="option2"
                label="Opção 2"
                checked={radioValue === "option2"}
                onChange={() => setRadioValue("option2")}
              />
              <ClaroRadio
                name="options"
                value="option3"
                label="Opção desabilitada"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Tooltip */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Tooltip
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            <ClaroTooltip content="Tooltip no topo">
              <ClaroButton size="sm">Top</ClaroButton>
            </ClaroTooltip>
            <ClaroTooltip content="Tooltip embaixo" position="bottom">
              <ClaroButton size="sm">Bottom</ClaroButton>
            </ClaroTooltip>
            <ClaroTooltip content="Tooltip à esquerda" position="left">
              <ClaroButton size="sm">Left</ClaroButton>
            </ClaroTooltip>
            <ClaroTooltip content="Tooltip à direita" position="right">
              <ClaroButton size="sm">Right</ClaroButton>
            </ClaroTooltip>
          </div>
        </section>

        {/* Toggle */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Toggle
          </h2>
          <div className="flex flex-col gap-4">
            <ClaroToggle
              label="Notificações ativadas"
              checked={toggleChecked}
              onChange={setToggleChecked}
            />
            <ClaroToggle label="Modo escuro" />
            <ClaroToggle label="Opção desabilitada" disabled />
          </div>
        </section>

        {/* Divider */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Divider
          </h2>
          <div className="space-y-4 max-w-md">
            <ClaroDivider />
            <ClaroDivider variant="primary" />
            <div className="flex h-12 items-center gap-4">
              <span>Item A</span>
              <ClaroDivider orientation="vertical" />
              <span>Item B</span>
              <ClaroDivider orientation="vertical" variant="dark" />
              <span>Item C</span>
            </div>
          </div>
        </section>

        {/* Price */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Price
          </h2>
          <div className="flex flex-wrap gap-8 items-end">
            <ClaroPrice integer="99" cents="90" period="/mês" label="Plano Básico" size="sm" />
            <ClaroPrice integer="129" cents="90" period="/mês" label="Plano Padrão" size="md" />
            <ClaroPrice integer="199" cents="90" period="/mês" label="Plano Premium" size="lg" />
          </div>
        </section>

        {/* ProgressBar */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            ProgressBar
          </h2>
          <div className="space-y-4 max-w-xl">
            <ClaroProgressBar value={25} />
            <ClaroProgressBar value={50} color="secondary" />
            <ClaroProgressBar value={75} color="success" />
            <ClaroProgressBar value={100} color="highlight" />
            <ClaroProgressBar value={60} size="sm" showPercentage={false} />
          </div>
        </section>

        {/* Spinner */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Spinner
          </h2>
          <div className="flex items-center gap-6">
            <ClaroSpinner size="sm" />
            <ClaroSpinner size="md" />
            <ClaroSpinner size="lg" />
            <ClaroSpinner size="md" color="secondary" />
          </div>
        </section>

        {/* Pagination */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Pagination
          </h2>
          <ClaroPagination
            totalPages={10}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </section>

        {/* Rating */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Rating
          </h2>
          <div className="flex flex-wrap gap-8 items-start">
            <ClaroRating value={ratingValue} onChange={setRatingValue} evaluations={128} />
            <ClaroRating value={4.2} readonly size="sm" showValue evaluations={42} />
            <ClaroRating value={5} readonly size="lg" />
          </div>
        </section>

        {/* Modal */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Modal
          </h2>
          <div className="flex flex-wrap gap-4">
            <ClaroButton onClick={() => setModalOpen(true)}>
              Abrir Modal
            </ClaroButton>
          </div>
        </section>

        {/* Collapse */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Collapse
          </h2>
          <ClaroCollapse title="Clique para expandir">
            Conteúdo oculto que aparece ao clicar no cabeçalho. Útil para FAQs e detalhes adicionais.
          </ClaroCollapse>
        </section>

        {/* Countdown */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Countdown
          </h2>
          <ClaroCountdown
            targetDate={new Date(Date.now() + 86400000 * 2 + 3600000 * 5)}
            size="md"
          />
        </section>

        {/* SpinBox */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            SpinBox
          </h2>
          <div className="max-w-xs">
            <ClaroSpinBox
              label="Quantidade"
              value={1}
              min={0}
              max={10}
              onChange={(v) => console.log(v)}
            />
          </div>
        </section>

        {/* TabSelect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            TabSelect
          </h2>
          <ClaroTabSelect
            tabs={[
              { id: "planos", label: "Planos", content: <p>Conteúdo da aba Planos</p> },
              { id: "ofertas", label: "Ofertas", content: <p>Conteúdo da aba Ofertas</p> },
              { id: "beneficios", label: "Benefícios", content: <p>Conteúdo da aba Benefícios</p> },
            ]}
            defaultTab="planos"
            onChange={setActiveTab}
          />
        </section>

        {/* Text / Heading */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Text & Heading
          </h2>
          <div className="space-y-2">
            <ClaroHeading level={1}>Heading 1</ClaroHeading>
            <ClaroHeading level={2}>Heading 2</ClaroHeading>
            <ClaroHeading level={3}>Heading 3</ClaroHeading>
            <ClaroText>Texto body padrão</ClaroText>
            <ClaroText variant="caption">Texto caption</ClaroText>
            <ClaroText variant="medium">Texto medium</ClaroText>
            <ClaroText variant="bold">Texto bold</ClaroText>
          </div>
        </section>

        {/* Image */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Image
          </h2>
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            <ClaroImage
              src="https://picsum.photos/200/200"
              alt="Exemplo"
              aspectRatio="square"
            />
            <ClaroImage
              src="https://picsum.photos/300/200"
              alt="Exemplo wide"
              aspectRatio="video"
            />
          </div>
        </section>

        {/* LinkList */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            LinkList
          </h2>
          <ClaroLinkList
            title="Links úteis"
            items={[
              { label: "Minha Claro", href: "#" },
              { label: "2ª via de fatura", href: "#" },
              { label: "Suporte técnico", href: "#" },
              { label: "Lojas próximas", href: "#" },
            ]}
          />
        </section>

        {/* Topic */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Topic
          </h2>
          <ClaroTopic
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Internet Ultra Veloz"
            description="Fibra ótica com velocidade de até 1 Gbps para sua casa ou empresa."
            action={<ClaroButton size="sm">Contratar</ClaroButton>}
          />
        </section>

        {/* Footer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-darkest)]">
            Footer
          </h2>
        </section>
      </div>

      <ClaroFooter />

      <ClaroModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Título do Modal"
        description="Descrição opcional do modal para contextualizar o usuário."
        footer={
          <>
            <ClaroButton variant="secondary" onClick={() => setModalOpen(false)}>
              Cancelar
            </ClaroButton>
            <ClaroButton onClick={() => setModalOpen(false)}>Confirmar</ClaroButton>
          </>
        }
      >
        <p className="text-[var(--color-neutral-dark)]">
          Conteúdo do modal. Aqui você pode colocar formulários, textos,
          imagens ou qualquer outro elemento React.
        </p>
      </ClaroModal>
    </main>
  );
}
