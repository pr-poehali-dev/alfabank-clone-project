import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Investments = () => {
  const products = [
    {
      title: 'Акции',
      description: 'Российские и зарубежные компании',
      minInvestment: 'От 1 000 ₽',
      profitability: 'До 30% годовых',
      risk: 'Высокий',
      features: ['Apple, Tesla, Яндекс', 'Дивиденды', 'Рост капитала', 'Ликвидность'],
      icon: 'TrendingUp',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Облигации',
      description: 'Стабильный доход',
      minInvestment: 'От 1 000 ₽',
      profitability: '8-12% годовых',
      risk: 'Низкий',
      features: ['ОФЗ, корпоративные', 'Регулярные выплаты', 'Низкий риск', 'Предсказуемость'],
      icon: 'FileText',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Фонды (ETF)',
      description: 'Диверсифицированный портфель',
      minInvestment: 'От 1 000 ₽',
      profitability: '10-20% годовых',
      risk: 'Средний',
      features: ['Биржевые фонды', 'Автоматическая диверсификация', 'Низкие комиссии', 'Простота'],
      icon: 'PieChart',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'ИИС',
      description: 'Индивидуальный инвестиционный счёт',
      minInvestment: 'От 1 000 ₽',
      profitability: '+13% от налогов',
      risk: 'Любой',
      features: ['Налоговый вычет до 52 000 ₽', 'Любые инструменты', 'Льготы', 'Господдержка'],
      icon: 'Award',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Валюта',
      description: 'Доллары и евро',
      minInvestment: 'От 100 $',
      profitability: 'Курсовая разница',
      risk: 'Средний',
      features: ['USD, EUR, CNY', 'Защита от инфляции', 'Диверсификация', 'Ликвидность'],
      icon: 'DollarSign',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Структурные продукты',
      description: 'Гарантированная доходность',
      minInvestment: 'От 50 000 ₽',
      profitability: 'До 25% годовых',
      risk: 'Низкий',
      features: ['Защита капитала', 'Высокая доходность', 'Стратегии', 'Индивидуальный подход'],
      icon: 'Lock',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const strategies = [
    {
      name: 'Консервативная',
      description: 'Для тех, кто ценит стабильность',
      allocation: '80% облигации, 20% акции',
      profitability: '8-10%',
      risk: 'Низкий',
      icon: 'Shield'
    },
    {
      name: 'Сбалансированная',
      description: 'Оптимальное соотношение риска и дохода',
      allocation: '50% облигации, 50% акции',
      profitability: '12-15%',
      risk: 'Средний',
      icon: 'Scale'
    },
    {
      name: 'Агрессивная',
      description: 'Для готовых к риску',
      allocation: '20% облигации, 80% акции',
      profitability: '15-25%',
      risk: 'Высокий',
      icon: 'Rocket'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Инвестиции
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Начните инвестировать и приумножайте капитал вместе с Барби Банк
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-pink-50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Sparkles" className="h-6 w-6 text-primary" />
                  Почему инвестировать выгодно?
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <p className="text-sm text-muted-foreground">Средняя доходность портфеля за год</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">52 000 ₽</div>
                  <p className="text-sm text-muted-foreground">Налоговый вычет по ИИС</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1 000 ₽</div>
                  <p className="text-sm text-muted-foreground">Минимальная сумма для старта</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Инвестиционные инструменты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Card key={i} className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary">
                <div className={`h-24 bg-gradient-to-br ${product.color} p-4 text-white flex items-center gap-3`}>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <Icon name={product.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p className="text-sm opacity-90">{product.description}</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Минимум</p>
                      <p className="text-sm font-bold">{product.minInvestment}</p>
                    </div>
                    <Badge variant={product.risk === 'Низкий' ? 'default' : product.risk === 'Средний' ? 'secondary' : 'destructive'}>
                      {product.risk} риск
                    </Badge>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Доходность</p>
                    <p className="text-lg font-bold text-primary">{product.profitability}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {product.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-pink-400" size="sm">
                    Инвестировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Готовые стратегии</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите стратегию под ваши цели и готовность к риску
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {strategies.map((strategy, i) => (
              <Card key={i} className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={strategy.icon} className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{strategy.name}</CardTitle>
                  <CardDescription className="text-base">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-br from-primary/10 to-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Распределение активов</p>
                    <p className="text-sm font-semibold">{strategy.allocation}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Доходность</p>
                      <p className="text-lg font-bold text-primary">{strategy.profitability}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Риск</p>
                      <p className="text-lg font-bold">{strategy.risk}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-pink-400">
                    Выбрать стратегию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как начать инвестировать?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', icon: 'UserPlus', title: 'Регистрация', desc: 'Откройте брокерский счёт за 5 минут' },
              { step: '2', icon: 'Wallet', title: 'Пополнение', desc: 'Переведите деньги удобным способом' },
              { step: '3', icon: 'ShoppingCart', title: 'Покупка', desc: 'Выберите активы из каталога' },
              { step: '4', icon: 'TrendingUp', title: 'Доход', desc: 'Следите за ростом капитала' }
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

export default Investments;
