import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Mortgage = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [downPayment, setDownPayment] = useState(1000000);
  const [term, setTerm] = useState(180);

  const loanAmount = propertyPrice - downPayment;
  const downPaymentPercent = ((downPayment / propertyPrice) * 100).toFixed(0);

  const calculateMortgage = () => {
    const rate = 0.075;
    const monthlyRate = rate / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    return payment.toFixed(0);
  };

  const programs = [
    {
      title: 'Семейная ипотека',
      rate: '6%',
      description: 'Для семей с детьми',
      features: ['Ставка 6% на весь срок', 'До 12 млн ₽ (18 млн в Москве)', 'Первый взнос от 15%', 'Господдержка'],
      icon: 'Users',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Новостройка',
      rate: '7.5%',
      description: 'Квартира от застройщика',
      features: ['Первый взнос от 15%', 'До 30 лет', 'Онлайн-одобрение', 'Помощь в выборе'],
      icon: 'Building2',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Вторичка',
      rate: '8.5%',
      description: 'Готовое жильё',
      features: ['Любая квартира', 'Первый взнос от 20%', 'Быстрое оформление', 'Помощь с документами'],
      icon: 'Home',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Рефинансирование',
      rate: '7%',
      description: 'Снизьте ставку по ипотеке',
      features: ['Экономия до 40%', 'Снижение платежа', 'Без первого взноса', 'Любой банк'],
      icon: 'RefreshCw',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Ипотека
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Дом вашей мечты с выгодной ипотекой. Ставки от 6% годовых!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ипотечный калькулятор</h2>
          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Home" className="h-6 w-6 text-primary" />
                Рассчитайте ежемесячный платёж
              </CardTitle>
              <CardDescription>Узнайте, сколько будете платить каждый месяц</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Label className="text-lg">Стоимость недвижимости: {propertyPrice.toLocaleString()} ₽</Label>
                <Slider 
                  value={[propertyPrice]} 
                  onValueChange={([v]) => setPropertyPrice(v)} 
                  min={1000000} 
                  max={30000000} 
                  step={100000}
                  className="py-4" 
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1 млн ₽</span>
                  <span>30 млн ₽</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-lg">
                  Первоначальный взнос: {downPayment.toLocaleString()} ₽ ({downPaymentPercent}%)
                </Label>
                <Slider 
                  value={[downPayment]} 
                  onValueChange={([v]) => setDownPayment(v)} 
                  min={propertyPrice * 0.1} 
                  max={propertyPrice * 0.9} 
                  step={50000}
                  className="py-4" 
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>10%</span>
                  <span>90%</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-lg">Срок: {Math.floor(term / 12)} лет</Label>
                <Slider 
                  value={[term]} 
                  onValueChange={([v]) => setTerm(v)} 
                  min={12} 
                  max={360} 
                  step={12}
                  className="py-4" 
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1 год</span>
                  <span>30 лет</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-pink-50 p-8 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-6 text-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Сумма кредита</p>
                    <p className="text-2xl font-bold text-foreground">
                      {loanAmount.toLocaleString()} ₽
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ежемесячный платёж</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                      {calculateMortgage()} ₽
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Переплата</p>
                    <p className="text-2xl font-bold text-foreground">
                      {(calculateMortgage() * term - loanAmount).toLocaleString()} ₽
                    </p>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Ставка от 7.5% годовых
                </p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Ипотечные программы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary">
                <div className={`h-32 bg-gradient-to-br ${program.color} p-6 text-white flex items-center gap-4`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <Icon name={program.icon} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                    <p className="text-xl font-semibold">От {program.rate} годовых</p>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {program.features.map((feature, j) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Как получить ипотеку?</h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: '1', icon: 'FileText', title: 'Заявка', desc: 'Онлайн за 10 минут' },
              { step: '2', icon: 'CheckCircle', title: 'Одобрение', desc: 'Решение за 1 день' },
              { step: '3', icon: 'Home', title: 'Выбор жилья', desc: 'Поможем найти' },
              { step: '4', icon: 'FileCheck', title: 'Сделка', desc: 'Оформление документов' },
              { step: '5', icon: 'Key', title: 'Ключи', desc: 'Въезжайте в новый дом!' }
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all relative">
                {i < 4 && (
                  <div className="hidden md:block absolute top-16 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-pink-400 z-10"></div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <Icon name={item.icon} className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.desc}</CardDescription>
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

export default Mortgage;
