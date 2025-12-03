import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            О Барби Банке
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Мы создаём финансовые решения для современных людей
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Sparkles" className="h-8 w-8 text-primary" />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>
                  Барби Банк создан для тех, кто мечтает ярко и живёт стильно. Мы верим, что банковские услуги могут быть не только удобными, но и вдохновляющими.
                </p>
                <p>
                  Наша цель — дать каждому клиенту финансовую свободу и уверенность в завтрашнем дне. Мы делаем банкинг доступным, понятным и красивым.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: '5 млн+', label: 'Клиентов', icon: 'Users' },
              { number: '10 лет', label: 'На рынке', icon: 'Calendar' },
              { number: '500+', label: 'Отделений', icon: 'Building' },
              { number: '24/7', label: 'Поддержка', icon: 'Headphones' }
            ].map((stat, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-4xl text-primary">{stat.number}</CardTitle>
                  <CardDescription className="text-lg">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'Heart',
                title: 'Забота о клиентах',
                description: 'Мы всегда на вашей стороне. Каждое решение принимается с мыслью о вашем комфорте и удобстве.',
                color: 'from-pink-500 to-pink-400'
              },
              {
                icon: 'Lightbulb',
                title: 'Инновации',
                description: 'Мы используем передовые технологии, чтобы сделать банкинг простым и доступным для всех.',
                color: 'from-purple-500 to-purple-400'
              },
              {
                icon: 'Shield',
                title: 'Надёжность',
                description: 'Ваши деньги под защитой. Мы соблюдаем все стандарты безопасности и имеем лицензию ЦБ РФ.',
                color: 'from-blue-500 to-blue-400'
              }
            ].map((value, i) => (
              <Card key={i} className="hover:shadow-2xl transition-all hover:scale-105">
                <CardHeader>
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon name={value.icon} className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Лицензии и награды</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                  Лицензии
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Генеральная лицензия ЦБ РФ № 9999</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Член системы страхования вкладов</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Сертификат ISO 27001</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Trophy" className="h-6 w-6 text-primary" />
                  Награды
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Star" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Лучший банк года 2024</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Star" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Премия за инновации в банкинге</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Star" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Лучший мобильный банк</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">История банка</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { year: '2014', title: 'Основание', description: 'Барби Банк начал свою работу с первого офиса в Москве' },
              { year: '2016', title: 'Первый миллион клиентов', description: 'Мы достигли важной вехи — 1 миллион довольных клиентов' },
              { year: '2019', title: 'Цифровизация', description: 'Запущено мобильное приложение и онлайн-банкинг' },
              { year: '2022', title: 'Расширение', description: 'Открыто 500 отделений по всей России' },
              { year: '2024', title: 'Лидерство', description: 'Барби Банк входит в топ-10 банков страны' }
            ].map((milestone, i) => (
              <Card key={i} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      <CardDescription className="text-base mt-1">{milestone.description}</CardDescription>
                    </div>
                  </div>
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

export default About;
