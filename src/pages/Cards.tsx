import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cards = () => {
  const cards = [
    {
      name: 'Barbie Dream',
      type: 'Дебетовая карта',
      cashback: '15%',
      features: ['Кэшбэк до 15% в категориях на выбор', 'Бесплатное обслуживание', '5% на остаток', 'Дизайн на выбор'],
      color: 'from-pink-500 to-pink-600',
      icon: 'Sparkles'
    },
    {
      name: 'Barbie Gold',
      type: 'Премиум карта',
      cashback: '20%',
      features: ['Кэшбэк до 20%', 'Доступ в VIP-залы аэропортов', 'Консьерж-сервис', 'Страхование путешествий'],
      color: 'from-yellow-400 to-yellow-600',
      icon: 'Crown'
    },
    {
      name: 'Barbie Travel',
      type: 'Дебетовая карта',
      cashback: '10%',
      features: ['10% кэшбэк на путешествия', 'Бесплатное снятие за границей', 'Мультивалютность', '0₽ за обслуживание'],
      color: 'from-blue-500 to-blue-600',
      icon: 'Plane'
    },
    {
      name: 'Barbie Young',
      type: 'Молодёжная карта',
      cashback: '12%',
      features: ['12% на развлечения', 'Бонусы от партнёров', 'Подписки со скидкой', 'Стикеры в подарок'],
      color: 'from-purple-500 to-purple-600',
      icon: 'Music'
    }
  ];

  const creditCards = [
    {
      name: 'Barbie Credit',
      type: 'Кредитная карта',
      limit: 'До 1 000 000 ₽',
      features: ['100 дней без процентов', 'Кэшбэк до 10%', 'Снятие наличных 0%', 'Рассрочка на 12 месяцев'],
      color: 'from-red-500 to-pink-600',
      icon: 'CreditCard'
    },
    {
      name: 'Barbie Platinum',
      type: 'Премиум кредитная',
      limit: 'До 3 000 000 ₽',
      features: ['200 дней без процентов', 'Кэшбэк до 15%', 'VIP обслуживание', 'Личный менеджер'],
      color: 'from-gray-400 to-gray-600',
      icon: 'Gem'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Банковские карты
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Выбирайте карту под свой стиль жизни. Яркий дизайн, щедрый кэшбэк и море возможностей!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="Sparkles" className="h-8 w-8 text-primary" />
            Дебетовые карты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary">
                <div className={`h-48 bg-gradient-to-br ${card.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <Icon name={card.icon} className="h-24 w-24" />
                  </div>
                  <div className="relative z-10">
                    <Badge variant="secondary" className="mb-3">{card.type}</Badge>
                    <h3 className="text-3xl font-bold mb-2">{card.name}</h3>
                    <p className="text-lg">Кэшбэк {card.cashback}</p>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex gap-2">
                      <div className="w-10 h-8 bg-white/30 backdrop-blur rounded"></div>
                      <div className="w-10 h-8 bg-white/30 backdrop-blur rounded"></div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Преимущества</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {card.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-pink-400">
                    Оформить карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="CreditCard" className="h-8 w-8 text-primary" />
            Кредитные карты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {creditCards.map((card, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary">
                <div className={`h-48 bg-gradient-to-br ${card.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <Icon name={card.icon} className="h-24 w-24" />
                  </div>
                  <div className="relative z-10">
                    <Badge variant="secondary" className="mb-3">{card.type}</Badge>
                    <h3 className="text-3xl font-bold mb-2">{card.name}</h3>
                    <p className="text-lg">Лимит {card.limit}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Преимущества</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {card.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-pink-400">
                    Оформить карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как оформить карту?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', icon: 'Smartphone', title: 'Оставьте заявку', desc: 'Онлайн за 3 минуты' },
              { step: '2', icon: 'CheckCircle', title: 'Получите одобрение', desc: 'Мгновенное решение' },
              { step: '3', icon: 'Truck', title: 'Бесплатная доставка', desc: 'Курьер привезёт карту' },
              { step: '4', icon: 'Sparkles', title: 'Пользуйтесь', desc: 'Активация за 1 минуту' }
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <Icon name={item.icon} className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cards;
