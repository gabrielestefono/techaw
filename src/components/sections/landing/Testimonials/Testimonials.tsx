import SectionHeaderWithSubtitleBared from "@/components/blocks/SectionHeaderWithSubtitleBared/SectionHeaderWithSubtitleBared";
import TestimonialCardOutlined from "@/components/containers/TestimonialCardOutlined/TestimonialCardOutlined";
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div>
        <SectionHeaderWithSubtitleBared
          subtitle="Veja os depoimentos de clientes satisfeitos com nossos produtos e
              serviços."
          title="O que Nossos Clientes Dizem"
        />
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCardOutlined
            name="Carlos Silva"
            company="Empresa de Contabilidade"
            testimonial="A Haw Tec forneceu todo o equipamento para nosso escritório. Excelente atendimento e produtos de qualidade."
            rating={5}
          />
          <TestimonialCardOutlined
            name="Ana Oliveira"
            company="Clínica Médica"
            testimonial="Contratamos o serviço de manutenção mensal e estamos muito satisfeitos. Resolvem qualquer problema rapidamente."
            rating={5}
          />
          <TestimonialCardOutlined
            name="Roberto Santos"
            company="Escritório de Advocacia"
            testimonial="Compramos impressoras e contratamos o serviço de manutenção. Ótimo custo-benefício e atendimento de primeira."
            rating={3}
          />
          <TestimonialCardOutlined
            name="Fernanda Costa"
            company="Loja de Roupas"
            testimonial="A entrega gratuita e rápida foi um diferencial. Os produtos chegaram em perfeito estado."
            rating={5}
          />
          <TestimonialCardOutlined
            name="Marcelo Alves"
            company="Restaurante"
            testimonial="Precisávamos de um sistema completo para nosso restaurante e a Haw Tec nos atendeu perfeitamente."
            rating={4}
          />
          <TestimonialCardOutlined
            name="Juliana Martins"
            company="Escola"
            testimonial="Forneceram equipamentos para nosso laboratório de informática. Excelente qualidade e suporte técnico."
            rating={5}
          />
        </div>
      </div>
    </section>
  );
}
