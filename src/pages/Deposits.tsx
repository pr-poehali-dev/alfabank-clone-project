import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Deposits = () => {
  const [amount, setAmount] = useState(100000);
  const [term, setTerm] = useState(12);

  const calculateDeposit = (rate: number) => {
    const total = amount * Math.pow(1 + rate, term / 12);
    return total.toFixed(0);
  };

  const deposits = [
    {
      name: 'Barbie Накопительный',
      rate: 10,
      minAmount: '1 000 ₽',
      term: 'От 1 месяца',
      features: ['Пополнение в любое время', 'Частичное снятие', 'Капитализация процентов', 'Онлайн-открытие'],
      color: 'from-pink-500 to-pink-600',
      icon: 'TrendingUp'
    },
    {
      name: 'Barbie Доходный',
      rate: 10.5,
      minAmount: '50 000 ₽',
      term: '6-12 месяцев',
      features: ['Максимальная ставка', 'Выплата процентов ежемесячно', 'Без пополнения', 'Автопролонгация'],
      color: 'from-purple-500 to-purple-600',
      icon: 'Coins'
    },
    {
      name: 'Barbie Детский',
      rate: 9.5,
      minAmount: '10 000 ₽',
      term: 'От 3 месяцев',
      features: ['Для детей до 18 лет', 'Пополнение', 'Подарки за открытие', 'Обучение финансам'],
      color: 'from-blue-500 to-blue-600',
      icon: 'Baby'
    },
    {
      name: 'Barbie Пенсионный',
      rate: 11,
      minAmount: '1 000 ₽',
      term: 'От 3 месяцев',
      features: ['Повышенная ставка', 'Пополнение пенсии', 'Льготы', 'Страхование вклада'],
      color: 'from-green-500 to-green-600',
      icon: 'Heart'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Вклады
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Приумножайте сбережения с максимальной выгодой. До 11% годовых!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Калькулятор вклада</h2>
          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="PiggyBank" className="h-6 w-6 text-primary" />
                Рассчитайте доход от вклада
              </CardTitle>
              <CardDescription>Узнайте, сколько заработаете</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="10" className="space-y-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="10">10%</TabsTrigger>
                  <TabsTrigger value="10.5">10.5%</TabsTrigger>
                  <TabsTrigger value="11">11%</TabsTrigger>
                </TabsList>

                {['10', '10.5', '11'].map((rate) => (
                  <TabsContent key={rate} value={rate} className="space-y-8">
                    <div className="space-y-3">
                      <Label className="text-lg">Сумма вклада: {amount.toLocaleString()} ₽</Label>
                      <Slider 
                        value={[amount]} 
                        onValueChange={([v]) => setAmount(v)} 
                        min={1000} 
                        max={10000000} 
                        step={10000}
                        className="py-4" 
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>1 000 ₽</span>
                        <span>10 000 000 ₽</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-lg">Срок: {term} месяцев</Label>
                      <Slider 
                        value={[term]} 
                        onValueChange={([v]) => setTerm(v)} 
                        min={1} 
                        max={36} 
                        step={1}
                        className="py-4" 
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>1 месяц</span>
                        <span>3 года</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-pink-50 p-8 rounded-2xl">
                      <div className="grid md:grid-cols-2 gap-6 text-center">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Итоговая сумма</p>
                          <p className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                            {calculateDeposit(parseFloat(rate) / 100)} ₽
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Ваш доход</p>
                          <p className="text-4xl font-bold text-green-600">
                            +{(calculateDeposit(parseFloat(rate) / 100) - amount).toLocaleString()} ₽
                          </p>
                        </div>
                      </div>
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        Ставка {rate}% годовых с капитализацией
                      </p>
                    </div>

                    <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary to-pink-400" size="lg">
                      <Icon name="PiggyBank" className="mr-2 h-5 w-5" />
                      Открыть вклад
                    </Button>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши вклады</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {deposits.map((deposit, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary">
                <div className={`h-32 bg-gradient-to-br ${deposit.color} p-6 text-white flex items-center gap-4`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <Icon name={deposit.icon} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{deposit.name}</h3>
                    <p className="text-xl font-semibold">До {deposit.rate}% годовых</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Минимум</p>
                      <p className="text-lg font-bold text-primary">{deposit.minAmount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Срок</p>
                      <p className="text-lg font-bold text-primary">{deposit.term}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {deposit.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-pink-400">
                    Открыть вклад
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Гарантии и безопасность</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Shield', title: 'Страхование АСВ', desc: 'До 1.4 млн ₽' },
              { icon: 'Lock', title: 'Надёжность', desc: 'Лицензия ЦБ РФ' },
              { icon: 'Award', title: 'Прозрачность', desc: 'Без скрытых комиссий' },
              { icon: 'Clock', title: 'Доступность', desc: 'Снятие в любое время' }
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
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

export default Deposits;
