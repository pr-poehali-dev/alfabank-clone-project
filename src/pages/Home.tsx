import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative bg-gradient-to-br from-primary/10 via-pink-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Мечтай ярко, живи стильно! 💖
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Барби Банк — это современные финансовые решения для тех, кто живёт по-своему. Яркие карты, выгодные условия и поддержка 24/7.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-pink-400 hover:opacity-90">
                <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                Стать клиентом
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Популярные продукты
          </h2>
          <p className="text-center text-muted-foreground mb-12">Выбирайте то, что подходит именно вам</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'CreditCard', title: 'Карты', desc: 'Кэшбэк до 15%', color: 'from-pink-500 to-pink-400', link: '/cards' },
              { icon: 'Banknote', title: 'Кредиты', desc: 'От 9.9% годовых', color: 'from-purple-500 to-purple-400', link: '/credits' },
              { icon: 'PiggyBank', title: 'Вклады', desc: 'До 10% годовых', color: 'from-blue-500 to-blue-400', link: '/deposits' },
              { icon: 'Home', title: 'Ипотека', desc: 'От 7.5% годовых', color: 'from-green-500 to-green-400', link: '/mortgage' }
            ].map((product, i) => (
              <Link key={i} to={product.link}>
                <Card className="hover:shadow-2xl hover:scale-105 transition-all cursor-pointer h-full animate-scale-in border-2 hover:border-primary" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                      <Icon name={product.icon} className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">{product.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                      Подробнее <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-secondary/50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Zap', title: 'Быстро', desc: 'Оформление карты за 5 минут онлайн' },
              { icon: 'Shield', title: 'Надёжно', desc: 'Защита данных на уровне банка' },
              { icon: 'Heart', title: 'Удобно', desc: 'Всё в одном приложении' },
              { icon: 'Gift', title: 'Выгодно', desc: 'Кэшбэк и бонусы каждый день' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи' },
              { icon: 'Sparkles', title: 'Стильно', desc: 'Дизайнерские карты' }
            ].map((feature, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-pink-500 to-purple-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к миллионам клиентов Барби Банка уже сегодня!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/20">
                <Icon name="Download" className="mr-2 h-5 w-5" />
                Скачать приложение
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
