import Container from "@/components/Container";
import CTA from "@/components/CTA";
import {
  Gauge,
  Wrench,
  Settings,
  CheckCircle2,
  Search,
  Cog,
  ClipboardCheck,
  Zap,
  ShieldCheck,
  Timer,
  HelpCircle,
} from "lucide-react";

const ACCENT = "text-red-500";
const CARD =
  "rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition";

const services = [
  {
    title: "Диагностика ТНВД",
    desc: `Комплексная проверка топливного насоса высокого давления на специализированном стенде.

Мы определяем:
— падение давления
— износ плунжерной пары
— нестабильную работу подачи топлива
— отклонения от заводских параметров

Диагностика позволяет точно понять причину неисправности без лишней замены деталей.`,
    icon: Gauge,
  },
  {
    title: "Ремонт ТНВД",
    desc: `Полный цикл восстановления топливного насоса:

— разборка и дефектовка
— очистка всех узлов
— замена изношенных элементов
— регулировка по заводским параметрам

После ремонта насос проходит обязательное тестирование на стенде.`,
    icon: Settings,
  },
  {
    title: "Ремонт форсунок",
    desc: `Восстанавливаем дизельные форсунки всех типов:

— механические
— Common Rail

Проводим:
— ультразвуковую очистку
— замену распылителей
— проверку факела распыла
— настройку подачи топлива`,
    icon: Wrench,
  },
  {
    title: "Common Rail системы",
    desc: `Диагностика и ремонт систем высокого давления Common Rail.

Мы проверяем:
— давление в рейке
— работу клапанов
— корректность подачи топлива
— электронные ошибки системы

После ремонта система проходит финальную проверку под нагрузкой.`,
    icon: CheckCircle2,
  },
];

const process = [
  {
    title: "Первичная диагностика",
    desc: "Автомобиль или узел проходит первичную проверку для выявления симптомов неисправности.",
    icon: Search,
  },
  {
    title: "Разбор и дефектовка",
    desc: "Полная разборка узла и оценка состояния каждой детали.",
    icon: Cog,
  },
  {
    title: "Ремонт и восстановление",
    desc: "Замена изношенных компонентов и восстановление рабочих параметров.",
    icon: Wrench,
  },
  {
    title: "Стендовая проверка",
    desc: "Финальное тестирование под нагрузкой и контроль качества.",
    icon: ClipboardCheck,
  },
];

const advantages = [
  {
    title: "Точная диагностика",
    desc: "Без лишней замены деталей",
    icon: CheckCircle2,
  },
  {
    title: "Гарантия",
    desc: "На все виды работ",
    icon: ShieldCheck,
  },
  {
    title: "Быстрые сроки",
    desc: "Минимальный простой техники",
    icon: Timer,
  },
  {
    title: "Профессиональный опыт",
    desc: "10+ лет работы с дизельными системами",
    icon: Zap,
  },
];

const faq = [
  {
    q: "Сколько занимает ремонт ТНВД?",
    a: "В среднем от 1 до 3 рабочих дней в зависимости от сложности неисправности и наличия запчастей.",
  },
  {
    q: "Вы даёте гарантию?",
    a: "Да, на все виды работ предоставляется гарантия. Срок зависит от типа выполненного ремонта.",
  },
  {
    q: "Вы работаете с Common Rail системами?",
    a: "Да, мы обслуживаем и ремонтируем все современные системы Common Rail.",
  },
  {
    q: "Нужно ли заранее записываться?",
    a: "Желательно, чтобы сократить время ожидания и сразу принять автомобиль в работу.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0B1220] text-white min-h-screen">

      {/* HEADER */}
      <section className="py-20 border-b border-white/10">
        <Container>
          <h1 className="text-4xl md:text-6xl font-bold">
            Наши услуги
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Профессиональный ремонт дизельных топливных систем.
            Работаем с ТНВД, форсунками и Common Rail системами любой сложности.
          </p>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <div key={i} className={`p-6 ${CARD}`}>
                  <div className="flex gap-4">
                    <Icon className={`${ACCENT} w-7 h-7 mt-1`} />

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {s.title}
                      </h3>

                      <p className="text-gray-400 whitespace-pre-line text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-20 border-t border-white/10">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Как мы работаем
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => {
              const Icon = p.icon;

              return (
                <div key={i} className={`p-6 text-center ${CARD}`}>
                  <Icon className={`${ACCENT} w-7 h-7 mx-auto mb-3`} />
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Частые вопросы
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((f, i) => (
              <details key={i} className={`p-5 ${CARD}`}>
                <summary className="cursor-pointer flex justify-between font-semibold">
                  {f.q}
                  <HelpCircle className="w-5 h-5 text-gray-500" />
                </summary>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <CTA />
      </section>

    </main>
  );
}