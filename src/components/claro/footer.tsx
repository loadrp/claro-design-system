"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface ClaroFooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  logo?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Produtos",
    links: [
      { label: "Móvel", href: "#" },
      { label: "Fixa", href: "#" },
      { label: "TV", href: "#" },
      { label: "Combo Multi", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de ajuda", href: "#" },
      { label: "Minha Claro", href: "#" },
      { label: "2ª via de fatura", href: "#" },
      { label: "Consumo", href: "#" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre a Claro", href: "#" },
      { label: "Trabalhe conosco", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "Regulamentos", href: "#" },
    ],
  },
];

const ClaroFooter = React.forwardRef<HTMLElement, ClaroFooterProps>(
  ({ className, columns = defaultColumns, logo, bottomContent, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "w-full bg-[var(--color-brand-primary-medium)] text-white",
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Logo area */}
            <div className="lg:w-1/4">
              {logo || (
                <div className="text-2xl font-bold font-[var(--font-family-highlight)]">
                  Claro
                </div>
              )}
            </div>

            {/* Link columns */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
              {columns.map((column, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-4">
                    {column.title}
                  </h3>
                  <ul className="space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-sm text-white/80 hover:text-white hover:underline transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mt-10 pt-6">
            {bottomContent || (
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
                <span>© {new Date().getFullYear()} Claro. Todos os direitos reservados.</span>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors">Termos</a>
                  <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                  <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
    );
  }
);
ClaroFooter.displayName = "ClaroFooter";

export { ClaroFooter };
