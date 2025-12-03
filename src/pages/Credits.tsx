import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Credits = () => {
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(24);

  const calculatePayment = () => {
    const rate = 0.099;
    const monthlyRate = rate / 12;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    return payment.toFixed(0);
  };

  const products = [
    {
      title: 'Потребительский кредит',
      rate: 'От 9.9%',
      amount: 'До 5 млн ₽',
      term: 'До 7 лет',
      features: ['Без поручителей', 'Решение за 5 минут', 'Деньги сразу на карту', 'Досрочное погашение'],
      icon: 'Banknote',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Кредит наличными',
      rate: 'От 10.5%',
      amount: 'До 3 млн ₽',
      term: 'До 5 лет',
      features: ['Получение в день обращения', 'Минимум документов', 'Онлайн-оформление', 'Льготный период'],
      icon: 'Wallet',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Рефинансирование',
      rate: 'От 8.9%',
      amount: 'До 10 млн ₽',
      term: 'До 7 лет',
      features: ['Объединение кредитов', 'Снижение платежа', 'Выгоднее на 30%', 'Быстрое оформление'],
      icon: 'RefreshCw',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Автокредит',
      rate: 'От 7.9%',
      amount: 'До 7 млн ₽',
      term: 'До 5 лет',
      features: ['Новые и подержанные авто', 'Первый взнос от 0%', 'Trade-in', 'Каско в подарок'],
      icon: 'Car',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Кредиты
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Воплощайте мечты в реальность с выгодными кредитами от Барби Банка
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Калькулятор кредита</h2>
          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Calculator" className="h-6 w-6 text-primary" />
                Рассчитайте ежемесячный платёж
              </CardTitle>
              <CardDescription>Узнайте условия за 1 минуту</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Label className="text-lg">Сумма кредита: {amount.toLocaleString()} ₽</Label>
                <Slider 
                  value={[amount]} 
                  onValueChange={([v]) => setAmount(v)} 
                  min={50000} 
                  max={5000000} 
                  step={50000}
                  className="py-4" 
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>50 000 ₽</span>
                  <span>5 000 000 ₽</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-lg">Срок: {term} месяцев ({Math.floor(term / 12)} {term % 12 > 0 ? `года ${term % 12} мес` : 'лет'})</Label>
                <Slider 
                  value={[term]} 
                  onValueChange={([v]) => setTerm(v)} 
                  min={3} 
                  max={84} 
                  step={1}
                  className="py-4" 
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>3 месяца</span>
                  <span>7 лет</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-pink-50 p-8 rounded-2xl text-center">
                <p className="text-sm text-muted-foreground mb-2">Ежемесячный платёж</p>
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent mb-2">
                  {calculatePayment()} ₽
                </p>
                <p className="text-sm text-muted-foreground">Ставка от 9.9% годовых</p>
                <p className="text-xs text-muted-foreground mt-1">Переплата: {(calculatePayment() * term - amount).toLocaleString()} ₽</p>
              </div>

              <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary to-pink-400" size="lg">
                <Icon name="CheckCircle" className="mr-2 h-5 w-5" />
                Оформить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши кредитные программы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary">
                <div className={`h-32 bg-gradient-to-br ${product.color} p-6 text-white flex items-center gap-4`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <Icon name={product.icon} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                    <p className="text-sm opacity-90">Ставка {product.rate} годовых</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Сумма</p>
                      <p className="text-lg font-bold text-primary">{product.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Срок</p>
                      <p className="text-lg font-bold text-primary">{product.term}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {product.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-pink-400">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Требования к заёмщику</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'User', title: 'Возраст', desc: 'От 21 до 70 лет' },
              { icon: 'MapPin', title: 'Гражданство', desc: 'РФ с постоянной пропиской' },
              { icon: 'Briefcase', title: 'Стаж', desc: 'От 3 месяцев на последнем месте' }
            ].map((req, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={req.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{req.title}</CardTitle>
                  <CardDescription className="text-base">{req.desc}</CardDescription>
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

export default Credits;
