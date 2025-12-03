import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [creditAmount, setCreditAmount] = useState(500000);
  const [creditTerm, setCreditTerm] = useState(24);
  const [mortgageAmount, setMortgageAmount] = useState(3000000);
  const [mortgageTerm, setMortgageTerm] = useState(180);
  const [depositAmount, setDepositAmount] = useState(100000);
  const [depositTerm, setDepositTerm] = useState(12);

  const calculateCredit = () => {
    const rate = 0.14;
    const monthlyRate = rate / 12;
    const payment = (creditAmount * monthlyRate * Math.pow(1 + monthlyRate, creditTerm)) / (Math.pow(1 + monthlyRate, creditTerm) - 1);
    return payment.toFixed(0);
  };

  const calculateMortgage = () => {
    const rate = 0.08;
    const monthlyRate = rate / 12;
    const payment = (mortgageAmount * monthlyRate * Math.pow(1 + monthlyRate, mortgageTerm)) / (Math.pow(1 + monthlyRate, mortgageTerm) - 1);
    return payment.toFixed(0);
  };

  const calculateDeposit = () => {
    const rate = 0.09;
    const total = depositAmount * Math.pow(1 + rate, depositTerm / 12);
    return total.toFixed(0);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-bold text-primary">Альфа-Банк</h1>
              <nav className="hidden md:flex gap-6">
                <a href="#individual" className="text-sm font-medium hover:text-primary transition-colors">Физическим лицам</a>
                <a href="#business" className="text-sm font-medium hover:text-primary transition-colors">Бизнесу</a>
                <a href="#investments" className="text-sm font-medium hover:text-primary transition-colors">Инвестиции</a>
                <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукты</a>
                <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                8 800 200-00-00
              </Button>
              <Button>Войти</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Банк будущего уже здесь
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Современные банковские решения для вашего бизнеса и повседневной жизни
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8">
                Стать клиентом
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Популярные продукты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'CreditCard', title: 'Кредитные карты', desc: 'До 100 дней без процентов', color: 'text-primary' },
              { icon: 'PiggyBank', title: 'Вклады', desc: 'До 9% годовых', color: 'text-green-600' },
              { icon: 'Home', title: 'Ипотека', desc: 'От 8% годовых', color: 'text-blue-600' },
              { icon: 'TrendingUp', title: 'Инвестиции', desc: 'Начните с 1000 ₽', color: 'text-purple-600' }
            ].map((product, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <Icon name={product.icon} className={`h-12 w-12 ${product.color} mb-4`} />
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Подробнее <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculators" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Калькуляторы</h2>
          <Tabs defaultValue="credit" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="credit">Кредит</TabsTrigger>
              <TabsTrigger value="mortgage">Ипотека</TabsTrigger>
              <TabsTrigger value="deposit">Вклад</TabsTrigger>
            </TabsList>

            <TabsContent value="credit">
              <Card>
                <CardHeader>
                  <CardTitle>Калькулятор кредита</CardTitle>
                  <CardDescription>Рассчитайте ежемесячный платёж по кредиту</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Сумма кредита: {creditAmount.toLocaleString()} ₽</Label>
                    <Slider value={[creditAmount]} onValueChange={([v]) => setCreditAmount(v)} min={10000} max={3000000} step={10000} />
                  </div>
                  <div className="space-y-2">
                    <Label>Срок: {creditTerm} месяцев</Label>
                    <Slider value={[creditTerm]} onValueChange={([v]) => setCreditTerm(v)} min={3} max={60} step={1} />
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Ежемесячный платёж</p>
                    <p className="text-4xl font-bold text-primary">{calculateCredit()} ₽</p>
                    <p className="text-sm text-muted-foreground mt-2">Ставка от 14% годовых</p>
                  </div>
                  <Button className="w-full" size="lg">Оформить заявку</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mortgage">
              <Card>
                <CardHeader>
                  <CardTitle>Калькулятор ипотеки</CardTitle>
                  <CardDescription>Рассчитайте ежемесячный платёж по ипотеке</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Сумма ипотеки: {mortgageAmount.toLocaleString()} ₽</Label>
                    <Slider value={[mortgageAmount]} onValueChange={([v]) => setMortgageAmount(v)} min={500000} max={20000000} step={100000} />
                  </div>
                  <div className="space-y-2">
                    <Label>Срок: {Math.floor(mortgageTerm / 12)} лет</Label>
                    <Slider value={[mortgageTerm]} onValueChange={([v]) => setMortgageTerm(v)} min={12} max={360} step={12} />
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Ежемесячный платёж</p>
                    <p className="text-4xl font-bold text-primary">{calculateMortgage()} ₽</p>
                    <p className="text-sm text-muted-foreground mt-2">Ставка от 8% годовых</p>
                  </div>
                  <Button className="w-full" size="lg">Оформить заявку</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deposit">
              <Card>
                <CardHeader>
                  <CardTitle>Калькулятор вклада</CardTitle>
                  <CardDescription>Рассчитайте доход от вклада</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Сумма вклада: {depositAmount.toLocaleString()} ₽</Label>
                    <Slider value={[depositAmount]} onValueChange={([v]) => setDepositAmount(v)} min={10000} max={10000000} step={10000} />
                  </div>
                  <div className="space-y-2">
                    <Label>Срок: {depositTerm} месяцев</Label>
                    <Slider value={[depositTerm]} onValueChange={([v]) => setDepositTerm(v)} min={1} max={36} step={1} />
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Итоговая сумма</p>
                    <p className="text-4xl font-bold text-primary">{calculateDeposit()} ₽</p>
                    <p className="text-sm text-muted-foreground mt-2">Ставка до 9% годовых</p>
                  </div>
                  <Button className="w-full" size="lg">Открыть вклад</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="individual" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Физическим лицам</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр банковских услуг для комфортной жизни
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Wallet', title: 'Счета и карты', desc: 'Дебетовые карты с кэшбэком до 10%' },
              { icon: 'Banknote', title: 'Кредиты', desc: 'Потребительские кредиты от 9.9%' },
              { icon: 'Shield', title: 'Страхование', desc: 'Защита жизни и имущества' },
              { icon: 'Building', title: 'Ипотека', desc: 'Квартира в новостройке от 8%' },
              { icon: 'Car', title: 'Автокредит', desc: 'Новый автомобиль от 7.9%' },
              { icon: 'GraduationCap', title: 'Образование', desc: 'Кредиты на обучение' }
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardHeader>
                  <Icon name={service.icon} className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Юридическим лицам</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Эффективные решения для развития вашего бизнеса
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Briefcase', title: 'Расчётный счёт', desc: 'Открытие за 1 день, обслуживание от 0 ₽' },
              { icon: 'HandCoins', title: 'Кредитование', desc: 'Финансирование бизнеса на выгодных условиях' },
              { icon: 'FileText', title: 'Эквайринг', desc: 'Приём платежей от клиентов' },
              { icon: 'Globe', title: 'ВЭД', desc: 'Внешнеэкономическая деятельность' },
              { icon: 'Users', title: 'Зарплатный проект', desc: 'Выплаты сотрудникам' },
              { icon: 'LineChart', title: 'Инкассация', desc: 'Безопасная перевозка наличных' }
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardHeader>
                  <Icon name={service.icon} className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="investments" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Инвестиции</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Начните инвестировать с Альфа-Банком
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'TrendingUp', title: 'Акции', desc: 'Российские и зарубежные компании' },
              { icon: 'PieChart', title: 'Облигации', desc: 'Стабильный доход от 8%' },
              { icon: 'Coins', title: 'Фонды', desc: 'ETF и ПИФы' },
              { icon: 'Landmark', title: 'ИИС', desc: 'Налоговый вычет до 52 000 ₽' }
            ].map((product, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <Icon name={product.icon} className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.desc}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="link">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Телефон горячей линии</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">8 800 200-00-00</p>
                    <p className="text-sm text-muted-foreground">Бесплатно по России</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Круглосуточно</p>
                    <p className="text-sm text-muted-foreground">Без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Найти отделение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <p className="font-semibold">Более 1000 отделений по всей России</p>
                </div>
                <Button className="w-full">
                  <Icon name="Map" className="mr-2 h-4 w-4" />
                  Показать на карте
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О банке</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Продукты</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вклады</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Icon name="Facebook" className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Instagram" className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Twitter" className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-sm text-center text-background/60">
            <p>© 2024 АО «Альфа-Банк». Генеральная лицензия Банка России № 1326 от 16 января 2015 года.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
