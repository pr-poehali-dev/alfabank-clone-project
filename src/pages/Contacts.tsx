import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Контакты
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Мы всегда на связи и готовы помочь
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                    Телефон горячей линии
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">8 800 777-88-99</p>
                    <p className="text-sm text-muted-foreground">Бесплатно по России</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Icon name="Clock" className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Круглосуточно</p>
                      <p className="text-sm text-muted-foreground">Без выходных и праздников</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Общие вопросы</p>
                    <a href="mailto:info@barbiebank.ru" className="text-primary font-semibold hover:underline">
                      info@barbiebank.ru
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Поддержка</p>
                    <a href="mailto:support@barbiebank.ru" className="text-primary font-semibold hover:underline">
                      support@barbiebank.ru
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Пресс-служба</p>
                    <a href="mailto:press@barbiebank.ru" className="text-primary font-semibold hover:underline">
                      press@barbiebank.ru
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                    Головной офис
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold">Москва, ул. Тверская, д. 1</p>
                  <p className="text-sm text-muted-foreground">Метро: Охотный Ряд, Театральная</p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Режим работы:</span> Пн-Пт 9:00-20:00, Сб-Вс 10:00-18:00
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-pink-400 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" className="h-6 w-6" />
                    Социальные сети
                  </CardTitle>
                  <CardDescription className="text-white/80">Следите за новостями и акциями</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Icon name="Twitter" className="h-5 w-5" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Icon name="Youtube" className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема обращения</Label>
                  <Input id="subject" placeholder="Кратко опишите вопрос" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Подробно опишите ваш вопрос" rows={5} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-pink-400 text-lg py-6">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Найдите ближайшее отделение</h2>
          <p className="text-center text-muted-foreground mb-12">Более 500 офисов по всей России</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { city: 'Москва', offices: '120 отделений', icon: 'Building' },
              { city: 'Санкт-Петербург', offices: '65 отделений', icon: 'Building' },
              { city: 'Казань', offices: '35 отделений', icon: 'Building' },
              { city: 'Екатеринбург', offices: '40 отделений', icon: 'Building' },
              { city: 'Новосибирск', offices: '30 отделений', icon: 'Building' },
              { city: 'Другие города', offices: '210+ отделений', icon: 'MapPin' }
            ].map((location, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={location.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{location.city}</CardTitle>
                  <CardDescription className="text-base">{location.offices}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="link" className="text-primary">
                    Показать на карте <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-pink-400">
              <Icon name="Map" className="mr-2 h-5 w-5" />
              Открыть интерактивную карту
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Как открыть счёт онлайн?', a: 'Заполните заявку на сайте, это займёт 5 минут. После одобрения вы сразу получите доступ к счёту.' },
              { q: 'Какие документы нужны?', a: 'Для физических лиц — паспорт РФ. Для юридических — учредительные документы и выписка из ЕГРЮЛ.' },
              { q: 'Есть ли комиссия за обслуживание?', a: 'Базовые тарифы — бесплатно. Премиум-карты и дополнительные услуги могут иметь комиссию.' },
              { q: 'Как связаться с поддержкой?', a: 'Звоните 8 800 777-88-99 (круглосуточно), пишите в чат на сайте или в мобильном приложении.' }
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-2">
                    <Icon name="HelpCircle" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
